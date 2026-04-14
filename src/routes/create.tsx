import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/create")({
	head: () => ({
		meta: [
			{ title: "Create Persona | Persona | Makje" },
			{ name: "description", content: "Create a new persona for your brand." },
			{ property: "og:title", content: "Create Persona | Persona | Makje" },
			{
				property: "og:description",
				content: "Create a new persona for your brand.",
			},
			{ property: "og:type", content: "website" },
			{ property: "og:url", content: "https://makje.com/create" },
			{ property: "og:image", content: "https://makje.com/og-image.png" },
			{ property: "og:image:width", content: "1200" },
			{ property: "og:image:height", content: "630" },
			{ property: "og:image:alt", content: "Create Persona | Persona | Makje" },
			{ property: "og:site_name", content: "Makje" },
			{ property: "og:locale", content: "en_US" },
			{ property: "twitter:card", content: "summary_large_image" },
			{
				property: "twitter:title",
				content: "Create Persona | Persona | Makje",
			},
			{
				property: "twitter:description",
				content: "Create a new persona for your brand.",
			},
			{ property: "twitter:image", content: "https://makje.com/og-image.png" },
			{
				property: "twitter:image:alt",
				content: "Create Persona | Persona | Makje",
			},
			{ property: "twitter:site", content: "@makje" },
			{ property: "twitter:creator", content: "@makje" },
		],
		links: [
			{
				rel: "canonical",
				href: "https://makje.com/create",
			},
		],
	}),
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/create"!</div>;
}
