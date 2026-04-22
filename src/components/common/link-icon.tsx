import { Globe } from "lucide-react";
import { z } from "zod";
import { useDebounce } from "@/hooks/use-debounce";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const FallbackIcon = () => {
	return <Globe className="size-4 text-slate-500 dark:text-slate-300" />;
};

export default function LinkIcon({ url }: { url: string }) {
	const debouncedUrl = useDebounce(url, 300);

	const result = z.url().safeParse(debouncedUrl);

	if (!result.success) {
		return (
			<div className="flex size-4 items-center justify-center">
				<FallbackIcon />
			</div>
		);
	}

	const domain = new URL(debouncedUrl).hostname;
	const pngSrc = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

	return (
		<Avatar className="size-4">
			<AvatarImage key={domain} src={pngSrc} alt={`${domain} icon`} />
			<AvatarFallback>
				<FallbackIcon />
			</AvatarFallback>
		</Avatar>
	);
}
