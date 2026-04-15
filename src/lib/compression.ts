/** biome-ignore-all lint/style/noNonNullAssertion: <ignore> */
import LZString from "lz-string";
import {
	type MinifiedPersona,
	minifiedPersonaSchema,
	type Persona,
} from "@/components/create/validator";

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
			s[shortKey] = socials[key];
		}
	}

	return {
		n: data.name,
		// Conditional inclusion: if property is empty, it doesn't exist in JSON
		...(data.about && { a: data.about }),
		...(data.photoUrl && { p: data.photoUrl }),
		...(Object.keys(s).length > 0 && { s }),
		// Map custom links to simple arrays [label, url] to remove "l" and "u" keys entirely
		...(data.customLinks.length > 0 && {
			c: data.customLinks.map((link) => ({
				l: link.label,
				u: link.url,
			})),
		}),
	};
};

const mapMinifiedToPersona = (data: MinifiedPersona): Persona => {
	const s = data.s || {};

	return {
		name: data.n || "",
		about: data.a || "",
		photoUrl: data.p || "",
		socials: {
			email: s.e || "",
			facebook: s.f || "",
			github: s.g || "",
			instagram: s.i || "",
			linkedin: s.l || "",
			telegram: s.t || "",
			whatsapp: s.w || "",
			x: s.x || "",
			youtube: s.y || "",
		},
		customLinks: (data.c || []).map((link) => ({
			label: link.l || "",
			url: link.u || "",
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
