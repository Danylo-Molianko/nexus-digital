// API Error Handling Utilities
// Цей файл містить функції для обробки помилок API та відображення повідомлень користувачу

/**
 * Показує повідомлення про помилку користувачу
 * @param {string} title - Заголовок помилки
 * @param {string} message - Текст повідомлення
 */
function showErrorMessage(title = 'Помилка', message = 'Щось пішло не так. Спробуйте пізніше.') {
    // Створюємо простий toast без зовнішніх бібліотек
    const toast = document.createElement('div');
    toast.className = 'error-toast';
    toast.innerHTML = `
        <div class="toast-content">
            <strong>${title}</strong>
            <p>${message}</p>
            <button class="toast-close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;
    
    // Додаємо стилі, якщо їх ще немає
    if (!document.querySelector('#toast-styles')) {
        const styles = document.createElement('style');
        styles.id = 'toast-styles';
        styles.textContent = `
            .error-toast {
                position: fixed;
                top: 20px;
                right: 20px;
                background: #ff4757;
                color: white;
                padding: 15px 20px;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
                z-index: 10000;
                max-width: 350px;
                animation: slideIn 0.3s ease;
            }
            
            .toast-content {
                position: relative;
            }
            
            .toast-close {
                position: absolute;
                top: -5px;
                right: -5px;
                background: none;
                border: none;
                color: white;
                font-size: 18px;
                cursor: pointer;
                line-height: 1;
            }
            
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(styles);
    }
    
    document.body.appendChild(toast);
    
    // Автоматично видаляємо через 5 секунд
    setTimeout(() => {
        if (toast.parentElement) {
            toast.remove();
        }
    }, 5000);
}

/**
 * Показує повідомлення про успіх
 * @param {string} title - Заголовок
 * @param {string} message - Текст повідомлення
 */
function showSuccessMessage(title = 'Успіх', message = 'Операція виконана успішно') {
    const toast = document.createElement('div');
    toast.className = 'success-toast';
    toast.innerHTML = `
        <div class="toast-content">
            <strong>${title}</strong>
            <p>${message}</p>
            <button class="toast-close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;
    
    // Додаємо стилі для success toast
    if (!document.querySelector('#success-toast-styles')) {
        const styles = document.createElement('style');
        styles.id = 'success-toast-styles';
        styles.textContent = `
            .success-toast {
                position: fixed;
                top: 20px;
                right: 20px;
                background: #2ed573;
                color: white;
                padding: 15px 20px;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
                z-index: 10000;
                max-width: 350px;
                animation: slideIn 0.3s ease;
            }
        `;
        document.head.appendChild(styles);
    }
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        if (toast.parentElement) {
            toast.remove();
        }
    }, 5000);
}

/**
 * Універсальна функція для обробки API запитів з обробкою помилок
 * @param {Function} apiCall - Функція API виклику
 * @param {string} errorTitle - Заголовок помилки
 * @param {string} errorMessage - Повідомлення про помилку
 * @returns {Promise} - Результат API виклику або null при помилці
 */
async function handleApiCall(apiCall, errorTitle = 'Помилка API', errorMessage = 'Не вдалося завантажити дані') {
    try {
        const result = await apiCall();
        return result;
    } catch (error) {
        console.error('API Error:', error);
        
        // Визначаємо тип помилки
        let userMessage = errorMessage;
        if (error.response) {
            // Помилка відповіді сервера
            const status = error.response.status;
            switch (status) {
                case 400:
                    userMessage = 'Некоректні дані запиту';
                    break;
                case 401:
                    userMessage = 'Необхідна авторизація';
                    break;
                case 403:
                    userMessage = 'Доступ заборонено';
                    break;
                case 404:
                    userMessage = 'Ресурс не знайдено';
                    break;
                case 500:
                    userMessage = 'Помилка сервера. Спробуйте пізніше';
                    break;
                default:
                    userMessage = `Помилка сервера (${status})`;
            }
        } else if (error.request) {
            // Помилка мережі
            userMessage = 'Помилка з\'єднання. Перевірте інтернет-з\'єднання';
        }
        
        showErrorMessage(errorTitle, userMessage);
        return null;
    }
}

// Приклад використання для майбутніх API інтеграцій:
/*
// Функція для отримання відгуків
async function getReviews() {
    return await handleApiCall(
        async () => {
            const response = await fetch('/api/reviews');
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            return response.json();
        },
        'Помилка завантаження',
        'Не вдалося завантажити відгуки'
    );
}

// Функція для надсилання форми
async function submitContactForm(formData) {
    return await handleApiCall(
        async () => {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            return response.json();
        },
        'Помилка надсилання',
        'Не вдалося надіслати повідомлення'
    );
}
*/

export { showErrorMessage, showSuccessMessage, handleApiCall };