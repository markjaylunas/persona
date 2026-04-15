/** biome-ignore-all lint/style/noNonNullAssertion: <explanation> */
import LZString from "lz-string";
import {
	type MinifiedPersona,
	minifiedPersonaSchema,
	type Persona,
} from "@/components/create/validator";

/**
 * Strips https:// or http:// to save ~8 characters per URL
 */
const stripProtocol = (url?: string) => url?.replace(/^https?:\/\//, "") || "";

/**
 * Re-adds https:// to stripped URLs
 */
const addProtocol = (url?: string) => {
	if (!url) return "";
	return url.startsWith("http") ? url : `https://${url}`;
};

const mapPersonaToMinified = (data: Persona) => {
	const s: Record<string, string> = {};

	// Only include social keys if they have a value
	const socials = data.socials as Record<string, string | undefined>;
	const socialMap: Record<string, string> = {
		email: "e",
		facebook: "f",
		github: "g",
		instagram: "i",
		linkedin: "l",
		telegram: "t",
		whatsapp: "w",
		x: "x",
		youtube: "y",
	};

	for (const [key, shortKey] of Object.entries(socialMap)) {
		if (socials[key]) {
			// We don't strip protocol for email or whatsapp as they aren't standard web URLs
			s[shortKey] =
				key === "email" || key === "whatsapp"
					? socials[key]!
					: stripProtocol(socials[key]);
		}
	}

	return {
		n: data.name,
		// Conditional inclusion: if property is empty, it doesn't exist in JSON
		...(data.about && { a: data.about }),
		...(data.photoUrl && { p: stripProtocol(data.photoUrl) }),
		...(Object.keys(s).length > 0 && { s }),
		// Map custom links to simple arrays [label, url] to remove "l" and "u" keys entirely
		...(data.customLinks.length > 0 && {
			c: data.customLinks.map((link) => [link.label, stripProtocol(link.url)]),
		}),
	};
};

const mapMinifiedToPersona = (data: MinifiedPersona): Persona => {
	return {
		name: data.n || "",
		about: data.a || "",
		photoUrl: addProtocol(data.p),
		socials: {
			email: data.s?.e || "",
			facebook: addProtocol(data.s?.f),
			github: addProtocol(data.s?.g),
			instagram: addProtocol(data.s?.i),
			linkedin: addProtocol(data.s?.l),
			telegram: addProtocol(data.s?.t),
			whatsapp: data.s?.w || "",
			x: addProtocol(data.s?.x),
			youtube: addProtocol(data.s?.y),
		},
		customLinks: (data.c || []).map((link) => ({
			label: link.l,
			url: addProtocol(link.u),
		})),
	};
};

export const encodePersona = (data: Persona): string => {
	const minified = mapPersonaToMinified(data);
	// JSON.stringify will now skip all undefined/optional fields we omitted
	return LZString.compressToEncodedURIComponent(JSON.stringify(minified));
};

export const decodePersona = (data: string): Persona => {
	const decompressed = LZString.decompressFromEncodedURIComponent(data);
	if (!decompressed) throw new Error("Failed to decompress Persona data");

	const json = JSON.parse(decompressed);

	// Validate the raw JSON against the minified schema
	const parsed = minifiedPersonaSchema.parse(json);

	return mapMinifiedToPersona(parsed);
};
