// ==========================================
// ERROR HANDLING MIDDLEWARE
// ==========================================

const fs = require('fs');
const path = require('path');

// Функція для логування помилок
const logError = (error, req) => {
    const timestamp = new Date().toISOString();
    const logMessage = `
[${timestamp}] ERROR:
URL: ${req.method} ${req.originalUrl}
User-Agent: ${req.get('User-Agent') || 'Unknown'}
IP: ${req.ip}
Error: ${error.message}
Stack: ${error.stack}
---
`;
    
    const logPath = path.join(__dirname, '../logs', 'error.log');
    
    // Створення папки logs якщо не існує
    const logDir = path.dirname(logPath);
    if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir, { recursive: true });
    }
    
    fs.appendFile(logPath, logMessage, (err) => {
        if (err) console.error('❌ Logging error:', err);
    });
};

// Middleware для обробки 404 помилок
const notFoundHandler = (req, res, next) => {
    // Якщо це API запит
    if (req.originalUrl.startsWith('/api/')) {
        return res.status(404).json({
            success: false,
            error: 'API endpoint не знайдено',
            code: 'NOT_FOUND'
        });
    }
    
    // Для SPA - повернути index.html
    res.sendFile(path.join(__dirname, '../public/index.html'));
};

// Middleware для обробки всіх інших помилок
const errorHandler = (error, req, res, next) => {
    // Логування помилки
    console.error('❌ Server Error:', error);
    logError(error, req);
    
    // Стандартні HTTP помилки
    let statusCode = error.statusCode || error.status || 500;
    let message = error.message || 'Внутрішня помилка сервера';
    
    // Обробка специфічних типів помилок
    if (error.name === 'ValidationError') {
        statusCode = 400;
        message = 'Неправильні дані форми';
    } else if (error.name === 'CastError') {
        statusCode = 400;
        message = 'Неправильний формат ID';
    } else if (error.code === 11000) {
        statusCode = 409;
        message = 'Дані вже існують';
    } else if (error.name === 'JsonWebTokenError') {
        statusCode = 401;
        message = 'Неправильний токен авторизації';
    } else if (error.name === 'TokenExpiredError') {
        statusCode = 401;
        message = 'Токен авторизації прострочений';
    }
    
    // Приховати деталі помилок в продакшені
    if (process.env.NODE_ENV === 'production' && statusCode === 500) {
        message = 'Щось пішло не так. Спробуйте пізніше.';
    }
    
    // Відповідь для API запитів
    if (req.originalUrl.startsWith('/api/')) {
        return res.status(statusCode).json({
            success: false,
            error: message,
            ...(process.env.NODE_ENV === 'development' && { 
                stack: error.stack,
                details: error 
            })
        });
    }
    
    // Для звичайних запитів - перенаправити на головну
    res.redirect('/');
};

// Middleware для логування запитів
const requestLogger = (req, res, next) => {
    const timestamp = new Date().toISOString();
    const method = req.method;
    const url = req.originalUrl;
    const userAgent = req.get('User-Agent') || 'Unknown';
    const ip = req.ip;
    
    console.log(`📝 [${timestamp}] ${method} ${url} - ${ip} - ${userAgent}`);
    
    // Логування в файл (тільки в продакшені)
    if (process.env.NODE_ENV === 'production') {
        const logMessage = `[${timestamp}] ${method} ${url} - ${ip} - ${userAgent}\n`;
        const logPath = path.join(__dirname, '../logs', 'access.log');
        
        fs.appendFile(logPath, logMessage, (err) => {
            if (err) console.error('❌ Access logging error:', err);
        });
    }
    
    next();
};

module.exports = {
    notFoundHandler,
    errorHandler,
    requestLogger
};