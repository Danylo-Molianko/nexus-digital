import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Налаштування для роботи з доменом та проксі
app.set('trust proxy', true);

// Security middleware
app.use(helmet({ 
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false
}));

app.use(cors({
    origin: process.env.NODE_ENV === 'production'
        ? ['https://nexus-studio-innovation.com', 'https://www.nexus-studio-innovation.com']
        : ['http://localhost:3000', 'http://localhost:5173', 'https://nexus-studio-innovation.com'],
    credentials: true
}));

app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));

// Middleware для правильного кешування
app.use((req, res, next) => {
  // Заборонити кешування HTML файлів
  if (req.path.endsWith('.html') || req.path === '/') {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
  }
  next();
});

// API routes
app.get('/api/health', (req, res) => {
    res.json({ 
      success: true, 
      message: 'Nexus Digital API працює!',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      domain: 'nexus-studio-innovation.com',
      version: '1.0.0'
    });
});

// Static files with smart caching
const buildPath = path.join(__dirname, 'dist');
app.use(express.static(buildPath, {
  maxAge: '1d',
  etag: true,
  lastModified: true,
  setHeaders: (res, filePath) => {
    // JavaScript та CSS файли можуть кешуватися довго (є хеші)
    if (filePath.match(/\.(js|css)$/)) {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    }
    // Зображення та інші ресурси
    else if (filePath.match(/\.(png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$/)) {
      res.setHeader('Cache-Control', 'public, max-age=86400');
    }
    // HTML файли не кешуються
    else if (filePath.match(/\.html$/)) {
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      res.setHeader('Pragma', 'no-cache');
      res.setHeader('Expires', '0');
    }
  }
}));

// Health check endpoint (legacy)
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    domain: 'nexus-studio-innovation.com',
    version: '1.0.0'
  });
});

// SPA fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Nexus Digital Full-stack Server запущено на порту ${PORT}`);
  console.log(`📍 Local: http://localhost:${PORT}`);
  console.log(`🌐 Production: https://nexus-studio-innovation.com`);
});
