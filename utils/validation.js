// ==========================================
// VALIDATION UTILITIES
// ==========================================

// Валідатор email
const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
};

// Валідатор телефону (українські та міжнародні номери)
const isValidPhone = (phone) => {
    const phoneRegex = /^[\+]?[1-9][\d]{7,14}$/;
    // Очищаємо від пробілів, дефісів та інших символів
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
    return phoneRegex.test(cleanPhone);
};

// Валідатор імені (дозволяємо букви, пробіли, апострофи, дефіси)
const isValidName = (name) => {
    if (!name || typeof name !== 'string') return false;
    const nameRegex = /^[a-zA-ZА-Яа-яёЁІіЇїЄє'\s\-]{2,50}$/;
    return nameRegex.test(name.trim());
};

// Валідатор повідомлення
const isValidMessage = (message) => {
    if (!message || typeof message !== 'string') return false;
    const cleanMessage = message.trim();
    return cleanMessage.length >= 10 && cleanMessage.length <= 1000;
};

// Валідатор компанії (опціональний)
const isValidCompany = (company) => {
    if (!company) return true; // Опціональне поле
    if (typeof company !== 'string') return false;
    const cleanCompany = company.trim();
    return cleanCompany.length >= 2 && cleanCompany.length <= 100;
};

// Комплексна валідація контактної форми
const validateContactForm = (data) => {
    const errors = [];
    const { name, email, phone, company, message } = data;
    
    // Перевірка обов'язкових полів
    if (!name) {
        errors.push({ field: 'name', message: "Ім'я є обов'язковим полем" });
    } else if (!isValidName(name)) {
        errors.push({ field: 'name', message: "Ім'я містить недопустимі символи або занадто коротке/довге" });
    }
    
    if (!email) {
        errors.push({ field: 'email', message: 'Email є обов\'язковим полем' });
    } else if (!isValidEmail(email)) {
        errors.push({ field: 'email', message: 'Неправильний формат email адреси' });
    }
    
    if (!phone) {
        errors.push({ field: 'phone', message: 'Телефон є обов\'язковим полем' });
    } else if (!isValidPhone(phone)) {
        errors.push({ field: 'phone', message: 'Неправильний формат номера телефону' });
    }
    
    if (!message) {
        errors.push({ field: 'message', message: 'Повідомлення є обов\'язковим полем' });
    } else if (!isValidMessage(message)) {
        errors.push({ field: 'message', message: 'Повідомлення має бути від 10 до 1000 символів' });
    }
    
    // Перевірка опціональних полів
    if (company && !isValidCompany(company)) {
        errors.push({ field: 'company', message: 'Назва компанії містить недопустимі символи або занадто довга' });
    }
    
    return {
        isValid: errors.length === 0,
        errors
    };
};

// Валідатор ID (для API параметрів)
const isValidId = (id) => {
    // Перевіряємо чи це число або MongoDB ObjectId
    const numericId = parseInt(id);
    const objectIdRegex = /^[0-9a-fA-F]{24}$/;
    
    return (!isNaN(numericId) && numericId > 0) || objectIdRegex.test(id);
};

// Валідатор slug (для URL)
const isValidSlug = (slug) => {
    if (!slug || typeof slug !== 'string') return false;
    const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
    return slugRegex.test(slug) && slug.length >= 2 && slug.length <= 100;
};

// Валідатор пагінації
const validatePagination = (page, limit, maxLimit = 50) => {
    const parsedPage = parseInt(page) || 1;
    const parsedLimit = parseInt(limit) || 10;
    
    return {
        page: Math.max(1, parsedPage),
        limit: Math.min(maxLimit, Math.max(1, parsedLimit))
    };
};

// Очистка та нормалізація телефону
const normalizePhone = (phone) => {
    if (!phone) return '';
    
    // Видаляємо всі не-цифрові символи крім +
    let cleaned = phone.replace(/[^\d+]/g, '');
    
    // Якщо номер починається з 0, замінюємо на +38
    if (cleaned.startsWith('0')) {
        cleaned = '+38' + cleaned;
    }
    
    // Якщо номер починається з 38, додаємо +
    if (cleaned.startsWith('38') && !cleaned.startsWith('+38')) {
        cleaned = '+' + cleaned;
    }
    
    return cleaned;
};

// Очистка та нормалізація імені
const normalizeName = (name) => {
    if (!name) return '';
    
    return name
        .trim()
        .replace(/\s+/g, ' ') // Множинні пробіли в один
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
};

module.exports = {
    isValidEmail,
    isValidPhone,
    isValidName,
    isValidMessage,
    isValidCompany,
    isValidId,
    isValidSlug,
    validateContactForm,
    validatePagination,
    normalizePhone,
    normalizeName
};