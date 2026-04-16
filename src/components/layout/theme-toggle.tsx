import { useRouteContext, useRouter } from "@tanstack/react-router";
import type { VariantProps } from "class-variance-authority";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, type buttonVariants } from "../ui/button";
import { setThemeServerFn, themes } from "./theme";

export default function ModeToggle({
	variant,
	size,
	...props
}: VariantProps<typeof buttonVariants>) {
	const router = useRouter();
	const { theme } = useRouteContext({ from: "__root__" });

	const toggleTheme = async () => {
		const next = themes[(themes.indexOf(theme) + 1) % themes.length];
		await setThemeServerFn({ data: next });
		router.invalidate();
	};

	return (
		<Button variant="outline" size="icon-lg" {...props} onClick={toggleTheme}>
			{/* SUN: Show only on Light */}
			<Sun
				className={cn(
					"size-5 transition-all",
					theme === "light" ? "scale-100 rotate-0" : "scale-0 -rotate-90",
				)}
			/>

			{/* MOON: Show only on Dark */}
			<Moon
				className={cn(
					"absolute size-5 transition-all",
					theme === "dark" ? "scale-100 rotate-0" : "scale-0 rotate-90",
				)}
			/>

			<span className="sr-only">Toggle theme</span>
		</Button>
	);
}
