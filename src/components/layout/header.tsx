import BrandLogoLink from "./brand-logo-link";

export default function Header({ children }: { children: React.ReactNode }) {
	return (
		<header className="py-4 bg-foreground dark:bg-primary/5">
			<div className="max-w-7xl mx-auto flex justify-between items-center gap-4 px-4">
				<BrandLogoLink />

				{children}
			</div>
		</header>
	);
}
