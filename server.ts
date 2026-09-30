import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
  const isProduction = process.env.NODE_ENV === 'production';

  const GOOGLE_DRIVE_FILE_ID = '1tPcMb6tl3LnIqmrxOEpYH3p7SrEsJy0l';
  const DIRECT_DOWNLOAD_URL = `https://drive.usercontent.google.com/download?id=${GOOGLE_DRIVE_FILE_ID}&export=download&confirm=t`;

  // Direct APK download API endpoint
  app.get('/api/download', async (req, res) => {
    try {
      // Forward request to Google Drive direct stream or redirect with attachment disposition
      res.setHeader('Content-Disposition', 'attachment; filename="app-release.apk"');
      res.setHeader('Content-Type', 'application/vnd.android.package-archive');
      
      const response = await fetch(DIRECT_DOWNLOAD_URL, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Linux; Android 10; Mobile) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36'
        },
        redirect: 'follow'
      });

      if (response.ok && response.body) {
        // Stream the APK directly to the client
        const reader = response.body.getReader();
        res.status(200);
        
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          res.write(value);
        }
        res.end();
      } else {
        // Fallback: 302 redirect directly to Google Drive download stream
        res.redirect(DIRECT_DOWNLOAD_URL);
      }
    } catch (error) {
      console.error('Download stream error:', error);
      res.redirect(DIRECT_DOWNLOAD_URL);
    }
  });

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', fileId: GOOGLE_DRIVE_FILE_ID });
  });

  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
