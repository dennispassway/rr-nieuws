import { getArticleForSlug } from '../../../firebase/client';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;
	const article = await getArticleForSlug(slug);

	if (article) {
		const createdAt = article.createdAt.toDate();
		return { ...article, createdAt };
	}

	throw error(404, 'Not found');
};
