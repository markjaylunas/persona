import { type ReactNode, useState } from "react";
import { Field, FieldContent, FieldDescription, FieldLabel } from "../ui/field";
import { Switch } from "../ui/switch";

export default function ToggleNode({
	defaultNode,
	customNode,
	label,
	description,
}: {
	defaultNode: ReactNode;
	customNode: ReactNode;
	label: string;
	description?: string;
}) {
	const [isCustomNode, setIsCustomNode] = useState(false);

	return (
		<div className="flex flex-col gap-4">
			{isCustomNode ? customNode : defaultNode}

			<Field orientation="horizontal" className="max-w-sm">
				<FieldContent>
					<FieldLabel htmlFor="switch-focus-mode">{label}</FieldLabel>
					<FieldDescription>{description}</FieldDescription>
				</FieldContent>
				<Switch
					id="switch-focus-mode"
					checked={isCustomNode}
					onCheckedChange={setIsCustomNode}
				/>
			</Field>
		</div>
	);
}
