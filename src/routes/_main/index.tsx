import { createFileRoute, Link } from "@tanstack/react-router";
import {
	ArrowRight,
	CheckCircle2,
	Globe,
	Layout,
	Palette,
	Shield,
	Zap,
} from "lucide-react";
import { mockPersonaValues } from "@/components/create/validator";
import PersonaDetails from "@/components/persona/detail";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Route = createFileRoute("/_main/")({ component: App });

function App() {
	return (
		<div className="flex flex-col min-h-screen">
			{/* Hero Section */}
			<section className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32">
				<div className="max-w-7xl mx-auto px-4 relative z-10">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div className="text-center lg:text-left space-y-8 max-w-xl mx-auto lg:mx-0">
							<div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-wide uppercase duration-1000 animate-in fade-in slide-in-from-bottom-4">
								<Zap className="size-4 mr-2" />
								<span>Beacons alternative for free</span>
							</div>
							<h1 className="text-5xl md:text-[80px] font-black tracking-tight text-balance leading-[0.95] duration-1000 delay-100 animate-in fade-in slide-in-from-bottom-6">
								Your Identity,{" "}
								<span className="text-transparent bg-clip-text bg-linear-to-r from-violet-500 via-fuchsia-500 to-cyan-500">
									Unified.
								</span>
							</h1>
							<p className="text-xl text-muted-foreground duration-1000 delay-200 animate-in fade-in slide-in-from-bottom-8">
								Create a stunning, free landing page for all your links in
								seconds. Join creators who choose Persona for a clean, premium
								presence.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start duration-1000 delay-300 animate-in fade-in slide-in-from-bottom-10">
								<Link
									to="/create"
									className={buttonVariants({
										size: "lg",
									})}
								>
									Get Started for Free
									<ArrowRight className="ml-2 size-5" />
								</Link>
								<a
									href="#features"
									className={buttonVariants({
										variant: "outline",
										size: "lg",
									})}
								>
									Explore Features
								</a>
							</div>
						</div>

						<div className="relative duration-1000 delay-500 animate-in fade-in slide-in-from-right-12">
							<div className="absolute -inset-10 bg-radial from-violet-500/30 to-cyan-500/30 blur-[100px] opacity-60 rounded-full" />
							<div className="relative group perspective-1000">
								<div className="relative rounded-[2.5rem] shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] border border-white/10 w-full max-w-137.5 mx-auto lg:ml-auto transition-transform duration-500 group-hover:rotate-y-2 group-hover:scale-[1.02]">
									<PersonaDetails persona={mockPersonaValues} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section id="features" className="py-32 bg-muted/20 relative">
				<div className="max-w-7xl mx-auto px-4">
					<div className="text-center space-y-6 mb-20">
						<h2 className="text-4xl md:text-6xl font-black tracking-tight">
							Everything You Need
						</h2>
						<p className="text-muted-foreground max-w-2xl mx-auto text-xl leading-relaxed">
							Persona provides all the premium features you expect from a pro
							link-in-bio platform, without the price tag.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<FeatureCard
							icon={<Globe className="size-10 text-cyan-500" />}
							title="One Link for All"
							description="Connect your Instagram, TikTok, YouTube, GitHub, and more. One URL to rule them all."
						/>
						<FeatureCard
							icon={<Palette className="size-10 text-violet-500" />}
							title="Premium Aesthetics"
							description="Modern, dark-mode first designs that look stunning on any screen size or device."
						/>
						<FeatureCard
							icon={<Layout className="size-10 text-fuchsia-500" />}
							title="Easy Builder"
							description="Simple drag-and-drop experience. No coding required. Launch your page in under 60 seconds."
						/>
						<FeatureCard
							icon={<CheckCircle2 className="size-10 text-emerald-500" />}
							title="No Hidden Fees"
							description="All features are free. No subscriptions, no tiers, no 'unlimited' limits."
						/>
						<FeatureCard
							icon={<ArrowRight className="size-10 text-orange-500" />}
							title="Custom Links"
							description="Add as many links as you want. Label them, organize them, and share your world."
						/>
						<FeatureCard
							icon={<Shield className="size-10 text-blue-500" />}
							title="Secure & Private"
							description="Your data is yours. We prioritize your privacy and security above all else."
						/>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-32">
				<div className="max-w-7xl mx-auto px-4">
					<div className="bg-linear-to-br from-violet-600 via-fuchsia-600 to-rose-600 rounded-[4rem] px-8 py-20 text-center text-white space-y-10 relative overflow-hidden shadow-[0_20px_50px_rgba(139,92,246,0.3)]">
						<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
						<h2 className="text-5xl md:text-7xl font-black tracking-tight relative z-10 leading-tight">
							Ready to define your Persona?
						</h2>
						<p className="text-white/80 text-2xl max-w-2xl mx-auto relative z-10 leading-relaxed font-medium">
							Join thousands of creators who are already using Persona to build
							their digital home.
						</p>
						<div className="relative z-10 pt-6">
							<Link
								to="/create"
								className={buttonVariants({
									size: "lg",
									variant: "secondary",
									className:
										"rounded-full px-12 text-black bg-white hover:bg-white/90 text-xl font-bold py-8 transition-all hover:scale-105",
								})}
							>
								Build Your Free Page Now
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

function FeatureCard({
	icon,
	title,
	description,
}: {
	icon: React.ReactNode;
	title: string;
	description: string;
}) {
	return (
		<Card className="border-none bg-card/40 backdrop-blur-md shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:-translate-y-2 transition-all duration-500 group rounded-[2.5rem]">
			<CardContent className="pt-12 pb-14 px-10 flex flex-col items-center text-center space-y-6">
				<div className="p-5 rounded-[2rem] bg-white dark:bg-muted/30 shadow-inner group-hover:scale-110 transition-transform duration-500">
					{icon}
				</div>
				<h3 className="text-2xl font-bold tracking-tight">{title}</h3>
				<p className="text-muted-foreground leading-relaxed text-lg font-medium">
					{description}
				</p>
			</CardContent>
		</Card>
	);
}
