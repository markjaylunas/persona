import { Activity, type ReactNode, useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { Field, FieldContent, FieldLabel } from "../ui/field";

export default function ToggleNode({
	defaultNode,
	customNode,
	label,
}: {
	defaultNode: ReactNode;
	customNode: ReactNode;
	label: string;
}) {
	const [isCustomNode, setIsCustomNode] = useState(false);

	return (
		<div className="flex flex-col gap-4">
			{/* Activity preserves the state of the non-active node */}
			<Activity mode={isCustomNode ? "hidden" : "visible"}>
				{defaultNode}
			</Activity>

			<Activity mode={isCustomNode ? "visible" : "hidden"}>
				{customNode}
			</Activity>

			<Field
				orientation="horizontal"
				className="max-w-sm flex items-center gap-2"
			>
				<Checkbox
					id="toggle-custom-mode"
					checked={isCustomNode}
					onCheckedChange={(checked) => setIsCustomNode(!!checked)}
				/>
				<FieldContent>
					<FieldLabel htmlFor="toggle-custom-mode" className="cursor-pointer">
						{label}
					</FieldLabel>
				</FieldContent>
			</Field>
		</div>
	);
}
