import PublishButtons from "../common/publish-buttons";
import ThemeToggle from "./theme-toggle";

export default function PublishHeader() {
	return (
		<header className="flex justify-between items-center p-4 max-w-7xl mx-auto">
			<div />
			<div className="flex gap-2">
				<ThemeToggle />
				<PublishButtons />
			</div>
		</header>
	);
}
