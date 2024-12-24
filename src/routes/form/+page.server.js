export const actions = {
	create: async ({ request }) => {
		await new Promise((fulfil) => setTimeout(fulfil, 1000));
		const formData = await request.formData();
		const name = formData.get('name');
		const email = formData.get('email');

		console.log('Données reçues :', { name, email });

		return { success: true };
	}
};
