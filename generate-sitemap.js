import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = 'https://manovratha.in';

// All routes with their priorities
const routes = [
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    { path: '/about', priority: '0.8', changefreq: 'monthly' },
    { path: '/professionals', priority: '0.9', changefreq: 'weekly' },
    { path: '/organizations', priority: '0.9', changefreq: 'weekly' },
    { path: '/wellness', priority: '0.8', changefreq: 'weekly' },
    { path: '/contact', priority: '0.7', changefreq: 'monthly' },
    { path: '/privacy', priority: '0.5', changefreq: 'yearly' },
    { path: '/faq', priority: '0.7', changefreq: 'monthly' },
    { path: '/careers', priority: '0.6', changefreq: 'weekly' }
];

const generateSitemap = () => {
    // Get today's date in ISO format for lastmod
    const today = new Date().toISOString().split('T')[0];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `    <url>
        <loc>${DOMAIN}${route.path}</loc>
        <lastmod>${today}</lastmod>
        <changefreq>${route.changefreq}</changefreq>
        <priority>${route.priority}</priority>
    </url>`).join('\n')}
</urlset>`;

    const publicDir = path.join(__dirname, 'public');

    // Ensure public directory exists
    if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir);
    }

    fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
    console.log('✅ Sitemap generated successfully at public/sitemap.xml');
    console.log(`📅 Last modified: ${today}`);
    console.log(`📄 Routes included: ${routes.length}`);
};

generateSitemap();
