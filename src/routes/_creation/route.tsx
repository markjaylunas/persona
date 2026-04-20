import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Toaster } from "sonner";
import DonateButton from "@/components/common/donate-button";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import ThemeToggle from "@/components/layout/theme-toggle";

export const Route = createFileRoute("/_creation")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<Header>
				<div className="flex gap-2">
					<ThemeToggle />
					<DonateButton />
				</div>
			</Header>
			<div className="max-w-7xl mx-auto py-12">
				<Outlet />
			</div>
			<Footer />
			<Toaster />
		</>
	);
}
