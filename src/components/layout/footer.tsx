export default function Footer() {
	return (
		<footer className="py-20 border-t bg-muted/10">
			<div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
				<div className="flex flex-col items-center md:items-start gap-4">
					<span className="text-3xl font-black tracking-tighter">Persona</span>
					<p className="text-muted-foreground font-medium">
						© 2026 Makje. Built with passion for creators.
					</p>
				</div>
				<div className="flex flex-wrap justify-center gap-10 text-base text-muted-foreground font-bold uppercase tracking-widest">
					<a
						href="https://makje.com"
						className="hover:text-primary transition-colors"
					>
						Developer
					</a>
					<a
						href="https://github.com/markjaylunas/persona"
						className="hover:text-primary transition-colors"
					>
						GitHub
					</a>
					<a
						href="https://makje.com/privacy"
						className="hover:text-primary transition-colors"
					>
						Privacy
					</a>
				</div>
			</div>
		</footer>
	);
}
