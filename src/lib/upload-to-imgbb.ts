import { uploadImageResponseSchema } from "@/components/create/validator";

export async function uploadToImgbb(file: File) {
	const formData = new FormData();
	formData.append("file", file);

	const response = await fetch("/api/upload-image", {
		method: "POST",
		body: formData,
	});

	if (!response.ok) {
		const error = await response.json();
		throw new Error((error as { error?: string }).error || "Upload failed");
	}

	const rawResult = await response.json();
	const result = uploadImageResponseSchema.parse(rawResult);

	return result.publicUrl;
}
