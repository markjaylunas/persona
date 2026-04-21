import { createFileRoute } from "@tanstack/react-router";
import { AlertTriangle } from "lucide-react";
import PublishHeader from "@/components/layout/publish-header";
import PersonaDetails from "@/components/persona/detail";
import { decodePersona } from "@/lib/compression";
import { META_CONSTANTS } from "@/lib/meta-constants";
import { personaRouteValidator } from "@/lib/route-validators";

export const Route = createFileRoute("/_publish/v/$persona")({
	component: RouteComponent,
	validateSearch: undefined,
	params: personaRouteValidator,
	loader: ({ params }) => {
		const { persona, isFromCreation } = decodePersona(params.persona);
		return { persona, isFromCreation };
	},
	head: ({ loaderData }) => {
		const title = loaderData
			? `${loaderData.persona.name} | Persona`
			: "Persona | Makje";
		const description = loaderData?.persona.about ?? META_CONSTANTS.description;
		const image = loaderData?.persona.photoUrl ?? META_CONSTANTS.image;
		return {
			meta: [
				{ title },
				{ name: "description", content: description },
				{ property: "og:title", content: title },
				{ property: "og:description", content: description },
				...(image ? [{ property: "og:image", content: image }] : []),
				{ property: "og:type", content: "article" },
				{
					name: "twitter:card",
					content: image ? META_CONSTANTS.twitterCard : "summary",
				},
				{ name: "twitter:title", content: title },
				{ name: "twitter:description", content: description },
				...(image ? [{ name: "twitter:image", content: image }] : []),
			],
		};
	},
});

function RouteComponent() {
	const { persona, isFromCreation } = Route.useLoaderData();
	return (
		<main className="max-w-7xl mx-auto">
			<PublishHeader />
			{isFromCreation && <WarningBanner />}
			<PersonaDetails persona={persona} />
		</main>
	);
}

function WarningBanner() {
	return (
		<div className="mx-4 mt-4 flex items-start gap-3 rounded-xl border border-amber-500/40 bg-amber-500/10 px-4 py-3 text-sm text-amber-600 dark:text-amber-400">
			<AlertTriangle className="mt-0.5 size-4 shrink-0" />
			<p>
				<strong>Don't share this URL directly.</strong> The current browser URL
				contains a preview token — use the <b>Share</b> or <b>Copy</b> button
				above to get the correct link, so your data won't be modified by others.
			</p>
		</div>
	);
}
