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

export const personaCreateFormSchema = z
	.object({
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
	})
	.refine(
		(data) => {
			return (
				Object.values(data.socials).some((value) => value !== "") ||
				data.customLinks.length > 0
			);
		},
		{
			message: "At least one social link or custom link is required",
			path: ["links"],
		},
	);

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
	s: z
		.object({
			e: personaCreateFormSchema.shape.socials.shape.email,
			f: link,
			g: link,
			i: link,
			l: link,
			t: link,
			w: link,
			x: link,
			y: link,
		})
		.optional(),
	c: z
		.array(
			z.object({
				l: customLinkSchema.shape.label,
				u: customLinkSchema.shape.url,
			}),
		)
		.optional(),
});

export type MinifiedPersona = z.infer<typeof minifiedPersonaSchema>;

const imgbbImageDetailsSchema = z.object({
	filename: z.string(),
	name: z.string(),
	mime: z.string(),
	extension: z.string(),
	url: z.url(),
});

export const imgbbResponseSchema = z.object({
	data: z.object({
		id: z.string(),
		title: z.string(),
		url_viewer: z.url(),
		url: z.url(),
		display_url: z.url(),
		width: z.string().or(z.number()),
		height: z.string().or(z.number()),
		size: z.string().or(z.number()),
		time: z.string().or(z.number()),
		expiration: z.string().or(z.number()),
		image: imgbbImageDetailsSchema,
		thumb: imgbbImageDetailsSchema,
		medium: imgbbImageDetailsSchema.optional(),
		delete_url: z.url(),
	}),
	success: z.boolean(),
	status: z.number(),
});

export type ImgBBResponse = z.infer<typeof imgbbResponseSchema>;

export const uploadImageResponseSchema = z.object({
	success: z.boolean(),
	publicUrl: z.url(),
});

export type UploadImageResponse = z.infer<typeof uploadImageResponseSchema>;
