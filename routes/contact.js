// ==========================================
// CONTACT API ROUTES
// ==========================================

const express = require('express');
const { body, validationResult } = require('express-validator');
const rateLimit = require('express-rate-limit');
const router = express.Router();

// Rate limiting for contact form
const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // limit each IP to 5 contact form submissions per windowMs
    message: {
        success: false,
        error: 'Too many contact form submissions. Please try again later.'
    }
});

// Validation rules
const contactValidation = [
    body('name')
        .trim()
        .isLength({ min: 2, max: 100 })
        .withMessage('Name must be between 2 and 100 characters')
        .matches(/^[a-zA-Zа-яА-ЯіІїЇєЄ\s]+$/)
        .withMessage('Name can only contain letters and spaces'),
    
    body('email')
        .isEmail()
        .normalizeEmail()
        .withMessage('Please provide a valid email address'),
    
    body('message')
        .trim()
        .isLength({ min: 10, max: 1000 })
        .withMessage('Message must be between 10 and 1000 characters'),
    
    body('phone')
        .optional()
        .isMobilePhone('any')
        .withMessage('Please provide a valid phone number'),
    
    body('company')
        .optional()
        .trim()
        .isLength({ max: 100 })
        .withMessage('Company name must be less than 100 characters')
];

// POST /api/contact - Handle contact form submission
router.post('/', contactLimiter, contactValidation, async (req, res) => {
    try {
        // Check validation results
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                error: 'Validation failed',
                details: errors.array()
            });
        }

        const { name, email, message, phone, company } = req.body;

        // Create contact entry object
        const contactData = {
            name,
            email,
            message,
            phone: phone || null,
            company: company || null,
            submittedAt: new Date(),
            ipAddress: req.ip,
            userAgent: req.get('User-Agent')
        };

        // TODO: Save to database when ready
        // const contact = new Contact(contactData);
        // await contact.save();

        // TODO: Send email notification
        // await sendEmailNotification(contactData);

        // Log submission (temporary until database is connected)
        console.log('📧 New contact form submission:', {
            name: contactData.name,
            email: contactData.email,
            timestamp: contactData.submittedAt
        });

        res.status(200).json({
            success: true,
            message: 'Дякуємо за ваше повідомлення! Ми зв\'яжемося з вами найближчим часом.',
            data: {
                submittedAt: contactData.submittedAt
            }
        });

    } catch (error) {
        console.error('❌ Contact form error:', error);
        res.status(500).json({
            success: false,
            error: 'Помилка сервера. Спробуйте пізніше.'
        });
    }
});

// GET /api/contact/test - Test endpoint
router.get('/test', (req, res) => {
    res.json({
        success: true,
        message: 'Contact API is working!',
        timestamp: new Date().toISOString()
    });
});

module.exports = router;