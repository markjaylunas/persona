import { env as cfEnv } from "cloudflare:workers";

interface RateLimitOptions {
	key: string;
	limit: number;
	windowSeconds: number;
}

export async function rateLimit({
	key,
	limit,
	windowSeconds,
}: RateLimitOptions) {
	const kvKey = `rate-limit:${key}`;
	const currentCountStr = await cfEnv.RATE_LIMITER.get(kvKey);
	const currentCount = currentCountStr
		? Number.parseInt(currentCountStr, 10)
		: 0;

	if (currentCount >= limit) {
		throw new Error("Too many requests. Please try again later.");
	}

	await cfEnv.RATE_LIMITER.put(kvKey, (currentCount + 1).toString(), {
		expirationTtl: windowSeconds,
	});
}
