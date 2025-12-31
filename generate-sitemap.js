import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = 'https://manovratha.in';

const routes = [
    '/',
    '/home',
    '/about',
    '/professionals',
    '/organizations',
    '/wellness',
    '/contact',
    '/privacy'
];

const generateSitemap = () => {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${routes.map(route => `
    <url>
        <loc>${DOMAIN}${route}</loc>
        <changefreq>weekly</changefreq>
        <priority>${route === '/' ? '1.0' : '0.8'}</priority>
    </url>
    `).join('')}
</urlset>`;

    const publicDir = path.join(__dirname, 'public');

    // Ensure public directory exists (it should in this project)
    if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir);
    }

    fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
    console.log('✅ Sitemap generated successfully at public/sitemap.xml');
};

generateSitemap();
