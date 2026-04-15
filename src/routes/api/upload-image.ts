import { createFileRoute } from "@tanstack/react-router";
import { getRequestHeaders } from "@tanstack/react-start/server";
import { imgbbResponseSchema } from "@/components/create/validator";
import {
	IMAGE_UPLOAD_RATE_LIMIT,
	IMAGE_UPLOAD_RATE_LIMIT_WINDOW_SECONDS,
} from "@/lib/constants";
import { rateLimit } from "@/lib/ratelimit.server";

export const Route = createFileRoute("/api/upload-image")({
	server: {
		handlers: {
			POST: async ({ request }) => {
				try {
					const headers = await getRequestHeaders();
					const clientIp =
						headers["cf-connecting-ip"] ||
						headers["x-forwarded-for"] ||
						"127.0.0.1";

					try {
						await rateLimit({
							key: `upload-image:${clientIp}`,
							limit: IMAGE_UPLOAD_RATE_LIMIT,
							windowSeconds: IMAGE_UPLOAD_RATE_LIMIT_WINDOW_SECONDS,
						});
					} catch (_) {
						return new Response(
							JSON.stringify({
								error:
									"Too many uploads. Please try again later. Use Photo URL instead",
							}),
							{
								status: 429,
								headers: { "Content-Type": "application/json" },
							},
						);
					}

					const formData = await request.formData();
					const file = formData.get("file") as File;

					if (!file) {
						return new Response("No file uploaded", { status: 400 });
					}

					if (file.size > 1024 * 1024 * 5) {
						return new Response("File size exceeds 5MB limit", { status: 400 });
					}

					const imgbbFormData = new FormData();
					imgbbFormData.append("image", file);

					const IMGBB_API_KEY = process.env.IMGBB_API_KEY;

					const response = await fetch(
						`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`,
						{
							method: "POST",
							body: imgbbFormData,
						},
					);

					const rawResult = await response.json();
					const result = imgbbResponseSchema.parse(rawResult);

					if (!response.ok || !result.success) {
						return new Response(
							JSON.stringify({ error: "ImgBB upload failed" }),
							{ status: response.status },
						);
					}

					const publicUrl = result.data.url;

					return new Response(
						JSON.stringify({
							success: true,
							publicUrl,
						}),
						{
							status: 200,
							headers: { "Content-Type": "application/json" },
						},
					);
				} catch (error: unknown) {
					if (error instanceof Error) {
						return new Response(JSON.stringify({ error: error.message }), {
							status: 500,
							headers: { "Content-Type": "application/json" },
						});
					}

					return new Response(
						JSON.stringify({ error: "An unexpected error occurred" }),
						{
							status: 500,
						},
					);
				}
			},
		},
	},
});
