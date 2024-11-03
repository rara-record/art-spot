import type { BaseMailProps } from "../types";
import Wrapper from "./components/Wrapper";

export function NewUser({
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
			{/* <Text>{t("newUser.body", { name })}</Text>

			<Text>
				{t("common.otp")}
				<br />
				<strong className="font-bold text-2xl">{otp}</strong>
			</Text>

			<Text>{t("common.useLink")}</Text>

			<PrimaryButton href={url}>
				{t("newUser.confirmEmail")} &rarr;
			</PrimaryButton>

			<Text className="text-muted-foreground text-sm">
				{t("common.openLinkInBrowser")}
				<Link href={url}>{url}</Link>
			</Text> */}
		</Wrapper>
	);
}

export default NewUser;
