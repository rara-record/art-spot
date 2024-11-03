import { Link, Text } from "@react-email/components";
import type { BaseMailProps } from "../types";
import PrimaryButton from "./components/PrimaryButton";
import Wrapper from "./components/Wrapper";

const mockTranslations = {
	body: (name: string) =>
		`Hey ${name},\nyou changed your email. Please click the link below to confirm your new email address.`,
	confirmEmail: "Confirm email",
	openLinkInBrowser:
		"If you want to open the link in a different browser than your default one, copy and paste this link:",
};

export function EmailChange({
	url,
	name,
	locale,
	translations,
}: {
	url: string;
	name: string;
} & BaseMailProps): JSX.Element {
	return (
		<Wrapper>
			<Text>{mockTranslations.body(name)}</Text>

			<PrimaryButton href={url}>
				{mockTranslations.confirmEmail} &rarr;
			</PrimaryButton>

			<Text className="text-muted-foreground text-sm">
				{mockTranslations.openLinkInBrowser}
				<Link href={url}>{url}</Link>
			</Text>
		</Wrapper>
	);
}

export default EmailChange;
