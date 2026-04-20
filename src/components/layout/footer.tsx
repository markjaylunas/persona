import { Link } from "@tanstack/react-router";
import BrandLogoLink from "./brand-logo-link";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<>
			<div className="border border-muted dark:border-muted-foreground" />
			<footer className="relative w-full py-12 max-w-5xl mx-auto px-6">
				<div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-12 items-start mx-auto">
					{/* Brand Section */}
					<div className="col-span-2 sm:col-span-1 flex flex-col gap-2">
						<BrandLogoLink />

						<p className="text-sm text-foreground mt-4 max-w-xs leading-relaxed">
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
								<Link
									to="/privacy"
									className="text-sm text-muted-foreground hover:opacity-60 transition-opacity"
								>
									Privacy Policy
								</Link>
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
		</>
	);
}
