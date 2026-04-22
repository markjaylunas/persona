import { ArrowUpRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getLabelFromUrl } from "@/lib/string";
import LinkIcon from "../common/link-icon";
import type { Persona } from "../create/validator";
import { Item, ItemContent, ItemMedia, ItemTitle } from "../ui/item";

export default function PersonaDetails({ persona }: { persona: Persona }) {
	return (
		<section className="flex justify-center items-center gap-12 ">
			<div className="flex flex-col items-center px-6 py-10 gap-4">
				<Avatar className="w-24 h-24 border">
					<AvatarImage
						src={persona.photoUrl}
						alt={persona.name}
						className="object-cover"
					/>
					<AvatarFallback className="text-2xl uppercase">
						{persona.name?.substring(0, 2) || "?"}
					</AvatarFallback>
				</Avatar>

				<h1 className="text-[22px] text-foreground font-bold text-center ">
					{persona.name}
				</h1>

				{persona.about && (
					<p className="text-foreground/80 text-center text-sm leading-relaxed text-balance max-w-2xl">
						{persona.about}
					</p>
				)}

				<div className="h-4" />

				<div className="h-6" />

				<div className="flex flex-col w-full gap-3">
					{persona.links.map((link, index) => {
						const key = `customLinks-${index}`;
						return (
							<a
								key={key}
								href={link.url}
								target="_blank"
								rel="noopener noreferrer"
								className="hover:opacity-80 transition-opacity duration-200 ease-in-out"
							>
								<Item className="bg-primary-foreground dark:bg-muted">
									<ItemMedia>
										<LinkIcon url={link.url} />
									</ItemMedia>
									<ItemContent>
										<ItemTitle className="line-clamp-1">
											{link.label || getLabelFromUrl(link.url)}
										</ItemTitle>
									</ItemContent>
									<ItemMedia>
										<ArrowUpRight className="w-5 h-5 mr-3 text-slate-500 dark:text-slate-300" />
									</ItemMedia>
								</Item>
							</a>
						);
					})}
				</div>
			</div>
		</section>
	);
}
