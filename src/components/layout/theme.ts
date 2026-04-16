import { createServerFn } from "@tanstack/react-start";
import { getCookie, setCookie } from "@tanstack/react-start/server";
import z from "zod";

const storageKey = "app-theme";
export const themes = ["light", "dark"] as const;

export const getThemeServerFn = createServerFn().handler(
	() => (getCookie(storageKey) ?? "dark") as "light" | "dark",
);

const setThemeValidator = z.enum(themes);

export const setThemeServerFn = createServerFn()
	.inputValidator(setThemeValidator)
	.handler(({ data }) => {
		setCookie(storageKey, data);
	});
