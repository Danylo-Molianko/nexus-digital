import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import crypto from 'crypto';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { body, validationResult } from 'express-validator';
import winston from 'winston';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Завантаження змінних середовища
dotenv.config();

// Налаштування ES Module __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;
const IS_PRODUCTION = process.env.NODE_ENV === 'production';

// --- STRUCTURED LOGGING (WINSTON) ---
const logger = winston.createLogger({
  level: IS_PRODUCTION ? 'info' : 'debug',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      )
    }),
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' })
  ]
});

// --- RATE LIMITING (ЗАХИСТ ВІД DDoS) ---
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 хвилин
  max: 100, // макс 100 запитів з одного IP
  message: { error: 'Too many requests from this IP, please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
});

const contactFormLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 година
  max: 5, // макс 5 форм на годину
  message: { error: 'Too many contact form submissions. Please try again in an hour.' }
});

// --- CONTENT SECURITY POLICY (CSP) ---
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'"], // React потребує unsafe-inline
        styleSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", "data:", "https:"],
        connectSrc: ["'self'"],
        fontSrc: ["'self'", "data:"],
        objectSrc: ["'none'"],
        mediaSrc: ["'self'"],
        frameSrc: ["'none'"]
      }
    },
    hsts: {
      maxAge: 31536000,
      includeSubDomains: true,
      preload: true
    }
  })
);

// --- CORS З WHITELIST ---
const corsOptions = {
  origin: IS_PRODUCTION
    ? ['https://nexus-studio-innovation.com', 'https://www.nexus-studio-innovation.com']
    : '*',
  credentials: true
};
app.use(cors(corsOptions));

// --- БАЗОВІ МІДЛВЕРИ ---
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(compression());

// --- REQUEST LOGGING ---
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`, {
    ip: req.ip,
    userAgent: req.get('user-agent')
  });
  next();
});

// --- NODEMAILER ТРАНСПОРТ ---
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.EMAIL_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Перевірка підключення email (тільки якщо налаштовано)
if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
  transporter.verify((error, success) => {
    if (error) {
      logger.error('Email configuration error:', error);
    } else {
      logger.info('Email server is ready to send messages');
    }
  });
}

// --- API ENDPOINTS ---

// Rate limiting для всіх API маршрутів
app.use('/api/', apiLimiter);

// [НОВИЙ] POST /api/contact - CONTACT FORM HANDLER
app.post('/api/contact',
  contactFormLimiter,
  [
    body('fullName')
      .trim()
      .isLength({ min: 2, max: 100 })
      .withMessage('Full name must be between 2 and 100 characters')
      .escape(),
    body('companyEmail')
      .trim()
      .isEmail()
      .withMessage('Must be a valid email address')
      .normalizeEmail(),
    body('companyWebsite')
      .trim()
      .optional()
      .isURL()
      .withMessage('Must be a valid URL'),
    body('yourRole')
      .trim()
      .isIn(['ceo_founder', 'tech_lead', 'financial_lead', 'manager', 'other'])
      .withMessage('Invalid role selected'),
    body('mainObjective')
      .trim()
      .notEmpty()
      .withMessage('Main objective is required'),
    body('estimatedBudget')
      .trim()
      .isIn(['low', 'mid', 'high', 'ultra-high'])
      .withMessage('Invalid budget range'),
    body('keyChallenge')
      .trim()
      .isLength({ min: 10, max: 2000 })
      .withMessage('Key challenge must be between 10 and 2000 characters')
      .escape()
  ],
  async (req, res) => {
    try {
      // Валідація
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        logger.warn('Contact form validation failed', { errors: errors.array() });
        return res.status(400).json({
          success: false,
          errors: errors.array()
        });
      }

      const { fullName, companyEmail, companyWebsite, yourRole, mainObjective, estimatedBudget, keyChallenge } = req.body;

      // Відправка email (тільки якщо налаштовано)
      if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        const mailOptions = {
          from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
          to: process.env.EMAIL_TO || 'hello@nexus-studio.com',
          replyTo: companyEmail,
          subject: `🚀 New Contact Form: ${fullName} (${mainObjective})`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${companyEmail}</p>
            <p><strong>Website:</strong> ${companyWebsite || 'Not provided'}</p>
            <p><strong>Role:</strong> ${yourRole}</p>
            <p><strong>Objective:</strong> ${mainObjective}</p>
            <p><strong>Budget:</strong> ${estimatedBudget}</p>
            <h3>Key Challenge:</h3>
            <p>${keyChallenge}</p>
            <hr>
            <p><small>Sent from Nexus Studio Contact Form</small></p>
          `
        };

        await transporter.sendMail(mailOptions);
        logger.info('Contact form email sent', { email: companyEmail });
      } else {
        logger.warn('Email not configured - form data logged only', { email: companyEmail });
      }

      res.json({
        success: true,
        message: 'Thank you for your submission. We will contact you soon!'
      });

    } catch (error) {
      logger.error('Contact form error:', error);
      res.status(500).json({
        success: false,
        error: 'An error occurred. Please try again later.'
      });
    }
  }
);

// [ІСНУЮЧИЙ] GET /api/v1/pattern-seed
app.get('/api/v1/pattern-seed', (req, res) => {
  try {
    const seed = crypto.randomBytes(16).toString('hex');
    logger.debug('Pattern seed generated', { seed });
    res.json({ seed: seed });
  } catch (error) {
    logger.error('Seed generation error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// --- HEALTHCHECK ---
app.get('/health', (req, res) => {
  try {
    res.set('Cache-Control', 'no-cache');
    const healthData = {
      status: 'ok',
      env: IS_PRODUCTION ? 'production' : 'development',
      time: new Date().toISOString(),
      uptime: process.uptime(),
      node: process.version,
      memory: process.memoryUsage()
    };
    logger.debug('Health check', healthData);
    return res.status(200).json(healthData);
  } catch (e) {
    logger.error('Health check failed:', e);
    return res.status(500).json({ status: 'error' });
  }
});

// --- ОБСЛУГОВУВАННЯ СТАТИЧНИХ ФАЙЛІВ ТА SPA ---
if (IS_PRODUCTION) {
  const distPath = path.join(__dirname, 'dist');
  logger.info(`Serving static files from: ${distPath}`);

  app.use(express.static(distPath, {
    maxAge: '1y',
    immutable: true,
    setHeaders: (res, filePath) => {
      if (filePath.endsWith('index.html')) {
        res.setHeader('Cache-Control', 'no-cache');
      }
    }
  }));

  // Перехоплення всіх інших маршрутів для React Router (SPA fallback)
  app.get('*', (req, res) => {
    if (req.path.startsWith('/api/')) {
      return res.status(404).json({ error: 'API route not found' });
    }
    res.sendFile(path.join(distPath, 'index.html'), (err) => {
      if (err) {
        logger.error('Error sending index.html:', err);
        res.status(500).send(err);
      }
    });
  });
}

// --- ERROR HANDLER (ГЛОБАЛЬНИЙ) ---
app.use((err, req, res, next) => {
  logger.error('Unhandled error:', err);
  res.status(500).json({
    error: IS_PRODUCTION ? 'Internal server error' : err.message
  });
});

// --- ЗАПУСК СЕРВЕРА ---
app.listen(PORT, '0.0.0.0', () => {
  logger.info(`🚀 Nexus Studio Server started on port ${PORT}`);
  if (IS_PRODUCTION) {
    logger.info('Environment: PRODUCTION');
    logger.info('Site: https://nexus-studio-innovation.com');
  } else {
    logger.info('Environment: DEVELOPMENT');
    logger.info(`Local: http://localhost:${PORT}`);
  }
});