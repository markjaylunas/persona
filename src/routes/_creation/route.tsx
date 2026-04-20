import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Toaster } from "sonner";
import DonateButton from "@/components/common/donate-button";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

export const Route = createFileRoute("/_creation")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<Header>
				<DonateButton />
			</Header>
			<Outlet />
			<Footer />
			<Toaster />
		</>
	);
}
