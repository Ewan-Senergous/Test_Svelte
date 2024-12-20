import { error } from '@sveltejs/kit';
import { posts } from '../data.js';

export function load({ params }) {
	const post = posts.find((post) => post.slug === params.slug);

	if (!post) {
		throw error(404, {
			message: `Article avec le slug "${params.slug}" non trouvé.`
		});
	}

	return { post };
}
