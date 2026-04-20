import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Toaster } from "sonner";
import BrandLogoLink from "@/components/layout/brand-logo-link";

export const Route = createFileRoute("/_publish/v")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<Outlet />

			<div className="h-8" />

			<footer className="flex justify-center items-center py-10">
				<BrandLogoLink />
			</footer>

			<Toaster />
		</>
	);
}
