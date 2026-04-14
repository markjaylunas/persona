import type { ComponentProps } from "react";
import Facebook from "@/assets/icons/facebook.svg";
import Github from "@/assets/icons/github.svg";
import Instagram from "@/assets/icons/instagram.svg";
import Linkedin from "@/assets/icons/linkedin.svg";
import Telegram from "@/assets/icons/telegram.svg";
import Whatsapp from "@/assets/icons/whatsapp.svg";
import X from "@/assets/icons/x.svg";
import Youtube from "@/assets/icons/youtube.svg";
import { cn } from "@/lib/utils";

export const IconLibrary = {
	facebook: Facebook,
	x: X,
	instagram: Instagram,
	github: Github,
	telegram: Telegram,
	linkedin: Linkedin,
	youtube: Youtube,
	whatsapp: Whatsapp,
};

export type IconLibrary = keyof typeof IconLibrary;

export function Icon({
	icon,
	className,
	...props
}: ComponentProps<"img"> & { icon: IconLibrary }) {
	const Icon = IconLibrary[icon];
	return (
		<img src={Icon} alt={icon} className={cn("size-4", className)} {...props} />
	);
}
