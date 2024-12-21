export const actions = {
	setCookie: async ({ request, cookies }) => {
		const data = await request.formData();
		const username = data.get('username');

		if (typeof username !== 'string' || !username) {
			return { status: 400, body: { error: "Nom d'utilisateur invalide." } };
		}

		cookies.set('username', username, {
			path: '/', // Cookie accessible sur tout le site
			httpOnly: true,
			sameSite: 'strict',
			maxAge: 60 * 60 * 24 // 1 jour
		});

		return { status: 200, body: { success: true } };
	},
	clearCookie: ({ cookies }) => {
		cookies.delete('username', { path: '/' });
		return { status: 200, body: { success: true } };
	}
};
