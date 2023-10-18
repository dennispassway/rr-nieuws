import { getFirestore, Timestamp, FieldValue } from 'firebase-admin/firestore';
import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { FIREBASE_SERVICE_ACCOUNT } from '$env/static/private';

if (!getApps().length) {
	const credential = cert(JSON.parse(FIREBASE_SERVICE_ACCOUNT))
	initializeApp({ credential });
}

export interface Article {
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

export async function getLatestArticles(amount = 10) {
	const snapshot = await articlesRef.orderBy('createdAt', 'desc').limit(amount).get();

	if (snapshot.empty) {
		return [];
	}

	const docs: Article[] = [];

	snapshot.forEach((doc) => {
		const data = doc.data() as Article;
		docs.push(data);
	});

	return docs;
}

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
