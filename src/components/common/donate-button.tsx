import { Heart } from "lucide-react";
import { Button } from "../ui/button";

export default function DonateButton() {
	return (
		<Button>
			<Heart className="size-4 mr-0.5" />
			<span className="sr-only sm:not-sr-only">Donate</span>
		</Button>
	);
}
