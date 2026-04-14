import { createFileRoute, Link } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { buttonVariants } from "@/components/ui/button";

export const Route = createFileRoute("/")({ component: App });

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
