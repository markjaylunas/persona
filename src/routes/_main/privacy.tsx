import { createFileRoute } from "@tanstack/react-router";
import { Database, Eye, Globe, Lock, Mail, Shield } from "lucide-react";

export const Route = createFileRoute("/_main/privacy")({
	head: () => ({
		meta: [
			{
				title: "Privacy Policy | Persona by MakJe",
			},
			{
				name: "description",
				content:
					"Learn how Persona collects, uses, and protects your personal information. Your privacy is our priority.",
			},
		],
	}),
	component: PrivacyPage,
});

function PrivacyPage() {
	const lastUpdated = "April 20, 2026";

	return (
		<div className="flex flex-col min-h-screen">
			{/* Hero */}
			<section className="relative overflow-hidden pt-16 pb-20 border-b border-border/50">
				<div className="absolute inset-0 bg-radial from-violet-500/10 to-transparent pointer-events-none" />
				<div className="max-w-3xl mx-auto px-6 relative z-10 text-center space-y-6">
					<div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-wide uppercase">
						<Shield className="size-4 mr-2" />
						<span>Privacy Policy</span>
					</div>
					<h1 className="text-4xl md:text-6xl font-black tracking-tight text-balance leading-tight">
						Your Privacy{" "}
						<span className="text-transparent bg-clip-text bg-linear-to-r from-violet-500 via-fuchsia-500 to-cyan-500">
							Matters
						</span>
					</h1>
					<p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
						We built Persona on a foundation of transparency. Here's exactly how
						we handle your data — no legalese, no surprises.
					</p>
					<p className="text-sm text-muted-foreground/70">
						Last updated: {lastUpdated}
					</p>
				</div>
			</section>

			{/* Content */}
			<section className="py-20">
				<div className="max-w-3xl mx-auto px-6 space-y-16">
					<PolicySection
						icon={<Database className="size-6 text-violet-500" />}
						title="Information We Collect"
						accentColor="violet"
					>
						<p>
							Persona is designed with a{" "}
							<strong>zero data storage principle</strong>. When you create a
							Persona page, we do not save anything to a database or server. The
							only information involved is what you choose to put in your page:
						</p>
						<ul>
							<li>
								<strong>Profile data</strong> — your name, bio, avatar image,
								and the links you choose to display.
							</li>
						</ul>
						<p>
							This data is <strong>never stored on our servers</strong>. It
							lives entirely within the shareable link you generate, and exists
							only for as long as that link is shared and viewed.
						</p>
						<p>
							We do <strong>not</strong> collect analytics, track page views, or
							monitor visitor behavior in any way. No account registration, no
							email, no password — just create and share.
						</p>
					</PolicySection>

					<PolicySection
						icon={<Eye className="size-6 text-fuchsia-500" />}
						title="How We Use Your Information"
						accentColor="fuchsia"
					>
						<p>
							The only purpose of the data you enter is to render your Persona
							page when someone visits your link. Specifically:
						</p>
						<ul>
							<li>Display your profile, bio, and links to visitors.</li>
							<li>
								Serve your avatar image (hosted via a third-party image CDN,
								imgbb).
							</li>
						</ul>
						<p>
							We will <strong>never</strong> sell, rent, or share your personal
							data with third parties for advertising or marketing purposes.
							There is no user profiling, no behavioral tracking, and no
							third-party advertising integrations.
						</p>
					</PolicySection>

					<PolicySection
						icon={<Globe className="size-6 text-cyan-500" />}
						title="Third-Party Services"
						accentColor="cyan"
					>
						<p>Persona uses a small number of trusted third-party services:</p>
						<ul>
							<li>
								<strong>imgbb</strong> — for avatar image hosting. Images you
								upload are stored on imgbb's servers and served via their CDN.
								Please review{" "}
								<a
									href="https://imgbb.com/page/privacy"
									target="_blank"
									rel="noopener noreferrer"
									className="text-primary underline underline-offset-4 hover:opacity-70 transition-opacity"
								>
									imgbb's privacy policy
								</a>{" "}
								for details.
							</li>
							<li>
								<strong>Cloudflare</strong> — our infrastructure runs on
								Cloudflare Workers and Pages, which may collect standard server
								logs (IP address, request metadata) for security and performance
								purposes.
							</li>
						</ul>
					</PolicySection>

					<PolicySection
						icon={<Lock className="size-6 text-emerald-500" />}
						title="Data Security"
						accentColor="emerald"
					>
						<p>
							Because Persona stores <strong>nothing on our servers</strong>,
							the attack surface is effectively zero — there is no database to
							breach. Your data exists only within the link you share.
						</p>
						<ul>
							<li>All traffic is served over HTTPS/TLS encryption.</li>
							<li>
								Our infrastructure runs on Cloudflare's globally distributed
								edge network, inheriting its security posture.
							</li>
							<li>We apply rate limiting on API endpoints to prevent abuse.</li>
						</ul>
						<p>
							Your Persona is <strong>public by nature</strong> — anyone with
							your link can view it. Only include information you're comfortable
							sharing publicly.
						</p>
					</PolicySection>

					<PolicySection
						icon={<Shield className="size-6 text-blue-500" />}
						title="Your Rights & Data Control"
						accentColor="blue"
					>
						<p>
							Because we store <strong>nothing on our servers</strong>, you have
							complete control by default:
						</p>
						<ul>
							<li>
								<strong>Your data lives in your link</strong> — all the
								information in your Persona is encoded directly in the shareable
								URL. The data exists only as long as the link is shared and
								viewed.
							</li>
							<li>
								<strong>Instant removal</strong> — to "delete" your Persona,
								simply stop sharing the link. There is nothing stored on our end
								to remove.
							</li>
							<li>
								<strong>Update anytime</strong> — re-create your Persona at{" "}
								<a
									href="/create"
									className="text-primary underline underline-offset-4 hover:opacity-70 transition-opacity"
								>
									/create
								</a>{" "}
								anytime to generate a fresh link with updated information.
							</li>
						</ul>
					</PolicySection>

					<PolicySection
						icon={<Mail className="size-6 text-orange-500" />}
						title="Contact Us"
						accentColor="orange"
					>
						<p>
							If you have any questions, concerns, or requests regarding this
							Privacy Policy, please reach out:
						</p>
						<ul>
							<li>
								<strong>Developer:</strong>{" "}
								<a
									href="https://makje.com"
									target="_blank"
									rel="noopener noreferrer"
									className="text-primary underline underline-offset-4 hover:opacity-70 transition-opacity"
								>
									MakJe
								</a>
							</li>
							<li>
								<strong>GitHub:</strong>{" "}
								<a
									href="https://github.com/markjaylunas/persona"
									target="_blank"
									rel="noopener noreferrer"
									className="text-primary underline underline-offset-4 hover:opacity-70 transition-opacity"
								>
									github.com/markjaylunas/persona
								</a>
							</li>
						</ul>
						<p>
							This policy may be updated occasionally. Any significant changes
							will be reflected in the "Last updated" date at the top of this
							page. Continued use of Persona after changes constitutes
							acceptance of the updated policy.
						</p>
					</PolicySection>
				</div>
			</section>
		</div>
	);
}

type AccentColor =
	| "violet"
	| "fuchsia"
	| "cyan"
	| "emerald"
	| "blue"
	| "orange";

const accentBorderMap: Record<AccentColor, string> = {
	violet: "border-violet-500/40",
	fuchsia: "border-fuchsia-500/40",
	cyan: "border-cyan-500/40",
	emerald: "border-emerald-500/40",
	blue: "border-blue-500/40",
	orange: "border-orange-500/40",
};

function PolicySection({
	icon,
	title,
	accentColor,
	children,
}: {
	icon: React.ReactNode;
	title: string;
	accentColor: AccentColor;
	children: React.ReactNode;
}) {
	const borderClass = accentBorderMap[accentColor];

	return (
		<div className={`border-l-4 pl-8 space-y-4 ${borderClass}`}>
			<div className="flex items-center gap-3">
				<div className="p-2 rounded-xl bg-muted/50">{icon}</div>
				<h2 className="text-2xl font-bold tracking-tight">{title}</h2>
			</div>
			<div className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground leading-relaxed space-y-3 [&_ul]:pl-5 [&_ul]:space-y-2 [&_li]:list-disc [&_strong]:text-foreground">
				{children}
			</div>
		</div>
	);
}
