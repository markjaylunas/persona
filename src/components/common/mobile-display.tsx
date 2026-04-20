export default function MobileDisplay({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="w-full max-w-sm mx-auto rounded-[2.5rem] shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] border-8 border-black">
			{children}
		</div>
	);
}
