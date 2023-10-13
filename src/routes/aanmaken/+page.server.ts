import { createArticle } from '../../firebase/client';
import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const title = data.get('title');
		const createdBy = data.get('createdBy');
		const intro = data.get('intro');
		const image = data.get('image');

		if (!title || title === '') {
			return fail(400, { field: 'title', error: true });
		}

		if (!createdBy || createdBy === '') {
			return fail(400, { field: 'createdBy', error: true });
		}

		if (!intro || intro === '') {
			return fail(400, { field: 'intro', error: true });
		}

		if (!image || image === '') {
			return fail(400, { field: 'image', error: true });
		}

		const article = await createArticle({
			title: title.toString(),
			createdBy: createdBy.toString(),
			intro: intro.toString(),
			image: image.toString()
		});

		if (!article) {
			return fail(500, {  error: true });
		}

		return { redirect: `/n/${article.slug}` };
	}
};
