import type { ReactNode } from "react";
import { Field, FieldLabel } from "@/components/ui/field";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from "@/components/ui/input-group";
import { useFieldContext } from "../context";
import FieldError from "./error";

export default function TextField({
	label,
	placeholder,
	left,
	right,
	autoFocus,
	children,
}: {
	label: string;
	placeholder?: string;
	left?: ReactNode;
	right?: ReactNode;
	autoFocus?: boolean;
	children?: ReactNode;
}) {
	const field = useFieldContext<number>();

	const isInvalid = !field.state.meta.isValid;
	return (
		<Field data-invalid={isInvalid}>
			<FieldLabel htmlFor={field.name}>{label}</FieldLabel>
			<InputGroup>
				<InputGroupInput
					id={field.name}
					name={field.name}
					value={field.state.value}
					onBlur={field.handleBlur}
					onChange={(e) => field.handleChange(Number(e.target.value))}
					placeholder={placeholder}
					aria-invalid={isInvalid}
					autoFocus={autoFocus}
					type="number"
					inputMode="numeric"
					pattern="[0-9]*"
				/>
				{left && <InputGroupAddon align="inline-start">{left}</InputGroupAddon>}
				{right && <InputGroupAddon align="inline-end">{right}</InputGroupAddon>}
			</InputGroup>

			{children}

			<FieldError
				errors={field.state.meta.errors.map((v) => v.message)}
				isInvalid={isInvalid}
			/>
		</Field>
	);
}
