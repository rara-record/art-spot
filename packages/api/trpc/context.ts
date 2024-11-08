import { type Locale, config } from "@config";
import type { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";
import { lucia } from "auth";
import { cookies } from "next/headers";
import { defineAbilitiesFor } from "../modules/auth/abilities";

export async function createContext(
	params?: FetchCreateContextFnOptions | { isAdmin?: boolean },
) {
	const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null;
	const { user, session } = sessionId
		? await lucia.validateSession(sessionId)
		: { user: null, session: null };

	const abilities = defineAbilitiesFor({
		user,
	});

	const locale = (cookies().get(config.i18n.cookieName)?.value ??
		config.i18n.defaultLocale) as Locale;

	return {
		user,

		abilities,
		session,
		locale,
		responseHeaders:
			params && "resHeaders" in params ? params.resHeaders : undefined,
		isAdmin: params && "isAdmin" in params ? params.isAdmin : false,
	};
}

export type Context = Awaited<ReturnType<typeof createContext>>;
