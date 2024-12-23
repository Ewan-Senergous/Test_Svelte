export const actions = {
	create: async ({ request }) => {
		const formData = await request.formData();
		const name = formData.get('name');
		const email = formData.get('email');

		console.log('Données reçues :', { name, email });

		return { success: true };
	}
};
