import type { APIRoute } from 'astro';

const pages = [
  '/',
  '/car-rentals',
  '/car-rentals/dubai-airport',
  '/car-rentals/dubai-marina',
  '/car-rentals/downtown-dubai',
  '/car-rentals/jbr',
  '/car-rentals/business-bay',
  '/car-rentals/dwtc',
  '/car-rentals/madinat-jumeirah',
  '/car-rentals/monthly',
  '/holiday-homes',
  '/holiday-homes/jbr',
  '/holiday-homes/dubai-marina',
  '/holiday-homes/downtown-dubai',
  '/holiday-homes/palm-jumeirah',
  '/furniture-rental',
  '/storage',
  '/corporate',
  '/workspaces',
  '/get-quotes',
  '/blog',
  '/blog/cheapest-car-rental-companies-dubai',
  '/blog/budget-holiday-homes-dubai-guide',
  '/blog/furniture-rental-dubai-expats',
  '/blog/car-under-100-dubai',
  '/blog/cheap-storage-units-dubai',
  '/blog/dubai-virtual-visa-rental-guide',
  '/blog/car-rental-no-deposit-dubai',
  '/affiliate-disclosure',
];

const site = 'https://bestlowcostrentals.com';

export const GET: APIRoute = () => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url><loc>${site}${p}</loc><lastmod>${new Date().toISOString().split('T')[0]}</lastmod><priority>${p === '/' ? '1.0' : p.includes('/blog/') ? '0.7' : '0.8'}</priority></url>`).join('\n')}
</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};
