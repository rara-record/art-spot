import { Link, Text } from "@react-email/components";
import type { BaseMailProps } from "../types";
import PrimaryButton from "./components/PrimaryButton";
import Wrapper from "./components/Wrapper";

const mockTranslations = {
	body: (name: string) =>
		`Hey ${name},\nyou requested a password reset.\n\nYou can either enter the one-time password below manually in the application`,
	otp: "One-time password",
	resetPassword:
		"If you want to open the link in a different browser than your default one, copy and paste this link:",
	useLink: "Use the link below to reset your password:",
	openLinkInBrowser:
		"If you want to open the link in a different browser than your default one, copy and paste this link:",
};

export function ForgotPassword({
	url,
	name,
	otp,
	locale,
	translations,
}: {
	url: string;
	name: string;
	otp: string;
} & BaseMailProps): JSX.Element {
	return (
		<Wrapper>
			<Text>{mockTranslations.body(name)}</Text>

			<Text>
				{mockTranslations.otp}
				<br />
				<strong className="font-bold text-2xl">{otp}</strong>
			</Text>

			<Text>{mockTranslations.useLink}</Text>

			<PrimaryButton href={url}>
				{mockTranslations.resetPassword} &rarr;
			</PrimaryButton>

			<Text className="text-muted-foreground text-sm">
				{mockTranslations.openLinkInBrowser}
				<Link href={url}>{url}</Link>
			</Text>
		</Wrapper>
	);
}

export default ForgotPassword;
