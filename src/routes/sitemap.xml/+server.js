export async function GET() {

  const urls = [
    'https://www.danielgroves.co.uk/',
    'https://www.danielgroves.co.uk/about',
    'https://www.danielgroves.co.uk/who',
    'https://www.danielgroves.co.uk/services',
    'https://www.danielgroves.co.uk/services/photography',
    'https://www.danielgroves.co.uk/services/technical-drawings',
    'https://www.danielgroves.co.uk/work',
    'https://www.danielgroves.co.uk/contact',
    'https://www.danielgroves.co.uk/blog',
    'https://www.danielgroves.co.uk/blog/bristol-photography-260810',
    'https://www.danielgroves.co.uk/blog/bristol-photography-260809',
    'https://www.danielgroves.co.uk/blog/bristol-balloon-fiesta-2026'
  ]

	return new Response(
		`<?xml version="1.0" encoding="UTF-8" ?>
		<urlset
			xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
			xmlns:xhtml="http://www.w3.org/1999/xhtml"
			xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
			xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
			xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
		>
			${urls.map(u => `<url>
        <loc>${u}</loc>
        <lastmod>2026-08-09T09:19:00+00:00</lastmod>
        <image:image>
          <image:loc>https://www.danielgroves.co.uk/images/placeholder.png</image:loc>
        </image:image>
      </url>`)}
		</urlset>`.trim(),
		{
			headers: {
				'Content-Type': 'application/xml'
			}
		}
	);
}