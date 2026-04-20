import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import Header from "@/components/layout/header";
import { buttonVariants } from "@/components/ui/button";

export const Route = createFileRoute("/_main")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<Header>
				<Link to="/create" className={buttonVariants()}>
					<Plus />
					Create
				</Link>
			</Header>
			<Outlet />
		</>
	);
}
