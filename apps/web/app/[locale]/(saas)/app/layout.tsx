import { redirect } from "@i18n";
import { currentUser } from "@saas/auth/lib/current-user";
import { UserContextProvider } from "@saas/auth/lib/user-context";
import { Footer } from "@saas/shared/components/Footer";
import { NavBar } from "@saas/shared/components/NavBar";
import type { PropsWithChildren } from "react";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Layout({ children }: PropsWithChildren) {
	const { user } = await currentUser();

	if (!user) {
		return redirect("/auth/login");
	}

	if (!user.onboardingComplete) {
		return redirect("/onboarding");
	}

	return (
		<UserContextProvider initialUser={user}>
			<NavBar user={user} />
			<main className="min-h-[calc(100vh-12rem)]">{children}</main>
			<Footer />
		</UserContextProvider>
	);
}
