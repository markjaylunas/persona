import { Link } from "@tanstack/react-router";
import makjeLogoDark from "@/assets/makje-dark.svg";

export default function BrandLogoLink() {
	return (
		<div className="flex items-center gap-2 justify-self-center">
			<Link to="/">
				<img
					src={makjeLogoDark}
					alt="Persona by Makje Logo"
					className="size-10"
					width={40}
					height={40}
				/>
			</Link>
			<span className="text-background dark:text-foreground text-2xl font-medium tracking-tighter">
				<Link
					to="/"
					className="hover:opacity-80 transition-opacity duration-200 ease-in-out"
				>
					Persona
				</Link>
				<a
					href="https://makje.com?utm_source=persona&utm_medium=referral&utm_campaign=portfolio-backlink"
					target="_blank"
					rel="noopener noreferrer"
				>
					<span className="text-xs font-medium tracking-tighter self-end ml-2 hover:opacity-80 transition-opacity duration-200 ease-in-out">
						by Makje
					</span>
				</a>
			</span>
		</div>
	);
}
