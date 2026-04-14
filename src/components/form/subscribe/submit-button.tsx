import type { VariantProps } from "class-variance-authority";
import { Loader2Icon } from "lucide-react";
import type { ComponentProps } from "react";
import { Button, type buttonVariants } from "@/components/ui/button";
import { useFormContext } from "../context";

type SubmitButtonProps = ComponentProps<"button"> & {
	children: React.ReactNode;
	buttonProps?: VariantProps<typeof buttonVariants>;
};

export default function SubmitButton({
	children,
	buttonProps,
	className,
	...props
}: SubmitButtonProps) {
	const form = useFormContext();

	return (
		<form.Subscribe
			selector={(state) => [state.canSubmit, state.isSubmitting, state.isDirty]}
		>
			{([canSubmit, isSubmitting, isDirty]) => (
				<Button
					type="submit"
					disabled={!canSubmit || isSubmitting || !isDirty}
					{...props}
					{...buttonProps}
					className={className}
				>
					{isSubmitting && <Loader2Icon className="animate-spin" />}
					{children}
				</Button>
			)}
		</form.Subscribe>
	);
}
