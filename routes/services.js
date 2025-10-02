// ==========================================
// SERVICES API ROUTES
// ==========================================

const express = require('express');
const router = express.Router();

// Static services data (буде замінено на базу даних)
const servicesData = [
    {
        id: 1,
        slug: 'digital-foundation',
        title: 'Digital Foundation',
        shortDescription: 'Створення потужної онлайн-присутності',
        fullDescription: 'Створення потужної, швидкої та безпечної онлайн-присутності, яка є основою для зростання та залучення інвестицій.',
        image: '/assets/images/picture-for-services-1.webp',
        features: [
            'Професійна веб-розробка',
            'SEO оптимізація',
            'Безпека та захист даних',
            'Мобільна адаптивність',
            'Швидкість завантаження'
        ],
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'MongoDB'],
        deliverables: [
            'Responsive веб-сайт',
            'CMS система',
            'SEO налаштування',
            'SSL сертифікат',
            'Документація'
        ],
        timeline: '2-4 тижні',
        price: {
            currency: 'EUR',
            amount: 2500,
            type: 'starting-from'
        },
        category: 'Web Development',
        isActive: true,
        createdAt: new Date('2023-01-01'),
        updatedAt: new Date()
    },
    {
        id: 2,
        slug: 'business-acceleration',
        title: 'Business Acceleration',
        shortDescription: 'Автоматизація та інтелектуальні рішення',
        fullDescription: 'Перетворення вашого бізнесу на автоматизовану машину та випередження конкурентів за допомогою інтелектуальних рішень.',
        image: '/assets/images/picture-for-services-2.webp',
        features: [
            'Автоматизація бізнес-процесів',
            'ШІ інтеграція',
            'CRM системи',
            'Аналітика та звіти',
            'API інтеграції'
        ],
        technologies: ['Python', 'AI/ML', 'APIs', 'Automation Tools', 'CRM'],
        deliverables: [
            'Автоматизовані процеси',
            'ШІ чат-бот',
            'CRM система',
            'Аналітичний дашборд',
            'Навчання персоналу'
        ],
        timeline: '4-8 тижнів',
        price: {
            currency: 'EUR',
            amount: 5000,
            type: 'starting-from'
        },
        category: 'Automation & AI',
        isActive: true,
        createdAt: new Date('2023-01-01'),
        updatedAt: new Date()
    },
    {
        id: 3,
        slug: 'strategic-partnership',
        title: 'Strategic Partnership',
        shortDescription: 'Довгострокова підтримка',
        fullDescription: 'Забезпечення повного спокою та довгострокового росту завдяки надійній експертній підтримці та захисту ваших цифрових активів.',
        image: '/assets/images/picture-for-section-3.webp',
        features: [
            '24/7 технічна підтримка',
            'Моніторинг системи',
            'Регулярні оновлення',
            'Консультації експертів',
            'Стратегічне планування'
        ],
        technologies: ['Monitoring Tools', 'DevOps', 'Cloud Services', 'Security'],
        deliverables: [
            'Система моніторингу',
            'Регулярні звіти',
            'SLA угода',
            'Експертні консультації',
            'Превентивне обслуговування'
        ],
        timeline: 'Постійно',
        price: {
            currency: 'EUR',
            amount: 1500,
            type: 'monthly'
        },
        category: 'Support & Maintenance',
        isActive: true,
        createdAt: new Date('2023-01-01'),
        updatedAt: new Date()
    }
];

// GET /api/services - Get all services
router.get('/', (req, res) => {
    try {
        const { category, active } = req.query;
        
        let filteredServices = [...servicesData];
        
        // Filter by category
        if (category) {
            filteredServices = filteredServices.filter(
                service => service.category.toLowerCase() === category.toLowerCase()
            );
        }
        
        // Filter by active status
        if (active !== undefined) {
            const isActive = active === 'true';
            filteredServices = filteredServices.filter(
                service => service.isActive === isActive
            );
        }
        
        res.json({
            success: true,
            data: filteredServices,
            total: filteredServices.length
        });
    } catch (error) {
        console.error('❌ Services fetch error:', error);
        res.status(500).json({
            success: false,
            error: 'Помилка завантаження послуг'
        });
    }
});

// GET /api/services/:id - Get service by ID
router.get('/:id', (req, res) => {
    try {
        const { id } = req.params;
        
        // Find by ID or slug
        const service = servicesData.find(
            s => s.id === parseInt(id) || s.slug === id
        );
        
        if (!service) {
            return res.status(404).json({
                success: false,
                error: 'Послугу не знайдено'
            });
        }
        
        res.json({
            success: true,
            data: service
        });
    } catch (error) {
        console.error('❌ Service fetch error:', error);
        res.status(500).json({
            success: false,
            error: 'Помилка завантаження послуги'
        });
    }
});

// GET /api/services/categories - Get all categories
router.get('/meta/categories', (req, res) => {
    try {
        const categories = [...new Set(servicesData.map(service => service.category))];
        
        res.json({
            success: true,
            data: categories
        });
    } catch (error) {
        console.error('❌ Categories fetch error:', error);
        res.status(500).json({
            success: false,
            error: 'Помилка завантаження категорій'
        });
    }
});

module.exports = router;