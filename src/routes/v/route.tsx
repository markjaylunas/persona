import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/v")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<Outlet />
			<footer>footer here</footer>
		</>
	);
}
