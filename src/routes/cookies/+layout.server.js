export const load = ({ cookies }) => {
	const username = cookies.get('username');
	return { username };
};
