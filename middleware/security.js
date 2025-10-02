// ==========================================
// SECURITY MIDDLEWARE
// ==========================================

const rateLimit = require('express-rate-limit');

// Загальне rate limiting
const generalLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 хвилин
    max: 100, // 100 запитів на IP
    message: {
        success: false,
        error: 'Забагато запитів з вашого IP. Спробуйте через 15 хвилин.',
        code: 'RATE_LIMIT_EXCEEDED'
    },
    standardHeaders: true,
    legacyHeaders: false,
    // Пропустити localhost в розробці
    skip: (req) => {
        return process.env.NODE_ENV === 'development' && 
               (req.ip === '127.0.0.1' || req.ip === '::1');
    }
});

// Строге rate limiting для API
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 хвилин
    max: 50, // 50 запитів на IP для API
    message: {
        success: false,
        error: 'Перевищено ліміт API запитів. Спробуйте через 15 хвилин.',
        code: 'API_RATE_LIMIT_EXCEEDED'
    },
    standardHeaders: true,
    legacyHeaders: false,
    skip: (req) => {
        return process.env.NODE_ENV === 'development' && 
               (req.ip === '127.0.0.1' || req.ip === '::1');
    }
});

// Дуже строге rate limiting для контактної форми
const contactLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 година
    max: 3, // 3 повідомлення на годину
    message: {
        success: false,
        error: 'Ви можете відправити лише 3 повідомлення на годину. Спробуйте пізніше.',
        code: 'CONTACT_RATE_LIMIT_EXCEEDED'
    },
    standardHeaders: true,
    legacyHeaders: false,
    skip: (req) => {
        return process.env.NODE_ENV === 'development' && 
               (req.ip === '127.0.0.1' || req.ip === '::1');
    }
});

// Middleware для валідації Content-Type
const validateContentType = (req, res, next) => {
    // Перевіряємо лише POST/PUT/PATCH запити
    if (!['POST', 'PUT', 'PATCH'].includes(req.method)) {
        return next();
    }
    
    const contentType = req.get('Content-Type');
    
    // Дозволені типи контенту
    const allowedTypes = [
        'application/json',
        'application/x-www-form-urlencoded',
        'multipart/form-data'
    ];
    
    if (!contentType || !allowedTypes.some(type => contentType.includes(type))) {
        return res.status(400).json({
            success: false,
            error: 'Непідтримуваний тип контенту',
            code: 'INVALID_CONTENT_TYPE'
        });
    }
    
    next();
};

// Middleware для санітизації вхідних даних
const sanitizeInput = (req, res, next) => {
    const sanitizeString = (str) => {
        if (typeof str !== 'string') return str;
        
        return str
            .trim()
            .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Видалити script теги
            .replace(/javascript:/gi, '') // Видалити javascript: протокол
            .replace(/on\w+\s*=/gi, ''); // Видалити event handlers
    };
    
    const sanitizeObject = (obj) => {
        if (obj && typeof obj === 'object') {
            for (const key in obj) {
                if (typeof obj[key] === 'string') {
                    obj[key] = sanitizeString(obj[key]);
                } else if (typeof obj[key] === 'object') {
                    sanitizeObject(obj[key]);
                }
            }
        }
        return obj;
    };
    
    // Санітизація body, query та params
    if (req.body) req.body = sanitizeObject(req.body);
    if (req.query) req.query = sanitizeObject(req.query);
    if (req.params) req.params = sanitizeObject(req.params);
    
    next();
};

// Middleware для перевірки розміру payload
const checkPayloadSize = (req, res, next) => {
    const maxSize = 1024 * 1024; // 1MB
    
    if (req.get('Content-Length') > maxSize) {
        return res.status(413).json({
            success: false,
            error: 'Розмір запиту занадто великий (максимум 1MB)',
            code: 'PAYLOAD_TOO_LARGE'
        });
    }
    
    next();
};

module.exports = {
    generalLimiter,
    apiLimiter,
    contactLimiter,
    validateContentType,
    sanitizeInput,
    checkPayloadSize
};