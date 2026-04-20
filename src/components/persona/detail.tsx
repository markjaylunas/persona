import { ArrowUpRight, Globe, Mail } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { Persona } from "../create/validator";
import { Icon, type IconLibrary } from "../icon/library";
import { Item, ItemContent, ItemMedia, ItemTitle } from "../ui/item";

export default function PersonaDetails({ persona }: { persona: Persona }) {
	const hasSocials = Object.values(persona.socials).some((val) => val);

	const renderSocialIcon = (key: string, url: string) => {
		if (!url) return null;

		const href =
			key === "email" && !url.startsWith("mailto:") ? `mailto:${url}` : url;

		return (
			<a
				key={key}
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className="group/social hover:opacity-80 transition-opacity duration-200 ease-in-out p-4"
			>
				{key === "email" ? (
					<Mail className=" size-8 dark:text-background group-hover/social:scale-105 transition-transform duration-200 ease-in-out" />
				) : (
					<Icon
						icon={key as IconLibrary}
						className="w-10 h-auto group-hover/social:scale-105 transition-transform duration-200 ease-in-out"
					/>
				)}
				<span className="sr-only">{key}</span>
			</a>
		);
	};

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

				{hasSocials && (
					<section className="bg-muted dark:bg-foreground rounded-xl">
						<span className="sr-only">Socials</span>
						<ul className="flex flex-row flex-wrap justify-center items-center gap-6 px-6 py-1">
							{Object.entries(persona.socials)
								.filter(([_, url]) => !!url)
								.map(([key, url]) => (
									<li key={key}>{renderSocialIcon(key, url)}</li>
								))}
						</ul>
					</section>
				)}

				<div className="h-6" />

				<div className="flex flex-col w-full gap-3">
					{persona.customLinks.map((link, index) => {
						const key = `customLinks-${index}`;
						return (
							<a
								key={key}
								href={link.url}
								target="_blank"
								rel="noopener noreferrer"
								className="hover:opacity-80 transition-opacity duration-200 ease-in-out"
							>
								<Item variant="muted" className="">
									<ItemMedia>
										<Globe className="w-5 h-5 mr-3 text-slate-500 dark:text-slate-300" />
									</ItemMedia>
									<ItemContent>
										<ItemTitle>{link.label}</ItemTitle>
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
