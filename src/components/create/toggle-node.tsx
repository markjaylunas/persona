import { Activity, type ReactNode, useState } from "react";
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
			{/* The Activity component keeps the state of the hidden node 
			    without fully unmounting it from the tree. */}
			<Activity mode={isCustomNode ? "hidden" : "visible"}>
				{defaultNode}
			</Activity>

			<Activity mode={isCustomNode ? "visible" : "hidden"}>
				{customNode}
			</Activity>

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
