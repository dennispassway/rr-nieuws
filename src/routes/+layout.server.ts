import { getLatestArticles } from '../firebase/client';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	const articles = await getLatestArticles();

	const latestArticles = articles.map((article) => {
		const createdAt = article.createdAt.toDate();
		return { ...article, createdAt };
	});

	return { latestArticles };
};
