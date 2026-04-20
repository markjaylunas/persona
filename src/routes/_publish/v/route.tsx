import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_publish/v")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<Outlet />
			<footer className="flex justify-center items-center gap-2">
				<p>Powered by</p>
				<Link to="/">Persona</Link>
			</footer>
		</>
	);
}
