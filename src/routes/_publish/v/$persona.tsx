import { createFileRoute } from "@tanstack/react-router";
import { AlertTriangle } from "lucide-react";
import PublishHeader from "@/components/layout/publish-header";
import PersonaDetails from "@/components/persona/detail";
import { decodePersona } from "@/lib/compression";
import { personaRouteValidator } from "@/lib/route-validators";

export const Route = createFileRoute("/_publish/v/$persona")({
	component: RouteComponent,
	validateSearch: undefined,
	params: personaRouteValidator,
	loader: ({ params }) => {
		const { persona, isFromCreation } = decodePersona(params.persona);
		return { persona, isFromCreation };
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
