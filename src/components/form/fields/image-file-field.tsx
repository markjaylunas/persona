import { Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import ImagePreview from "@/components/form/common/image-preview";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useFieldContext } from "../context";
import FieldError from "./error";

export default function ImageFileField({
	label,
	placeholder,
	accept,
	onChangeExt,
	onUpload,
	previewUrl,
}: {
	label: string;
	placeholder?: string;
	accept: string;
	onChangeExt?: (file: File | undefined) => void;
	onUpload?: (file: File) => Promise<string>;
	previewUrl?: string | null;
}) {
	const field = useFieldContext<string>();
	const [isUploading, setIsUploading] = useState(false);

	const isInvalid = !field.state.meta.isValid;
	const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];

		onChangeExt?.(file);

		if (!file) {
			return;
		}

		if (onUpload) {
			setIsUploading(true);
			try {
				const uploadedData = await onUpload(file);
				field.handleChange(uploadedData);
				field.validate("blur");
			} catch (error) {
				console.error(error);
				toast.error((error as Error).message);
			} finally {
				setIsUploading(false);
			}
		}
	};

	const preview = field.state.value ?? previewUrl;

	return (
		<Field data-invalid={isInvalid}>
			<FieldLabel htmlFor={field.name} className="flex gap-2 items-center">
				{label} {isUploading && <Loader2 className="animate-spin size-4" />}
			</FieldLabel>
			<Input
				id={field.name}
				name={field.name}
				type="file"
				placeholder={placeholder}
				accept={accept}
				onChange={handleFileChange}
				onBlur={field.handleBlur}
				className="cursor-pointer"
				aria-invalid={isInvalid}
				disabled={isUploading}
			/>

			<ImagePreview url={preview ?? undefined} alt={label} />

			<FieldError
				errors={field.state.meta.errors.map((v) => v.message)}
				isInvalid={isInvalid}
			/>
		</Field>
	);
}
