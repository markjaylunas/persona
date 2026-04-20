import { createFileRoute } from "@tanstack/react-router";
import PublishHeader from "@/components/layout/publish-header";
import PersonaDetails from "@/components/persona/detail";
import { decodePersona } from "@/lib/compression";
import {
	personaRouteValidator,
	publishRouteSearchParamValidator,
} from "@/lib/route-validators";

export const Route = createFileRoute("/_publish/v/$persona")({
	component: RouteComponent,
	validateSearch: publishRouteSearchParamValidator,
	params: personaRouteValidator,
	loader: ({ params }) => {
		const persona = decodePersona(params.persona);
		return { persona };
	},
});

function RouteComponent() {
	const { persona } = Route.useLoaderData();
	return (
		<main className="max-w-7xl mx-auto">
			<PublishHeader />
			<PersonaDetails persona={persona} />
		</main>
	);
}
