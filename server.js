import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3001;
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

// ================== START: FINAL STATIC PATH CONFIGURATION ==================

// Explicitly define the path to the 'dist' folder.
// '__dirname' resolves to the application's root directory inside Docker (which is /app).
const staticFilesPath = path.join(__dirname, 'dist');

// Serve all static files (like index.html, CSS, JS) from this specified path.
app.use(express.static(staticFilesPath));

// =================== END: FINAL STATIC PATH CONFIGURATION ===================

// Handle React Router (SPA fallback) - ВСІ роути через сервер
app.get('*', (req, res) => {
    res.sendFile(path.join(staticFilesPath, 'index.html'));
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
console.log('>>> [ІНДИКАТОР 1] Намагаюся запустити сервер і відкрити порт...');
app.listen(PORT, () => {
    console.log(`>>> [ІНДИКАТОР 2] УСПІХ! Сервер слухає на порту ${PORT}`);
    console.log(`🚀 Nexus Studio Server запущено:`);
    console.log(`   - Локальна розробка:  http://localhost:${PORT}`);
    console.log(`   - Network:           http://0.0.0.0:${PORT}`);
    console.log(`   - Продакшн сайт:     https://nexus-studio-innovation.com`);
    console.log(`   - Environment:       ${process.env.NODE_ENV || 'development'}`);
    console.log(`   - Static files:      ${staticFilesPath}`);
    console.log(`\n🌍 Основний сайт: https://nexus-studio-innovation.com`);
    console.log(`🔧 Локальна розробка: http://localhost:${PORT}`);
    console.log(`\n✨ Готово до розгортання на продакшн!`);
});
