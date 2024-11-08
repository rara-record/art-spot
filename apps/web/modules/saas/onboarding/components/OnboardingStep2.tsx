"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useUser } from "@saas/auth/hooks/use-user";
import { Button } from "@ui/components/button";
import { Form } from "@ui/components/form";
import { ArrowLeftIcon, CheckIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
	teamName: z.string(),
});

type FormValues = z.infer<typeof formSchema>;

export function OnboardingStep2({
	onCompleted,
	onBack,
}: {
	onCompleted: () => void;
	onBack: () => void;
}) {
	const t = useTranslations();
	const { user } = useUser();

	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			teamName: "",
		},
	});

	const onSubmit: SubmitHandler<FormValues> = async ({ teamName }) => {
		try {
			onCompleted();
		} catch (e) {
			form.setError("root", {
				type: "server",
				message: t("onboarding.notifications.accountSetupFailed"),
			});
		}
	};

	return (
		<div>
			<h3 className="mb-4 font-bold text-xl">스탭2</h3>
			<Form {...form}>
				<form
					className="flex flex-col items-stretch gap-8"
					onSubmit={form.handleSubmit(onSubmit)}
				>
					<div className="flex gap-2">
						<Button
							className="flex-1"
							type="button"
							variant="outline"
							onClick={onBack}
						>
							<ArrowLeftIcon className="mr-2 size-4" />
							{t("onboarding.back")}
						</Button>
						<Button
							className="flex-1"
							type="submit"
							loading={form.formState.isSubmitting}
						>
							<CheckIcon className="mr-2 size-4" />
							{t("onboarding.complete")}
						</Button>
					</div>
				</form>
			</Form>
		</div>
	);
}
