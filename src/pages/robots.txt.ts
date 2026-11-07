import type { APIRoute } from 'astro';

// 사이트맵 주소를 배포 주소(astro.config.mjs 의 site)에 맞춰 알려 준다
export const GET: APIRoute = ({ site }) =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap.xml', site).href}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
