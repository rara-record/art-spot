import type { BaseMailProps } from "../types";
import Wrapper from "./components/Wrapper";

export function TeamInvitation({
	url,
	teamName,
	locale,
	translations,
}: {
	url: string;
	teamName: string;
} & BaseMailProps): JSX.Element {
	return (
		<Wrapper>
			{/* <Heading className="text-xl"> */}
			{/* {t.markup("teamInvitation.headline", {
					teamName,
					strong: (chunks) => `<strong>${chunks}</strong>`,
				})}
			</Heading>
			<Text>{t("teamInvitation.body", { teamName })}</Text>

			<PrimaryButton href={url}>{t("teamInvitation.join")}</PrimaryButton>

			<Text className="mt-4 text-muted-foreground text-sm">
				{t("common.openLinkInBrowser")}
				<Link href={url}>{url}</Link>
			</Text> */}
		</Wrapper>
	);
}

export default TeamInvitation;
