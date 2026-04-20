import { z } from "zod";

// /v/$persona
export const personaRouteValidator = z.object({
	persona: z.string(),
});

// /create?persona=...
export const createRouteSearchParamValidator = z.object({
	persona: z.string().optional(),
});

// /v/$persona?isFromCreation=...
export const publishRouteSearchParamValidator = z.object({
	isFromCreation: z.boolean().optional(),
});
