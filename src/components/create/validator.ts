/** biome-ignore-all lint/suspicious/noExplicitAny: <ignore> */
import z from "zod";

// --- Sub-Schemas for Field Arrays ---

const link = z.url().optional().or(z.literal(""));

// Social Links: Based on the fixed inputs in Image 0
const socialLinksSchema = z.object({
	facebook: link,
	x: link,
	instagram: link,
	github: link,
	telegram: link,
	linkedin: link,
	email: z.email().optional().or(z.literal("")),
	youtube: link,
	whatsapp: link,
});

// Custom Links: For the dynamic list in Image 1
const customLinkSchema = z.object({
	label: z.string().min(1, "Label is required"),
	url: z.url("Valid URL is required"),
});

// --- Main Persona Form Schema ---

export const personaCreateFormSchema = z.object({
	// Profile Section
	name: z.string().min(1, "Name is required").max(50),
	about: z.string().max(250).optional(),

	// Avatar handled as a simple URL string
	photoUrl: z
		.url("Please enter a valid image URL")
		.optional()
		.or(z.literal("")),

	// Social Links Section
	socials: socialLinksSchema,

	// Custom Links Section
	customLinks: z.array(customLinkSchema),
});

// --- Types ---

export type Persona = z.infer<typeof personaCreateFormSchema>;
export type CustomLink = z.infer<typeof customLinkSchema>;

// --- Default Values ---

export const defaultValues: Persona = {
	name: "",
	about: "",
	photoUrl: "",
	socials: {
		facebook: "",
		x: "",
		instagram: "",
		github: "",
		telegram: "",
		linkedin: "",
		email: "",
		youtube: "",
		whatsapp: "",
	},
	customLinks: [],
};

export const minifiedPersonaSchema = z.object({
	n: personaCreateFormSchema.shape.name,
	a: personaCreateFormSchema.shape.about,
	p: personaCreateFormSchema.shape.photoUrl,
	s: z.object({
		e: link,
		f: link,
		g: link,
		i: link,
		l: link,
		t: link,
		w: link,
		x: link,
		y: link,
	}),
	c: z.array(
		z.object({
			l: customLinkSchema.shape.label,
			u: customLinkSchema.shape.url,
		}),
	),
});

export type MinifiedPersona = z.infer<typeof minifiedPersonaSchema>;
