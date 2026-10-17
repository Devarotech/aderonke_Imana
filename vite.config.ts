import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, type Plugin} from 'vite';

const savePortraitPlugin = (): Plugin => ({
  name: 'save-portrait-api',
  configureServer(server) {
    server.middlewares.use('/api/save-portrait', (req, res) => {
      if (req.method === 'POST') {
        let body = '';
        req.on('data', (chunk) => { body += chunk; });
        req.on('end', () => {
          try {
            const data = JSON.parse(body);
            if (data.image && data.image.startsWith('data:image/')) {
              const base64Data = data.image.replace(/^data:image\/\w+;base64,/, '');
              const buffer = Buffer.from(base64Data, 'base64');
              if (!fs.existsSync('public')) {
                fs.mkdirSync('public', { recursive: true });
              }
              fs.writeFileSync('public/portrait.png', buffer);
              res.writeHead(200, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ success: true, path: '/portrait.png' }));
              return;
            }
          } catch (e) {
            console.error('Failed to save portrait', e);
          }
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'invalid payload' }));
        });
        return;
      }
      res.writeHead(404);
      res.end();
    });
  },
});

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), savePortraitPlugin()],
    resolve: {
      dedupe: ['react', 'react-dom'],
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
