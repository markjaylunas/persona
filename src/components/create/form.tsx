import { Plus, X } from "lucide-react";
import { useAppForm } from "@/components/form/context";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import type { PersonaCreateForm } from "./validator";
import { defaultValues, personaCreateFormSchema } from "./validator";

export default function CreatePersonaForm() {
	const handleSubmit = (values: PersonaCreateForm) => {
		console.log({ values });
	};

	const form = useAppForm({
		defaultValues,
		onSubmit: ({ value }) => handleSubmit(value),
		validators: {
			onSubmit: personaCreateFormSchema,
		},
	});

	return (
		<>
			<div className="mx-auto max-w-48">
				<form.Subscribe selector={(state) => state.values}>
					{(values) => <pre>{JSON.stringify(values, null, 2)}</pre>}
				</form.Subscribe>
			</div>

			<form
				onSubmit={(e) => {
					e.preventDefault();
					e.stopPropagation();
					void form.handleSubmit();
				}}
				className="space-y-6 max-w-md"
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
						<field.TextField
							label="Photo URL"
							placeholder="https://example.com/photo.jpg"
						/>
					)}
				</form.AppField>

				{/* Social Links Section */}
				<Card>
					<CardHeader>
						<CardTitle>Social Links</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						<form.AppField name="socials.email">
							{(field) => (
								<field.TextField
									label="Email"
									placeholder="your.email@example.com"
								/>
							)}
						</form.AppField>
						<form.AppField name="socials.facebook">
							{(field) => (
								<field.TextField
									label="Facebook URL"
									placeholder="https://facebook.com/username"
								/>
							)}
						</form.AppField>
						<form.AppField name="socials.twitter">
							{(field) => (
								<field.TextField
									label="Twitter URL"
									placeholder="https://twitter.com/username"
								/>
							)}
						</form.AppField>
						<form.AppField name="socials.instagram">
							{(field) => (
								<field.TextField
									label="Instagram URL"
									placeholder="https://instagram.com/username"
								/>
							)}
						</form.AppField>
						<form.AppField name="socials.github">
							{(field) => (
								<field.TextField
									label="GitHub URL"
									placeholder="https://github.com/username"
								/>
							)}
						</form.AppField>
						<form.AppField name="socials.linkedin">
							{(field) => (
								<field.TextField
									label="LinkedIn URL"
									placeholder="https://linkedin.com/in/username"
								/>
							)}
						</form.AppField>
						<form.AppField name="socials.telegram">
							{(field) => (
								<field.TextField
									label="Telegram URL"
									placeholder="https://t.me/username"
								/>
							)}
						</form.AppField>
						<form.AppField name="socials.youtube">
							{(field) => (
								<field.TextField
									label="YouTube URL"
									placeholder="https://youtube.com/@username"
								/>
							)}
						</form.AppField>
						<form.AppField name="socials.whatsapp">
							{(field) => (
								<field.TextField
									label="WhatsApp URL"
									placeholder="https://wa.me/number"
								/>
							)}
						</form.AppField>
					</CardContent>
				</Card>

				{/* Custom Links Section */}
				<Card>
					<CardHeader>
						<CardTitle>Custom Links</CardTitle>
					</CardHeader>
					<CardContent>
						<form.AppField name="customLinks">
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
														<form.AppField name={`customLinks[${i}].url`}>
															{(subField) => {
																return (
																	<subField.TextField
																		label="URL"
																		placeholder="https://example.com"
																	/>
																);
															}}
														</form.AppField>

														<form.AppField name={`customLinks[${i}].label`}>
															{(subField) => {
																return (
																	<subField.TextField
																		label="Label"
																		placeholder="e.g. My Store"
																	/>
																);
															}}
														</form.AppField>

														<form.AppField name={`customLinks[${i}].iconKey`}>
															{(subField) => {
																return (
																	<subField.TextField
																		label="Icon"
																		placeholder="e.g. Cart"
																	/>
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
											onClick={() =>
												field.pushValue({ label: "", url: "", iconKey: "" })
											}
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
					<form.SubmitButton className="w-full">Submit</form.SubmitButton>
				</form.AppForm>
			</form>
		</>
	);
}
