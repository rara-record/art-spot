import { Link, Text } from "@react-email/components";
import type { BaseMailProps } from "../types";
import PrimaryButton from "./components/PrimaryButton";
import Wrapper from "./components/Wrapper";

const mockTranslations = {
	magicLink: {
		body: (name: string) =>
			`Hey ${name},\nyou requested a login email from supastarter.\n\nYou can either enter the one-time password below manually in the application`,
		login: "Login",
		subject: "Login to supastarter",
	},
	common: {
		otp: "One-time password",
		useLink: "or use the following link:",
		openLinkInBrowser:
			"If you want to open the link in a different browser than your default one, copy and paste this link:",
	},
};

export function MagicLink({
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
			<Text>{mockTranslations.magicLink.body(name)}</Text>

			<Text>
				{mockTranslations.common.otp}
				<br />
				<strong className="font-bold text-2xl">{otp}</strong>
			</Text>

			<Text>{mockTranslations.common.useLink}</Text>

			<PrimaryButton href={url}>
				{mockTranslations.magicLink.login} &rarr;
			</PrimaryButton>

			<Text className="text-muted-foreground text-sm">
				{mockTranslations.common.openLinkInBrowser}
				<Link href={url}>{url}</Link>
			</Text>
		</Wrapper>
	);
}

export default MagicLink;
