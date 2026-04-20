import { Link, useNavigate, useParams } from "@tanstack/react-router";
import { ArrowRight, ChevronDownIcon, Copy, Edit, Share2 } from "lucide-react";
import { toast } from "sonner";
import { Button, buttonVariants } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Card, CardContent } from "@/components/ui/card";
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
	const navigate = useNavigate();
	const { persona } = useParams({ from: "/_creation/preview/$persona" });
	const linkToPersona = `${window.location.origin}/v/${persona}`;

	const handleGotoPublish = () => navigate({ to: `/v/${persona}` });

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
			});
	};
	return (
		<Card>
			<CardContent className="flex justify-between items-center gap-4">
				<h2 className="text-xl font-bold">Preview</h2>
				<div className="flex items-center gap-2">
					<ButtonGroup>
						<Link
							to="/create"
							search={{ persona }}
							className={buttonVariants({
								variant: "secondary",
							})}
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
							<DropdownMenuContent align="end">
								<DropdownMenuGroup>
									<DropdownMenuLabel>Publish</DropdownMenuLabel>
									<DropdownMenuSeparator />
									<DropdownMenuItem
										className="cursor-pointer"
										onClick={handleGotoPublish}
									>
										<ArrowRight className="size-4 mr-0.5" />
										Open Published
									</DropdownMenuItem>
									<DropdownMenuItem
										className="cursor-pointer"
										onClick={handleCopy}
									>
										<Copy className="size-4 mr-0.5" />
										Copy Link
									</DropdownMenuItem>
									<DropdownMenuItem
										className="cursor-pointer"
										onClick={handleShare}
									>
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
	);
}
