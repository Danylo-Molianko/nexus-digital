// ==========================================
// NEXUS DIGITAL - ENHANCED EXPRESS SERVER
// ==========================================

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');

// Import custom modules
const connectDB = require('./config/database');
const { errorHandler, notFoundHandler, requestLogger } = require('./middleware/errorHandler');
const { generalLimiter, apiLimiter, validateContentType, sanitizeInput, checkPayloadSize } = require('./middleware/security');

// Import routes
const contactRoutes = require('./routes/contact');
const servicesRoutes = require('./routes/services');

const app = express();
const PORT = process.env.PORT || 8080;

// ==========================================
// DATABASE CONNECTION
// ==========================================
(async () => {
    try {
        await connectDB.connect();
        await connectDB.initializeTables();
    } catch (error) {
        console.error('Failed to initialize database:', error);
    }
})();

// ==========================================
// SECURITY MIDDLEWARE
// ==========================================

// Request logging
app.use(requestLogger);

// Helmet для базових заголовків безпеки
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com", "https://unpkg.com"],
            fontSrc: ["'self'", "https://fonts.gstatic.com"],
            imgSrc: ["'self'", "data:", "https:", "blob:"],
            scriptSrc: ["'self'", "'unsafe-inline'", "https://unpkg.com"],
            connectSrc: ["'self'"],
            objectSrc: ["'none'"],
            mediaSrc: ["'self'"],
            frameSrc: ["'none'"],
            upgradeInsecureRequests: []
        }
    },
    crossOriginEmbedderPolicy: false
}));

// CORS налаштування
app.use(cors({
    origin: process.env.NODE_ENV === 'production' 
        ? process.env.FRONTEND_URL 
        : ['http://localhost:8080', 'http://127.0.0.1:8080', 'http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    credentials: true
}));

// General rate limiting
app.use(generalLimiter);

// API specific rate limiting
app.use('/api/', apiLimiter);

// Security middleware
app.use(validateContentType);
app.use(sanitizeInput);
app.use(checkPayloadSize);

// ==========================================
// PARSING MIDDLEWARE
// ==========================================
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));

// ==========================================
// STATIC FILES
// ==========================================
app.use(express.static(path.join(__dirname, 'public'), {
    maxAge: process.env.NODE_ENV === 'production' ? '1d' : '0',
    etag: true,
    lastModified: true
}));

// ==========================================
// API ROUTES
// ==========================================

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({
        success: true,
        message: 'Nexus Digital API працює!',
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || 'development',
        version: process.env.npm_package_version || '1.0.0'
    });
});

// API Routes
app.use('/api/contact', contactRoutes);
app.use('/api/services', servicesRoutes);

// API info endpoint
app.get('/api', (req, res) => {
    res.json({
        success: true,
        message: 'Nexus Digital API',
        version: '1.0.0',
        endpoints: {
            health: 'GET /api/health',
            contact: 'POST /api/contact',
            services: 'GET /api/services',
            serviceById: 'GET /api/services/:id',
            categories: 'GET /api/services/meta/categories'
        }
    });
});

// ==========================================
// SPA SUPPORT
// ==========================================
app.use(notFoundHandler);

// ==========================================
// ERROR HANDLING
// ==========================================
app.use(errorHandler);

// ==========================================
// GRACEFUL SHUTDOWN
// ==========================================
process.on('SIGTERM', () => {
    console.log('🛑 SIGTERM received. Shutting down gracefully...');
    process.exit(0);
});

process.on('SIGINT', () => {
    console.log('🛑 SIGINT received. Shutting down gracefully...');
    process.exit(0);
});

// ==========================================
// SERVER START
// ==========================================
const server = app.listen(PORT, () => {
    console.log(`
🚀 Nexus Digital Server запущено!
📡 Port: ${PORT}
🌍 Environment: ${process.env.NODE_ENV || 'development'}
🔗 URL: http://localhost:${PORT}
📚 API: http://localhost:${PORT}/api
💾 Database: ${process.env.MONGODB_URI ? 'Connected' : 'Not configured'}
    `);
});

module.exports = server;