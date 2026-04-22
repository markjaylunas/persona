import { revalidateLogic } from "@tanstack/react-form";
import { useNavigate } from "@tanstack/react-router";
import { Eye, Plus, RotateCcw, RotateCw, Sparkles, X } from "lucide-react";
import { useAppForm } from "@/components/form/context";
import { Button } from "@/components/ui/button";
import { encodePersona } from "@/lib/compression";
import { IMAGE_ACCEPTED_MIME_TYPES } from "@/lib/constants";
import { uploadToImgbb } from "@/lib/upload-to-imgbb";
import { cn } from "@/lib/utils";
import LinkIcon from "../common/link-icon";
import ImagePreview from "../form/common/image-preview";
import PersonaDetails from "../persona/detail";
import { ButtonGroup } from "../ui/button-group";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import ToggleNode from "./toggle-node";
import type { Persona } from "./validator";
import {
	defaultValues,
	mockPersonaValues,
	personaCreateFormSchema,
} from "./validator";

export default function CreatePersonaForm({
	defaultPersona,
}: {
	defaultPersona?: Persona;
}) {
	const navigate = useNavigate();

	const handleSubmit = (values: Persona) => {
		// encode persona
		const encoded = encodePersona(values, true);

		// update url for form state persistence via search params
		const url = new URL(window.location.href);
		url.searchParams.set("persona", encoded);
		window.history.replaceState(null, "", url.toString());

		// navigate to preview
		navigate({
			to: "/v/$persona",
			params: { persona: encoded },
		});
	};

	const form = useAppForm({
		defaultValues: defaultPersona ?? defaultValues,
		onSubmit: ({ value }) => handleSubmit(value),
		validationLogic: revalidateLogic(),
		validators: {
			onDynamic: personaCreateFormSchema,
		},
	});

	return (
		<section className="relative flex flex-col-reverse gap-6 flex-wrap md:flex-nowrap md:flex-row justify-between items-start">
			<form
				onSubmit={(e) => {
					e.preventDefault();
					e.stopPropagation();
					void form.handleSubmit();
				}}
				className="flex-1 min-w-xs sm:min-w-sm space-y-6 w-full md:w-auto max-w-md"
			>
				{/* Name Field */}
				<form.AppField name="name">
					{(field) => (
						<field.TextField
							label="Name"
							placeholder="e.g. John Doe"
							autoFocus
						/>
					)}
				</form.AppField>

				{/* About Field */}
				<form.AppField name="about">
					{(field) => (
						<field.TextareaField
							label="About"
							placeholder="Tell us about yourself"
						/>
					)}
				</form.AppField>

				{/* Photo URL Field */}
				<form.AppField name="photoUrl">
					{(field) => (
						<ToggleNode
							defaultNode={
								<field.TextField
									label="Photo URL"
									placeholder="https://example.com/photo.jpg"
								>
									<ImagePreview
										url={field.state.value ?? undefined}
										alt="Photo"
									/>
								</field.TextField>
							}
							customNode={
								<field.ImageFileField
									label="Photo"
									accept={IMAGE_ACCEPTED_MIME_TYPES.join(",")}
									onUpload={async (file) => await uploadToImgbb(file)}
									placeholder="Upload image"
								/>
							}
							label="Don't have a photo URL? Upload instead"
						/>
					)}
				</form.AppField>

				{/* About Field */}
				<form.AppField name="email">
					{(field) => (
						<field.TextField
							label="Email"
							placeholder="your.email@example.com"
						/>
					)}
				</form.AppField>

				{/* Custom Links Section */}
				<Card>
					<CardHeader>
						<CardTitle>Social & Links</CardTitle>
					</CardHeader>
					<CardContent>
						<form.AppField name="links">
							{(field) => (
								<div className="space-y-4">
									<div className="space-y-3">
										{field.state.value.map((_, i) => {
											const key = `customLinks-${i}`;
											return (
												<Card key={key} className="pt-0 gap-0 overflow-hidden">
													<CardHeader className="flex flex-row justify-between items-center bg-muted/50 px-5 py-4 border-b border-border/50">
														<CardTitle className="text-sm font-medium">
															Link {i + 1}
														</CardTitle>
														<Button
															type="button"
															variant="ghost"
															size="icon-sm"
															className="-mr-2"
															onClick={() => field.removeValue(i)}
														>
															<X className="size-4" />
														</Button>
													</CardHeader>

													<CardContent className="space-y-4 pt-6 px-5 pb-5">
														<form.AppField name={`links[${i}].url`}>
															{(subField) => {
																return (
																	<subField.TextField
																		label="URL"
																		placeholder="https://example.com"
																		left={
																			<LinkIcon
																				url={subField.state.value ?? ""}
																			/>
																		}
																	/>
																);
															}}
														</form.AppField>

														<form.AppField name={`links[${i}].label`}>
															{(subField) => {
																return (
																	<subField.TextField
																		label="Label"
																		placeholder="e.g. My Store"
																	/>
																);
															}}
														</form.AppField>

														<form.AppField name={`links[${i}].order`}>
															{(subField) => {
																return (
																	<subField.NumberField
																		label="Order"
																		placeholder="e.g. 1"
																	>
																		<p className="text-xs text-muted-foreground">
																			Will be used as an icon only if order is
																			set.
																		</p>
																	</subField.NumberField>
																);
															}}
														</form.AppField>
													</CardContent>
												</Card>
											);
										})}

										<Button
											type="button"
											variant="outline"
											size="sm"
											onClick={() => field.pushValue({ label: "", url: "" })}
											className="gap-2 w-full"
										>
											<Plus className="size-4" />
											Add Custom Link
										</Button>
									</div>
								</div>
							)}
						</form.AppField>
					</CardContent>
				</Card>

				<form.AppForm>
					<div className="text-center">
						<form.FormErrors errorPath="links" />
					</div>

					<form.SubmitButton className="w-full">
						<Eye className="size-4 mr-0.5" />
						View Full Preview
					</form.SubmitButton>
					<ButtonGroup className="w-full">
						<Button
							type="button"
							variant="outline"
							size="sm"
							onClick={() => form.reset(defaultValues)}
							className={cn("w-1/2", defaultPersona && "w-1/3")}
						>
							<RotateCw className="size-4 mr-1" />
							Clear{" "}
						</Button>

						{defaultPersona && (
							<Button
								type="button"
								variant="outline"
								size="sm"
								onClick={() => form.reset(defaultPersona)}
								className="w-1/3"
							>
								<RotateCcw className="size-4 mr-1" />
								Reset
							</Button>
						)}

						<Button
							type="button"
							variant="outline"
							size="sm"
							onClick={() => form.reset(mockPersonaValues)}
							className={cn("w-1/2", defaultPersona && "w-1/3")}
						>
							<Sparkles className="size-4 mr-1" />
							Sample
						</Button>
					</ButtonGroup>
				</form.AppForm>
			</form>

			<section className="flex-auto md:sticky top-0 w-full md:w-auto mx-auto">
				<form.Subscribe selector={(state) => state.values}>
					{(values) => <PersonaDetails persona={values} />}
				</form.Subscribe>
			</section>
		</section>
	);
}
