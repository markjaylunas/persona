import { Link, useParams } from "@tanstack/react-router";
import { ChevronDownIcon, Copy, Edit, Share2 } from "lucide-react";
import { toast } from "sonner";
import { Button, buttonVariants } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function PreviewHeader() {
	const { persona } = useParams({ from: "/preview/$persona" });
	const linkToPersona = `${window.location.origin}/v/${persona}`;

	const handleCopy = () => {
		navigator.clipboard.writeText(linkToPersona);
		toast.success("Link copied to clipboard!");
	};

	const handleShare = () => {
		if (!navigator.share) {
			toast.error("Share not supported on this device");
			return;
		}
		navigator
			.share({
				title: "Persona",
				text: "Check out my persona",
				url: linkToPersona,
			})
			.catch((error: unknown) => {
				if (error instanceof Error) {
					toast.error(error.message);
				}
			})
			.then(() => {
				toast.success("Shared successfully!");
			});
	};
	return (
		<header>
			<Card>
				<CardContent className="flex justify-between items-center gap-4">
					<CardTitle>Preview</CardTitle>
					<div className="flex items-center gap-2">
						<ButtonGroup>
							<Link
								to="/create"
								search={{ persona }}
								className={buttonVariants({ variant: "secondary" })}
							>
								<Edit className="size-4 mr-0.5" />
								Edit
							</Link>
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button className="pl-2!">
										Publish <ChevronDownIcon />
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent align="end" className="w-44">
									<DropdownMenuGroup>
										<DropdownMenuLabel>Publish</DropdownMenuLabel>
										<DropdownMenuSeparator />
										<DropdownMenuItem onClick={handleCopy}>
											<Copy className="size-4 mr-0.5" />
											Copy Link
										</DropdownMenuItem>
										<DropdownMenuItem onClick={handleShare}>
											<Share2 className="size-4 mr-0.5" />
											Share
										</DropdownMenuItem>
									</DropdownMenuGroup>
								</DropdownMenuContent>
							</DropdownMenu>
						</ButtonGroup>
					</div>
				</CardContent>
			</Card>
		</header>
	);
}
