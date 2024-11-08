export const config = {
	i18n: {
		locales: {
			en: {
				currency: "USD",
				label: "English",
			},
			de: {
				currency: "USD",
				label: "Deutsch",
			},
		},
		defaultLocale: "en",
		defaultCurrency: "USD",
		cookieName: "NEXT_LOCALE",
	},
	auth: {
		redirectAfterLogout: "/",
	},
} as const satisfies Config;

export type Config = {
	i18n: {
		locales: { [locale: string]: { currency: string; label: string } };
		defaultLocale: string;
		defaultCurrency: string;
		cookieName: string;
	};
	auth: { redirectAfterLogout: string };
};

export type Locale = keyof (typeof config)["i18n"]["locales"];
