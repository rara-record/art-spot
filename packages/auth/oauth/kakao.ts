import { Kakao, generateState } from "arctic";
import { getBaseUrl } from "utils";
import {
	createOauthCallbackHandler,
	createOauthRedirectHandler,
} from "../lib/oauth";

export const kakaoAuth = new Kakao(
	process.env.KAKAO_CLIENT_ID as string,
	process.env.KAKAO_CLIENT_SECRET as string,
	new URL("/api/oauth/kakao/callback", getBaseUrl()).toString(),
);

const KAKAO_PROIVDER_ID = "kakao";

type KakaoUser = {
	id: string;
	kakao_account: {
		email?: string;
		profile: {
			nickname: string;
			thumbnail_image_url: string;
		};
	};
};

export const kakaoRouteHandler = createOauthRedirectHandler(
	KAKAO_PROIVDER_ID,
	async () => {
		const state = generateState();

		const url = await kakaoAuth.createAuthorizationURL(state, {
			scopes: ["profile_nickname", "profile_image"],
		});

		return {
			state,
			url,
		};
	},
);

export const kakaoCallbackRouteHandler = createOauthCallbackHandler(
	KAKAO_PROIVDER_ID,
	async (code) => {
		const tokens = await kakaoAuth.validateAuthorizationCode(code);

		const kakaoUserResponse = await fetch("https://kapi.kakao.com/v2/user/me", {
			headers: {
				Authorization: `Bearer ${tokens.accessToken}`,
			},
		});

		const kakaoUser = (await kakaoUserResponse.json()) as KakaoUser;

		kakaoUser.kakao_account.email = (
			kakaoUser.kakao_account.email ?? ""
		).toLowerCase();

		return {
			id: String(kakaoUser.id),
			email: kakaoUser.kakao_account.email,
			name: kakaoUser.kakao_account.profile.nickname,
			avatar: kakaoUser.kakao_account.profile.thumbnail_image_url,
		};
	},
);
