import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || '0.0.0.0';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Security middleware
app.use(helmet({ 
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
            fontSrc: ["'self'", "https://fonts.gstatic.com"],
            imgSrc: ["'self'", "data:", "https://placehold.co"],
            scriptSrc: ["'self'"],
            connectSrc: ["'self'"],
        },
    },
    crossOriginEmbedderPolicy: false 
}));

// CORS configuration (дозволяє продакшн домен)
app.use(cors({
    origin: [
        'https://nexus-studio-innovation.com',
        'https://www.nexus-studio-innovation.com',
        `http://localhost:${PORT}`, 
        `http://127.0.0.1:${PORT}`
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    optionsSuccessStatus: 200
}));

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// API routes
app.get('/api/health', (req, res) => {
    res.json({ 
        success: true, 
        message: 'Nexus Studio API працює!',
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || 'development',
        production_url: 'https://nexus-studio-innovation.com',
        local_url: `http://localhost:${PORT}`,
        mode: 'production-ready'
    });
});

app.get('/api/status', (req, res) => {
    res.json({
        status: 'active',
        server: 'Nexus Studio Backend',
        version: '1.0.0',
        uptime: process.uptime(),
        production_site: 'https://nexus-studio-innovation.com',
        local_development: `http://localhost:${PORT}`,
        deploy_ready: true
    });
});

// Serve static files from dist folder (весь фронтенд)
const buildPath = path.join(__dirname, 'dist');
app.use(express.static(buildPath, {
    maxAge: process.env.NODE_ENV === 'production' ? '1d' : '0',
    etag: true,
    lastModified: true,
    setHeaders: (res, path) => {
        if (path.endsWith('.html')) {
            res.setHeader('Cache-Control', 'no-cache');
        }
    }
}));

// Handle React Router (SPA fallback) - ВСІ роути через сервер
app.get('*', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Server Error:', err);
    res.status(500).json({
        success: false,
        message: 'Internal Server Error',
        error: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
    });
});

// Start server
app.listen(PORT, HOST, () => {
    console.log(`🚀 Nexus Studio Server запущено:`);
    console.log(`   - Локальна розробка:  http://localhost:${PORT}`);
    console.log(`   - Network:           http://${HOST}:${PORT}`);
    console.log(`   - Продакшн сайт:     https://nexus-studio-innovation.com`);
    console.log(`   - Environment:       ${process.env.NODE_ENV || 'development'}`);
    console.log(`   - Static files:      ${buildPath}`);
    console.log(`\n🌍 Основний сайт: https://nexus-studio-innovation.com`);
    console.log(`🔧 Локальна розробка: http://localhost:${PORT}`);
    console.log(`\n✨ Готово до розгортання на продакшн!`);
});
