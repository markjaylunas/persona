import { createFormHook, createFormHookContexts } from "@tanstack/react-form";
import { lazy } from "react";

const TextField = lazy(() => import("./fields/text-field"));
const TextareaField = lazy(() => import("./fields/textarea-field"));
const SubmitButton = lazy(() => import("./subscribe/submit-button"));

export const { fieldContext, formContext, useFieldContext, useFormContext } =
	createFormHookContexts();

export const { useAppForm } = createFormHook({
	fieldContext,
	formContext,
	fieldComponents: {
		TextField,
		TextareaField,
	},
	formComponents: {
		SubmitButton,
	},
});
