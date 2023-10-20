import { getLatestArticles } from '../../firebase/client';

export async function GET() {
	const articles = await getLatestArticles(99999999);
	return new Response(
		`
		<?xml version="1.0" encoding="UTF-8" ?>
		<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="https://www.w3.org/1999/xhtml">
			<url><loc>/</loc></url>
			<url><loc>/aanmaken</loc></url>
			${articles.map(({ slug }) => `<url><loc>/n/${slug}</loc></url>`).join('\n')}))}
		</urlset>`.trim(),
		{
			headers: {
				'Content-Type': 'application/xml'
			}
		}
	);
}
