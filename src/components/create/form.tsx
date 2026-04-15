import { Mail, Plus, X } from "lucide-react";
import { useState } from "react";
import { useAppForm } from "@/components/form/context";
import { Button } from "@/components/ui/button";
import { decodePersona, encodePersona } from "@/lib/compression";
import { IMAGE_ACCEPTED_MIME_TYPES } from "@/lib/constants";
import { uploadToImgbb } from "@/lib/upload-to-imgbb";
import { Icon } from "../icon/library";
import PersonaDetails from "../persona/detail";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import ToggleNode from "./toggle-node";
import type { Persona } from "./validator";
import { defaultValues, personaCreateFormSchema } from "./validator";

export default function CreatePersonaForm() {
	const [compressed, setCompressed] = useState<string | null>(null);
	const [decoded, setDecoded] = useState<Persona | null>(null);

	const handleSubmit = (values: Persona) => {
		const encoded = encodePersona(values);
		setCompressed(encoded);
	};

	const handleDecode = () => {
		if (!compressed) return;
		try {
			setDecoded(decodePersona(compressed));
		} catch (error) {
			console.error(error);
		}
	};

	const form = useAppForm({
		defaultValues,
		onSubmit: ({ value }) => handleSubmit(value),
		validators: {
			onSubmit: personaCreateFormSchema,
			onChange: personaCreateFormSchema,
		},
	});

	return (
		<section className="relative flex flex-col gap-6 flex-wrap md:flex-nowrap md:flex-row-reverse justify-between items-start">
			<form
				onSubmit={(e) => {
					e.preventDefault();
					e.stopPropagation();
					void form.handleSubmit();
				}}
				className="space-y-6 w-full md:w-auto"
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
								/>
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
									left={<Mail />}
								/>
							)}
						</form.AppField>
						<form.AppField name="socials.facebook">
							{(field) => (
								<field.TextField
									label="Facebook URL"
									placeholder="https://facebook.com/username"
									left={<Icon icon="facebook" />}
								/>
							)}
						</form.AppField>
						<form.AppField name="socials.x">
							{(field) => (
								<field.TextField
									label="X URL"
									placeholder="https://x.com/username"
									left={<Icon icon="x" className="fill-white" />}
								/>
							)}
						</form.AppField>
						<form.AppField name="socials.instagram">
							{(field) => (
								<field.TextField
									label="Instagram URL"
									placeholder="https://instagram.com/username"
									left={<Icon icon="instagram" />}
								/>
							)}
						</form.AppField>
						<form.AppField name="socials.github">
							{(field) => (
								<field.TextField
									label="GitHub URL"
									placeholder="https://github.com/username"
									left={<Icon icon="github" />}
								/>
							)}
						</form.AppField>
						<form.AppField name="socials.linkedin">
							{(field) => (
								<field.TextField
									label="LinkedIn URL"
									placeholder="https://linkedin.com/in/username"
									left={<Icon icon="linkedin" />}
								/>
							)}
						</form.AppField>
						<form.AppField name="socials.telegram">
							{(field) => (
								<field.TextField
									label="Telegram URL"
									placeholder="https://t.me/username"
									left={<Icon icon="telegram" />}
								/>
							)}
						</form.AppField>
						<form.AppField name="socials.youtube">
							{(field) => (
								<field.TextField
									label="YouTube URL"
									placeholder="https://youtube.com/@username"
									left={<Icon icon="youtube" />}
								/>
							)}
						</form.AppField>
						<form.AppField name="socials.whatsapp">
							{(field) => (
								<field.TextField
									label="WhatsApp URL"
									placeholder="https://wa.me/number"
									left={<Icon icon="whatsapp" />}
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
					<form.SubmitButton className="w-full">Submit</form.SubmitButton>
				</form.AppForm>
			</form>

			<section className="md:sticky top-0 w-full md:w-auto">
				<form.Subscribe selector={(state) => state.values}>
					{(values) => <PersonaDetails persona={values} />}
				</form.Subscribe>

				<Button
					type="button"
					variant="outline"
					size="sm"
					disabled={!compressed}
					onClick={handleDecode}
					className="flex gap-2"
				>
					<Plus className="size-4" />
					Decode
				</Button>
				<p className="text-xs">{compressed}</p>

				<p>{JSON.stringify(decoded)}</p>
			</section>
		</section>
	);
}
