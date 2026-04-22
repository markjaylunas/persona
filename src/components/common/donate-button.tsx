import { Heart } from "lucide-react";
import { buttonVariants } from "../ui/button";

export default function DonateButton() {
	return (
		<a
			href="https://ko-fi.com/makje"
			target="_blank"
			rel="noopener noreferrer"
			className={buttonVariants({ size: "lg" })}
		>
			<Heart className="size-4 mr-0.5" />
			<span className="sr-only sm:not-sr-only">Donate</span>
		</a>
	);
}
