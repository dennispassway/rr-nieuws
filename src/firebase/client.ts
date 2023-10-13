import { getFirestore, Timestamp, FieldValue } from 'firebase-admin/firestore';
import { initializeApp, cert, getApps } from 'firebase-admin/app';

if (!getApps().length) {
	// TODO: move to env variable
	const SAC = {};

	initializeApp({ credential: cert(SAC) });
}

interface Article {
	createdAt: Timestamp;
	createdBy: string;
	image: string;
	intro: string;
	slug: string;
	title: string;
}

type NewArticle = Omit<Article, 'slug' | 'createdAt'>;

const db = getFirestore();
const articlesRef = db.collection('articles');

export async function getArticleForSlug(slug: string) {
	const snapshot = await articlesRef.where('slug', '==', slug).limit(1).get();

	if (snapshot.empty) {
		return undefined;
	}

	return snapshot.docs[0].data() as Article;
}

// export async function getLatestArticles() {
// 	const snapshot = await articlesRef.where('slug', '==', slug).limit(1).get();

// 	if (snapshot.empty) {
// 		return undefined;
// 	}

// 	return snapshot.docs[0].data() as Article;
// }

export async function createArticle({ title, ...rest }: NewArticle) {
	const slug = await createUniqueSlugForTitle(title);
	const newArticleData = {
		...rest,
		createdAt: FieldValue.serverTimestamp(),
		slug,
		title
	};

	await articlesRef.doc(slug).set(newArticleData);
	return getArticleForSlug(slug);
}

async function createUniqueSlugForTitle(title: string) {
	const slug = slugify(title);
	const snapshot = await articlesRef.where('slug', '==', slug).limit(1).get();

	if (snapshot.empty) {
		return slug;
	} else {
		return createUniqueSlugForTitle(`${title}-${Math.floor(Math.random() * 1000)}`);
	}
}

function slugify(title: string) {
	return title
		.toLowerCase()
		.replace(/ /g, '-')
		.replace(/[^\w-]+/g, '');
}
