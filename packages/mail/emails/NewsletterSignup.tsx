import { Container, Section } from "@react-email/components";
import type { BaseMailProps } from "../types";
import Wrapper from "./components/Wrapper";

export function NewsletterSignup({
	locale,
	translations,
}: BaseMailProps): JSX.Element {
	return (
		<Wrapper>
			<Section className="bg-card p-8">
				<Container>
					{/* <Heading as="h1">{t("newsletterSignup.subject")}</Heading>
					<Text>{t("newsletterSignup.body")}</Text> */}
				</Container>
			</Section>
		</Wrapper>
	);
}

export default NewsletterSignup;
