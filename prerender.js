import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute('dist/static/index.html'), 'utf-8');
const { render } = await import('./dist/server/entry-server.js');

// Determine routes to prerender from dist/static/index.html if possible, or manual list
// For now, we manually list the routes we know exist in App.tsx
const routesToPrerender = [
    '/',
    '/about',
    '/professionals',
    '/organizations',
    '/wellness',
    '/contact',
    '/privacy',
    '/faq',
    '/careers'
];

(async () => {
    // pre-render each route...
    for (const url of routesToPrerender) {
        const helmetContext = {};
        const { html, helmet } = render(url, helmetContext);

        const postHtml = template
            .replace('<!--app-head-->', `
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
      `)
            .replace('<!--app-html-->', html);

        const filePath = `dist/static${url === '/' ? '/index.html' : `${url}/index.html`}`;

        // Ensure directory exists
        const dirname = path.dirname(toAbsolute(filePath));
        if (!fs.existsSync(dirname)) {
            fs.mkdirSync(dirname, { recursive: true });
        }

        fs.writeFileSync(toAbsolute(filePath), postHtml);
        console.log('pre-rendered:', filePath);
    }

    // Copy 404
    fs.copyFileSync(toAbsolute('dist/static/index.html'), toAbsolute('dist/static/404.html'));
})();
