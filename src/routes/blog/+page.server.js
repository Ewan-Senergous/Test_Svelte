import { posts } from './data.js';

export function load({ cookies }) {
	// Lecture du cookie
	const lastVisited = cookies.get('lastVisited');

	return {
		summaries: posts.map((post) => ({
			slug: post.slug,
			title: post.title
		})),
		lastVisited // Ajouter le slug du dernier article consulté
	};
}
