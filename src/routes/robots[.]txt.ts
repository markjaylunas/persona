import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/robots.txt")({
	server: {
		handlers: {
			GET: async () => {
				const robots = `User-agent: *
Allow: /
Disallow: /api/

Sitemap: ${process.env.SERVER_URL}/sitemap.xml`.trim();

				return new Response(robots, {
					headers: {
						"Content-Type": "text/plain",
					},
				});
			},
		},
	},
});
