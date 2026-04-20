import { Link } from "@tanstack/react-router";
import makjeLogoDark from "@/assets/makje-dark.svg";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="relative w-full py-12 max-w-5xl mx-auto px-6">
			<div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-start mx-auto">
				{/* Brand Section */}
				<div className="col-span-2 sm:col-span-1 flex flex-col gap-2">
					<div className="flex items-center gap-2">
						<Link to="/" className="flex items-center space-x-2">
							<img src={makjeLogoDark} alt="MakJe Logo" className="size-8" />
							<span className="text-3xl font-black tracking-tighter">
								Persona
							</span>
						</Link>
					</div>

					<p className="text-sm text-muted-foreground mt-4 max-w-xs leading-relaxed">
						A high-performance identity platform built with passion for
						creators, leveraging modern serverless infrastructure.
					</p>
				</div>

				{/* Links Section */}
				<nav
					aria-label="Site Navigation"
					className="justify-self-start sm:justify-self-end"
				>
					<h3 className="text-sm text-accent-foreground uppercase tracking-wider mb-4">
						Navigation
					</h3>
					<ul className="space-y-2">
						<li>
							<Link
								to="/"
								className="text-sm text-muted-foreground hover:opacity-60 transition-opacity"
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								to="/create"
								className="text-sm text-muted-foreground hover:opacity-60 transition-opacity"
							>
								Create Persona
							</Link>
						</li>
					</ul>
				</nav>

				{/* Resources Section */}
				<nav
					aria-label="Footer Navigation"
					className="justify-self-start sm:justify-self-end"
				>
					<h3 className="text-sm text-accent-foreground uppercase tracking-wider mb-4">
						Resources
					</h3>
					<ul className="space-y-2">
						<li>
							<a
								href="https://github.com/markjaylunas/persona"
								target="_blank"
								rel="noopener noreferrer"
								className="text-sm text-muted-foreground hover:opacity-60 transition-opacity"
							>
								GitHub
							</a>
						</li>
						<li>
							<a
								href="https://makje.com/privacy"
								className="text-sm text-muted-foreground hover:opacity-60 transition-opacity"
							>
								Privacy Policy
							</a>
						</li>
					</ul>
				</nav>

				{/* Social/Developer Section */}
				<div className="justify-self-start sm:justify-self-center">
					<h3 className="text-sm text-accent-foreground uppercase tracking-wider mb-4">
						Connect
					</h3>
					<ul className="space-y-2">
						<li>
							<a
								href="https://makje.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-sm text-muted-foreground hover:opacity-60 transition-opacity"
							>
								Developer Portfolio
							</a>
						</li>
					</ul>
				</div>
			</div>

			<p className="text-xs text-muted-foreground text-center mt-12">
				© {currentYear} MakJe. All rights reserved.
			</p>
		</footer>
	);
}
