import { createFileRoute } from "@tanstack/react-router";
import PreviewHeader from "@/components/page/preview/header";
import PersonaDetails from "@/components/persona/detail";
import { decodePersona } from "@/lib/compression";
import { personaRouteValidator } from "@/lib/route-validators";

export const Route = createFileRoute("/_creation/preview/$persona")({
	component: RouteComponent,
	params: personaRouteValidator,
	loader: ({ params }) => {
		const persona = decodePersona(params.persona);
		return { persona };
	},
});

function RouteComponent() {
	const { persona } = Route.useLoaderData();
	return (
		<main className="relative min-h-screen m-4">
			<PreviewHeader />
			<PersonaDetails persona={persona} />
		</main>
	);
}
