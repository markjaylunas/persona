import { createFileRoute } from "@tanstack/react-router";
import z from "zod";
import PersonaDetails from "@/components/persona/detail";
import { decodePersona } from "@/lib/compression";

export const Route = createFileRoute("/v/$persona")({
	component: RouteComponent,
	params: z.object({
		persona: z.string(),
	}),
	loader: ({ params }) => {
		const persona = decodePersona(params.persona);
		return { persona };
	},
});

function RouteComponent() {
	const { persona } = Route.useLoaderData();
	return <PersonaDetails persona={persona} />;
}
