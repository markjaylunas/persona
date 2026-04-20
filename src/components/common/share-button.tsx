import { Copy, Share } from "lucide-react";
import { Button } from "../ui/button";
import { ButtonGroup } from "../ui/button-group";

export default function ShareButton() {
	return (
		<ButtonGroup>
			<Button>
				<Share className="size-4 mr-0.5" />
				Share
			</Button>
			<Button variant="outline">
				<Copy className="size-4" />
				<span className="sr-only">copy link</span>
			</Button>
		</ButtonGroup>
	);
}
