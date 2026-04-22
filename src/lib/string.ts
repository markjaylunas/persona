// get label from url
export function getLabelFromUrl(url: string) {
	if (url.length < 50) {
		return url;
	}
	const parsedUrl = new URL(url);
	return parsedUrl.hostname;
}
