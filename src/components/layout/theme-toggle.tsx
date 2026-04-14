import type { VariantProps } from "class-variance-authority";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/layout/theme-provider";
import { Button, type buttonVariants } from "../ui/button";

export default function ModeToggle({
	variant,
	size,
	...props
}: VariantProps<typeof buttonVariants>) {
	const { toggleTheme } = useTheme();

	return (
		<Button variant="outline" size="icon-lg" {...props} onClick={toggleTheme}>
			<Sun className="size-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
			<Moon className="absolute size-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
}
