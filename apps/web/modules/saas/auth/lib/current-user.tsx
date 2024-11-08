import { createApiCaller } from "api/trpc/caller";
import "server-only";

export const currentUser = async () => {
	const apiCaller = await createApiCaller();
	const user = await apiCaller.auth.user();

	if (!user) {
		return {
			user: null,
		};
	}

	return {
		user,
	};
};
