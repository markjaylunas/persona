import { z } from "zod";

// /v/$persona
export const personaRouteValidator = z.object({
	persona: z.string(),
});

// /create?persona=...
export const createRouteSearchParamValidator = z.object({
	persona: z.string().optional(),
});
