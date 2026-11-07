import type { APIRoute } from 'astro';

// 한 페이지짜리 사이트라 첫 화면 주소 하나만 싣는다. lastmod 는 빌드한 날짜다.
export const GET: APIRoute = ({ site }) => {
  const today = new Date().toISOString().slice(0, 10);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${new URL('/', site).href}</loc>
    <lastmod>${today}</lastmod>
  </url>
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
