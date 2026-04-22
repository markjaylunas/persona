import z from "zod";

// --- Sub-Schemas for Field Arrays ---

const linkSchema = z.object({
	label: z.string().optional(),
	url: z.url("Valid URL is required"),
	order: z.number().default(0).optional(),
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

	email: z.email().optional().or(z.literal("")),
	links: z
		.array(linkSchema)
		.min(1, "At least one link is required")
		.refine(
			(links) => {
				const orders = links.map((link) => link.order);
				const uniqueOrders = new Set(orders);
				return uniqueOrders.size === orders.length;
			},
			{
				message: "Orders must be unique",
				path: ["links"],
			},
		),
});

// --- Types ---

export type Persona = z.infer<typeof personaCreateFormSchema>;

// --- Default Values ---

export const defaultValues: Persona = {
	name: "",
	about: "",
	photoUrl: "",
	email: "",
	links: [],
};
export const mockPersonaValues: Persona = {
	name: "Makje",
	about:
		"Full-stack Web Developer with a passion for learning and building. From back-end logic to front-end polish, I enjoy solving complex problems and creating modern solutions.",
	photoUrl: "https://makje.com/makje-textured.avif",
	email: "markjay.lunas@gmail.com",
	links: [
		{
			url: "https://github.com/markjaylunas",
			order: 1,
		},
		{
			url: "https://linkedin.com/in/markjaylunas",
			order: 2,
		},
		{
			label: "Portfolio",
			url: "https://makje.com",
		},
		{
			label: "Projects",
			url: "https://makje.com/project",
		},
	],
};
export const minifiedPersonaSchema = z.object({
	n: personaCreateFormSchema.shape.name,
	a: personaCreateFormSchema.shape.about,
	p: personaCreateFormSchema.shape.photoUrl,

	l: z
		.array(
			z.object({
				l: linkSchema.shape.label,
				u: linkSchema.shape.url,
				o: linkSchema.shape.order,
			}),
		)
		.optional(),
	_: z.boolean().optional(),
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
