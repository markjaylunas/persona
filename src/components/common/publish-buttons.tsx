import { useNavigate, useParams, useSearch } from "@tanstack/react-router";
import { Copy, Edit, Share } from "lucide-react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { ButtonGroup } from "../ui/button-group";

export default function PublishButtons() {
	const navigate = useNavigate();
	const { isFromCreation } = useSearch({ from: "/_publish/v/$persona" });
	const { persona } = useParams({ from: "/_publish/v/$persona" });
	const linkToPersona = `${window.location.origin}/v/${persona}`;

	const handleCopy = () => {
		navigator.clipboard.writeText(linkToPersona);
		toast.success("Link copied to clipboard!");
	};

	const handleShare = async () => {
		if (!navigator.share) {
			toast.error("Share not supported on this device");
			return;
		}
		try {
			await navigator.share({
				title: "Persona",
				text: "Check out my persona",
				url: linkToPersona,
			});
		} catch (error) {
			if (error instanceof Error) {
				toast.error(error.message);
			}
		}

		toast.success("Link shared!");
	};

	const handleGotoEdit = () => navigate({ to: `/create?persona=${persona}` });

	return (
		<ButtonGroup>
			<Button size="lg" onClick={handleShare}>
				<Share className="size-4 mr-0.5" />
				Share
			</Button>
			{isFromCreation && (
				<Button variant="outline" size="lg" onClick={handleGotoEdit}>
					<Edit className="size-4 mr-0.5" />
					Edit
				</Button>
			)}
			<Button variant="outline" size="lg" onClick={handleCopy}>
				<Copy className="size-4" />
				<span className="sr-only">copy link</span>
			</Button>
		</ButtonGroup>
	);
}
