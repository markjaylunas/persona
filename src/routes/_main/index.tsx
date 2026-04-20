import { createFileRoute, Link } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import ThemeToggle from "@/components/layout/theme-toggle";
import { buttonVariants } from "@/components/ui/button";

export const Route = createFileRoute("/_main/")({ component: App });

function App() {
	return (
		<main className="px-4 pb-8 pt-14">
			<Link to="/create" className={buttonVariants({ variant: "secondary" })}>
				<Plus />
				Create
			</Link>
			<ThemeToggle />
		</main>
	);
}
