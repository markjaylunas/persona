import { env } from "@/env";

export const IMAGE_MAX_FILE_SIZE = 1024 * 1024 * 5; // 5MB
export const IMAGE_ACCEPTED_MIME_TYPES = [
	"image/svg+xml",
	"image/png",
	"image/jpeg",
	"image/webp",
];

export const IMAGE_UPLOAD_RATE_LIMIT = env.VITE_IMAGE_UPLOAD_RATE_LIMIT;
export const IMAGE_UPLOAD_RATE_LIMIT_WINDOW_SECONDS =
	env.VITE_IMAGE_UPLOAD_RATE_LIMIT_WINDOW_SECONDS;
