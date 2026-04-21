import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import ErrorPage from "@/components/common/error-page";
import NotFound from "@/components/common/not-found";
import { getThemeServerFn } from "@/components/layout/theme";
import { META_CONSTANTS } from "@/lib/meta-constants";
import { cn } from "@/lib/utils";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
	head: () => ({
		links: [
			{
				rel: "canonical",
				href: META_CONSTANTS.url,
			},
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{ title: META_CONSTANTS.title },
			{
				name: "description",
				content: META_CONSTANTS.description,
			},
			{
				property: "keywords",
				content: META_CONSTANTS.keywords,
			},
			{
				property: "og:title",
				content: META_CONSTANTS.title,
			},
			{
				property: "og:description",
				content: META_CONSTANTS.description,
			},
			{
				property: "og:image",
				content: META_CONSTANTS.image,
			},
			{
				property: "og:image:width",
				content: META_CONSTANTS.imageWidth,
			},
			{
				property: "og:image:height",
				content: META_CONSTANTS.imageHeight,
			},
			{
				property: "og:image:alt",
				content: META_CONSTANTS.imageAlt,
			},
			{
				property: "og:site_name",
				content: META_CONSTANTS.siteName,
			},
			{
				property: "og:locale",
				content: META_CONSTANTS.locale,
			},
			{
				property: "og:type",
				content: META_CONSTANTS.type,
			},
			{
				property: "og:url",
				content: META_CONSTANTS.url,
			},
			// twitter
			{
				property: "twitter:card",
				content: META_CONSTANTS.twitterCard,
			},
			{
				property: "twitter:title",
				content: META_CONSTANTS.twitterTitle,
			},
			{
				property: "twitter:description",
				content: META_CONSTANTS.twitterDescription,
			},
			{
				property: "twitter:image",
				content: META_CONSTANTS.twitterImage,
			},
			{
				property: "twitter:image:alt",
				content: META_CONSTANTS.twitterImageAlt,
			},
			{
				property: "twitter:site",
				content: META_CONSTANTS.twitterSite,
			},
			{
				property: "twitter:creator",
				content: META_CONSTANTS.twitterCreator,
			},
		],
	}),
	beforeLoad: async () => ({ theme: await getThemeServerFn() }),
	shellComponent: RootDocument,
	notFoundComponent: NotFound,
	errorComponent: ({ error, reset }) => (
		<ErrorPage error={error} reset={reset} />
	),
});

function RootDocument({ children }: { children: React.ReactNode }) {
	const { theme } = Route.useRouteContext();
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<HeadContent />
			</head>
			<body className={cn(theme, "font-sans antialiased wrap-anywhere")}>
				{children}
				<TanStackDevtools
					config={{
						position: "bottom-right",
					}}
					plugins={[
						{
							name: "Tanstack Router",
							render: <TanStackRouterDevtoolsPanel />,
						},
					]}
				/>
				<Scripts />
			</body>
		</html>
	);
}
