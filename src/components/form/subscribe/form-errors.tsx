import { findErrorMessage } from "@/lib/object";
import { useFormContext } from "../context";
import FieldError from "../fields/error";

export default function FormErrors({
	children,
	errorPath,
}: {
	children?: React.ReactNode;
	errorPath: string;
}) {
	const form = useFormContext();

	return (
		<form.Subscribe selector={(state) => state.errors}>
			{(errors) => {
				const message = findErrorMessage(errors, errorPath, "message");
				if (!message) return children;

				return (
					<>
						<FieldError errors={[message]} isInvalid={true} />
						{children}
					</>
				);
			}}
		</form.Subscribe>
	);
}
