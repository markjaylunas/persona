import { ArrowUpRight, Mail } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getLabelFromUrl } from "@/lib/string";
import LinkIcon from "../common/link-icon";
import type { Persona } from "../create/validator";
import { Item, ItemContent, ItemMedia, ItemTitle } from "../ui/item";

export default function PersonaDetails({ persona }: { persona: Persona }) {
	const linksWithOrder = persona.links
		.filter(
			(link): link is NonNullable<typeof link> =>
				link.order !== undefined && link.order !== null,
		)
		.map((link) => ({
			...link,
			order: link.order ?? 0,
		}))
		.sort((a, b) => a.order - b.order);

	const otherLinks = persona.links.filter((link) => !link.order);

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

				{linksWithOrder.length > 0 && (
					<section className="bg-foreground/5 dark:bg-foreground rounded-full">
						<span className="sr-only">Socials</span>
						<ul className="flex flex-row flex-wrap justify-center items-center gap-6 px-6 py-1">
							{/* email */}
							{persona.email && (
								<LinkItem
									key={`${persona.email}-${persona.email}`}
									url={`mailto:${persona.email}`}
								>
									<Mail className=" size-8 dark:text-background group-hover/social:scale-105 transition-transform duration-200 ease-in-out" />
								</LinkItem>
							)}

							{/* links */}
							{linksWithOrder.map((link) => (
								<LinkItem key={`${link.url}-${link.order}`} url={link.url}>
									<LinkIcon url={link.url} className="size-8" />
								</LinkItem>
							))}
						</ul>
					</section>
				)}

				<div className="h-6" />

				<div className="flex flex-col w-full gap-3">
					{otherLinks.map((link, index) => {
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

const LinkItem = ({
	url,
	children,
}: {
	url: string;
	children: React.ReactNode;
}) => {
	return (
		<a
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			className="group/social hover:opacity-80 transition-opacity duration-200 ease-in-out p-4"
		>
			{children}
		</a>
	);
};
