import { createFileRoute } from "@tanstack/react-router";
import { DatabaseZap, ShieldCheck } from "lucide-react";
import CreateForm from "@/components/create/form";
import { decodePersona } from "@/lib/compression";
import { createRouteSearchParamValidator } from "@/lib/route-validators";

export const Route = createFileRoute("/_creation/create/")({
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
	validateSearch: createRouteSearchParamValidator,
	loaderDeps: ({ search: { persona } }) => ({ persona }),
	loader: ({ deps }) => {
		if (deps.persona) {
			const persona = decodePersona(deps.persona);
			return { persona };
		}
		return { persona: null };
	},
	ssr: false,
	component: RouteComponent,
});

function RouteComponent() {
	const { persona } = Route.useLoaderData();
	return (
		<main className="relative min-h-screen m-4">
			{/* Info Section */}
			<header className="mb-12">
				<h1 className="text-4xl font-bold tracking-tighter text-paper-100">
					Create Persona
				</h1>

				{/* Info Section */}
				<section className="mt-8 p-5 rounded-sm bg-ink-900 border border-white/10">
					<div className="flex flex-col md:flex-row gap-6">
						<div className="flex-1 space-y-3">
							<div className="flex items-center gap-2 text-wasabi-500">
								<ShieldCheck size={18} />
								<h2 className="text-xs uppercase tracking-[0.2em] font-bold">
									Privacy First
								</h2>
							</div>
							<p className="text-sm text-paper-300 leading-relaxed">
								Persona is a <b>no-database application</b>. We do not collect,
								store, or sell your personal information. Your profile exists
								only within the link you generate.
							</p>
						</div>

						<div className="flex-1 space-y-3 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-6">
							<div className="flex items-center gap-2 text-paper-400">
								<DatabaseZap size={18} />
								<h2 className="text-xs uppercase tracking-[0.2em] font-bold">
									How it works
								</h2>
							</div>
							<p className="text-sm text-paper-300 leading-relaxed">
								We use <b>URL Persistence</b>. When you publish, your data is
								compressed into a unique string and appended to the URL. This
								allows your profile to be shared without ever touching a server.
							</p>
						</div>
					</div>
				</section>
			</header>

			<CreateForm defaultPersona={persona ?? undefined} />
		</main>
	);
}
