import { error } from '@sveltejs/kit';
import { posts } from '../data.js';

export function load({ params, cookies }) {
	// Recherche de l'article avec le slug
	const post = posts.find((post) => post.slug === params.slug);

	// Si aucun article n'est trouvé, renvoyer une erreur 404
	if (!post) {
		throw error(404, {
			message: `Article avec le slug "${params.slug}" non trouvé.`
		});
	}

	// Enregistre le dernier slug consulté dans un cookie
	cookies.set('lastVisited', params.slug, {
		path: '/blog',
		httpOnly: false, // Accessible côté client
		maxAge: 60 * 60 * 24 * 7 // 7 jours
	});

	return { post };
}
