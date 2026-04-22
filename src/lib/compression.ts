/** biome-ignore-all lint/style/noNonNullAssertion: <ignore> */
import LZString from "lz-string";
import {
	type MinifiedPersona,
	minifiedPersonaSchema,
	type Persona,
} from "@/components/create/validator";

const mapPersonaToMinified = (data: Persona, isFromCreation?: boolean) => {
	return {
		n: data.name,
		// Conditional inclusion: if property is empty, it doesn't exist in JSON
		...(data.about && { a: data.about }),
		...(data.photoUrl && { p: data.photoUrl }),
		// Map custom links to simple arrays [label, url] to remove "l" and "u" keys entirely
		...(data.links.length > 0 && {
			l: data.links.map((link) => ({
				l: link.label,
				u: link.url,
				o: link.order,
			})),
		}),
		...(isFromCreation && { _: true }),
	};
};

const mapMinifiedToPersona = (data: MinifiedPersona): Persona => {
	return {
		name: data.n || "",
		about: data.a || "",
		photoUrl: data.p || "",
		links: (data.l || []).map((link) => ({
			label: link.l || "",
			url: link.u || "",
			order: link.o || 0,
		})),
	};
};

export const encodePersona = (
	data: Persona,
	isFromCreation?: boolean,
): string => {
	const minified = mapPersonaToMinified(data, isFromCreation);
	// JSON.stringify will now skip all undefined/optional fields we omitted
	return LZString.compressToEncodedURIComponent(JSON.stringify(minified));
};

export const decodePersona = (
	data: string,
): { persona: Persona; isFromCreation: boolean } => {
	const decompressed = LZString.decompressFromEncodedURIComponent(data);
	if (!decompressed) throw new Error("Failed to decompress Persona data");

	const json = JSON.parse(decompressed);

	// Validate the raw JSON against the minified schema
	const parsed = minifiedPersonaSchema.parse(json);

	return {
		persona: mapMinifiedToPersona(parsed),
		isFromCreation: parsed._ ?? false,
	};
};
