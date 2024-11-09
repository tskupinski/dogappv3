import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import { foods } from './src/data/foods';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'generate-sitemap',
      closeBundle: () => {
        const baseUrl = 'https://copiesmoze.pl'; // Replace with your actual domain
        
        const paths = [
          '/',
          '/search',
          '/journal',
          '/polityka-prywatnosci',
          ...foods.map(food => `/food/${food.slug}`)
        ];

        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map(path => `  <url>
    <loc>${baseUrl}${path}</loc>
    <changefreq>weekly</changefreq>
    <priority>${path === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

        // Ensure dist directory exists
        if (!fs.existsSync('dist')) {
          fs.mkdirSync('dist');
        }

        // Write sitemap file
        fs.writeFileSync('dist/sitemap.xml', sitemap);
        console.log('Sitemap generated successfully!');
      }
    }
  ],
});