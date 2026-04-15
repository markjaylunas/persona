export const IMAGE_MAX_FILE_SIZE = 1024 * 1024 * 5; // 5MB
export const IMAGE_ACCEPTED_MIME_TYPES = [
	"image/svg+xml",
	"image/png",
	"image/jpeg",
	"image/webp",
];

export const IMAGE_UPLOAD_RATE_LIMIT =
	process.env.NODE_ENV === "development" ? 100 : 5;
export const IMAGE_UPLOAD_RATE_LIMIT_WINDOW_SECONDS =
	process.env.NODE_ENV === "development" ? 60 * 60 : 60 * 60 * 24; // 1 day
