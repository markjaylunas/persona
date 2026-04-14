import { createFileRoute } from "@tanstack/react-router";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<main className="px-4 pb-8 pt-14">
			<Button>Button</Button>
			<ThemeToggle />
		</main>
	);
}
