import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/preview")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<Outlet />
			<footer>footer here</footer>
			<Toaster />
		</>
	);
}
