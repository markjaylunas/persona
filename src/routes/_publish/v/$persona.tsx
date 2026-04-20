import { createFileRoute } from "@tanstack/react-router";
import PersonaDetails from "@/components/persona/detail";
import { decodePersona } from "@/lib/compression";
import { personaRouteValidator } from "@/lib/route-validators";

export const Route = createFileRoute("/_publish/v/$persona")({
	component: RouteComponent,
	params: personaRouteValidator,
	loader: ({ params }) => {
		const persona = decodePersona(params.persona);
		return { persona };
	},
});

function RouteComponent() {
	const { persona } = Route.useLoaderData();
	return <PersonaDetails persona={persona} />;
}
