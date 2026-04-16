import { Card, CardContent } from "@/components/ui/card";

export default function ImagePreview({
	url,
	alt,
}: {
	url: string | undefined;
	alt: string;
}) {
	return (
		<Card className="max-h-96">
			<CardContent>
				{url ? (
					<img src={url} alt={alt} className="w-full h-full object-contain" />
				) : (
					<p className="text-muted-foreground text-[10px] text-center uppercase font-medium">
						No {alt}
					</p>
				)}
			</CardContent>
		</Card>
	);
}
