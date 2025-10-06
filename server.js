// ==========================================
// NEXUS DIGITAL - MULTI-PAGE EXPRESS SERVER  
// ==========================================

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

console.log('🚀 Запуск Nexus Digital багатосторінкового сервера...');

// Middleware для парсингу JSON
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Diagnostic Middleware to log all incoming requests
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public'), {
    maxAge: '1d',
    etag: false
}));

// ==========================================
// ROUTES FOR ALL 5 PAGES
// ==========================================

// 1. Головна сторінка
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pages', 'index.html'));
});

// 2. Про нас
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pages', 'about.html'));
});

// 3. Послуги
app.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pages', 'services.html'));
});

// 4. Портфоліо
app.get('/portfolio', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pages', 'portfolio.html'));
});

// 5. Контакти
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pages', 'contact.html'));
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ 
        status: 'OK', 
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        version: '1.0.0',
        pages: ['/', '/about', '/services', '/portfolio', '/contact']
    });
});

// API status endpoint
app.get('/api/status', (req, res) => {
    res.json({ 
        message: 'Nexus Digital Multi-Page API is running',
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || 'development',
        availablePages: {
            home: '/',
            about: '/about',
            services: '/services', 
            portfolio: '/portfolio',
            contact: '/contact'
        }
    });
});

// 404 handler for all other routes
app.get('*', (req, res) => {
    res.status(404).json({
        error: 'Сторінка не знайдена',
        path: req.url,
        timestamp: new Date().toISOString()
    });
});

// Global error handler
app.use((err, req, res, next) => {
    console.error('❌ Помилка сервера:', err);
    res.status(500).json({
        error: 'Внутрішня помилка сервера',
        timestamp: new Date().toISOString()
    });
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('🛑 Отримано SIGTERM, зупиняємо сервер...');
    process.exit(0);
});

process.on('SIGINT', () => {
    console.log('🛑 Отримано SIGINT, зупиняємо сервер...');
    process.exit(0);
});

// Запуск сервера
app.listen(PORT, '0.0.0.0', () => {
    console.log(`✅ Nexus Digital сервер запущено на порту ${PORT}`);
    console.log(`🌐 Локально доступно: http://localhost:${PORT}`);
    console.log(`📊 Health check: http://localhost:${PORT}/health`);
    console.log(`🎯 API Status: http://localhost:${PORT}/api/status`);
});