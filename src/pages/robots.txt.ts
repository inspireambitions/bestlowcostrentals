import type { APIRoute } from 'astro';
export const GET: APIRoute = () => new Response(
`User-agent: *
Allow: /
Disallow: /admin
Sitemap: https://bestlowcostrentals.com/sitemap-index.xml`,
  { headers: { 'Content-Type': 'text/plain' } }
);
