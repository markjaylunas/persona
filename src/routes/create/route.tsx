import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Fragment } from "react";
import { Toaster } from "sonner";

export const Route = createFileRoute("/create")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<Fragment>
			<Outlet />
			<Toaster />
		</Fragment>
	);
}
