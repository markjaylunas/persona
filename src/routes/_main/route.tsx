import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import ThemeToggle from "@/components/layout/theme-toggle";
import { buttonVariants } from "@/components/ui/button";

export const Route = createFileRoute("/_main")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<Header>
				<div className="flex items-center gap-2">
					<ThemeToggle />
					<Link
						to="/create"
						className={buttonVariants({
							size: "lg",
						})}
					>
						<Plus />
						<span className="sr-only sm:not-sr-only">Create</span>
					</Link>
				</div>
			</Header>
			<Outlet />
			<Footer />
		</>
	);
}
