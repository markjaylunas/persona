/**
 * Recursively searches for an object where a specific property (parentKey)
 * matches the target value, then returns the value of a nested key (targetValueKey).
 * * @param obj - The error object or array from form state
 * @param parentValue - The path string to match (e.g., "links")
 * @param valueKey - The key containing the actual message (e.g., "message")
 */
/** biome-ignore-all lint/suspicious/noExplicitAny: <ignore since it's a generic object> */
export const findErrorMessage = (
	obj: any,
	parentValue: string,
	valueKey: string = "message",
): string | undefined => {
	if (!obj || typeof obj !== "object") return undefined;

	// Handle arrays (common in Zod/TanStack error states)
	if (Array.isArray(obj)) {
		for (const item of obj) {
			const result = findErrorMessage(item, parentValue, valueKey);
			if (result) return result;
		}
		return undefined;
	}

	// Case 1: Standard Zod structure where path is an array
	if (
		Array.isArray(obj.path) &&
		obj.path.join(".") === parentValue &&
		obj[valueKey]
	) {
		return obj[valueKey];
	}

	// Case 2: Object is keyed by the field name (Direct lookup)
	if (obj[parentValue]) {
		const target = obj[parentValue];
		if (typeof target === "string") return target;
		if (target[valueKey]) return target[valueKey];
		// If it's a nested array under that key, get the first message
		if (Array.isArray(target) && target[0]?.[valueKey])
			return target[0][valueKey];
	}

	// Case 3: Recursive search for deeper nesting
	for (const key in obj) {
		if (typeof obj[key] === "object") {
			const result = findErrorMessage(obj[key], parentValue, valueKey);
			if (result) return result;
		}
	}

	return undefined;
};
