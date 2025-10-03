// ==========================================
// NEXUS DIGITAL - ENHANCED EXPRESS SERVER
// ==========================================

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

console.log('🚀 Запуск Nexus Digital сервера...');

// Diagnostic Middleware to log all incoming requests
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] Request received for: ${req.url}`);
    next();
});

// Статичні файли
app.use(express.static(path.join(__dirname, 'public'), {
    maxAge: '1d',
    etag: false
}));

app.use('/assets', express.static(path.join(__dirname, 'assets'), {
    maxAge: '7d',
    etag: false
}));

// Основний маршрут
app.get('/', (req, res) => {
    const indexPath = path.join(__dirname, 'public', 'index.html');
    res.sendFile(indexPath, (err) => {
        if (err) {
            console.error('Помилка відправки index.html:', err);
            res.status(500).send(`
                <h1>Помилка сервера</h1>
                <p>Файл index.html не знайдено</p>
                <p>Шлях: ${indexPath}</p>
            `);
        }
    });
});

// Health check
app.get('/health', (req, res) => {
    res.json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
    });
});

// 404 handler
app.get('*', (req, res) => {
    res.status(404).send(`
        <h1>404 - Сторінка не знайдена</h1>
        <p>Шлях: ${req.url}</p>
        <a href="/">Повернутися на головну</a>
    `);
});

// Error handler
app.use((err, req, res, next) => {
    console.error('Помилка сервера:', err);
    res.status(500).send('Внутрішня помилка сервера');
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

// Test route to confirm server is running
app.get('/test', (req, res) => {
    res.status(200).send('Server is working!');
});

// Запуск сервера
app.listen(PORT, '0.0.0.0', () => {
    console.log(`✅ Nexus Digital сервер запущено на порту ${PORT}`);
    console.log(`🌐 Локально доступно: http://localhost:${PORT}`);
    console.log(`🌍 Зовнішньо доступно: http://164.90.234.176:${PORT}`);
    console.log(`📊 Health check: http://localhost:${PORT}/health`);
});