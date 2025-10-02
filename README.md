# Nexus Digital - Full-Stack Backend Project

🚀 **Професійний веб-сайт цифрового агентства Nexus Digital з повнофункціональним Node.js/Express backend сервером**

## 📋 Огляд проекту

Цей проект було успішно конвертовано зі статичного HTML/CSS/JS сайту в повноцінний backend проект на Node.js з Express фреймворком. Тепер сайт готовий для розгортання на сервері та підключення баз даних.

### 🎯 Основні можливості

- ✅ **Express.js сервер** з професійною архітектурою
- ✅ **RESTful API** для всіх функцій сайту
- ✅ **MongoDB інтеграція** готова до підключення
- ✅ **Безпека та захист** (Helmet, CORS, Rate Limiting)
- ✅ **Валідація даних** та санітизація вводу
- ✅ **Обробка помилок** та логування
- ✅ **Модульна архітектура** для легкого розширення
- ✅ **SPA підтримка** для frontend фреймворків

## 🛠 Технічний стек

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web фреймворк
- **MongoDB** - NoSQL база даних
- **Mongoose** - MongoDB ODM
- **JWT** - Аутентифікація (готово)
- **Nodemailer** - Email сервіс (готово)

### Security & Middleware
- **Helmet** - Безпека заголовків
- **CORS** - Cross-Origin Resource Sharing
- **Rate Limiting** - Захист від DDoS
- **Validation** - Валідація та санітизація даних
- **Compression** - Стиснення відповідей

### Frontend (Статичні файли)
- **HTML5** - Семантична розмітка
- **CSS3** - Сучасні стилі (Flexbox, Grid, Animations)
- **JavaScript ES6+** - Інтерактивність
- **AOS Library** - Animate On Scroll
- **Responsive Design** - Адаптивність

## 📁 Структура проекту

```
nexus-digital/
├── 📂 config/
│   └── database.js          # Конфігурація MongoDB
├── 📂 middleware/
│   ├── errorHandler.js      # Обробка помилок
│   └── security.js          # Безпека та валідація
├── 📂 routes/
│   ├── contact.js           # API контактної форми
│   └── services.js          # API послуг
├── 📂 utils/
│   └── validation.js        # Утиліти валідації
├── 📂 public/               # Статичні файли
│   ├── index.html           # Головна сторінка
│   ├── about.html           # Про нас
│   ├── services.html        # Послуги
│   ├── cases.html           # Кейси
│   ├── contact.html         # Контакти
│   ├── 📂 assets/           # Медіа файли
│   │   ├── 📂 css/          # Стилі
│   │   ├── 📂 js/           # Скрипти
│   │   ├── 📂 images/       # Зображення
│   │   └── 📂 videos/       # Відео
│   ├── manifest.json        # PWA маніфест
│   ├── sw.js               # Service Worker
│   ├── robots.txt          # SEO robots
│   └── sitemap.xml         # XML карта сайту
├── .env                     # Змінні середовища
├── .env.example            # Приклад змінних
├── package.json            # Залежності проекту
└── server.js               # Головний сервер
```

## 🚀 Швидкий старт

### 1. Встановлення залежностей

```bash
npm install
```

### 2. Налаштування змінних середовища

Скопіюйте `.env.example` в `.env` та налаштуйте:

```bash
copy .env.example .env
```

Відредагуйте `.env` файл:

```env
# Сервер
NODE_ENV=development
PORT=3000
FRONTEND_URL=http://localhost:3000

# База даних
MONGODB_URI=mongodb://localhost:27017/nexus-digital

# JWT
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRE=7d

# Email (Nodemailer)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=noreply@nexus-digital.com
```

### 3. Запуск сервера

#### Режим розробки:
```bash
npm run dev
```

#### Продакшн режим:
```bash
npm start
```

### 4. Перевірка роботи

Відкрийте браузер та перейдіть на:
- **Сайт**: http://localhost:3000
- **API Health Check**: http://localhost:3000/api/health
- **API Documentation**: http://localhost:3000/api

## 📡 API Endpoints

### Загальні
- `GET /api` - Інформація про API
- `GET /api/health` - Перевірка стану сервера

### Контакти
- `POST /api/contact` - Відправка контактної форми

### Послуги
- `GET /api/services` - Список всіх послуг
- `GET /api/services/:id` - Деталі послуги
- `GET /api/services/meta/categories` - Категорії послуг

## 🔧 Налаштування бази даних

### MongoDB (Рекомендовано)

1. **Локальна установка MongoDB**:
   ```bash
   # Windows (з MongoDB Compass)
   # Завантажте з: https://www.mongodb.com/try/download/community
   
   # macOS
   brew install mongodb-community
   
   # Ubuntu
   sudo apt install mongodb
   ```

2. **MongoDB Atlas (Cloud)**:
   - Створіть акаунт на [MongoDB Atlas](https://www.mongodb.com/atlas)
   - Створіть cluster
   - Отримайте connection string
   - Додайте в `.env` файл

3. **Підключення**:
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/nexus-digital
   ```

## 📧 Налаштування Email

### Gmail SMTP:
1. Увімкніть 2-Factor Authentication
2. Створіть App Password
3. Додайте в `.env`:
   ```env
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-16-char-app-password
   ```

### Інші провайдери:
- **SendGrid**, **Mailgun**, **AWS SES** - більш надійні для продакшну

## 🔐 Безпека

Проект включає комплексні заходи безпеки:

- ✅ **Helmet.js** - Захист HTTP заголовків
- ✅ **CORS** - Контроль доступу між доменами  
- ✅ **Rate Limiting** - Захист від DDoS атак
- ✅ **Input Validation** - Валідація всіх вхідних даних
- ✅ **XSS Protection** - Захист від XSS атак
- ✅ **SQL Injection Prevention** - Безпечні запити
- ✅ **Error Handling** - Безпечна обробка помилок

## 🚀 Розгортання

### Heroku:
```bash
# Встановіть Heroku CLI
npm install -g heroku

# Логін та створення застосунку
heroku login
heroku create nexus-digital-app

# Налаштування змінних
heroku config:set NODE_ENV=production
heroku config:set MONGODB_URI=your-mongodb-connection

# Деплой
git push heroku main
```

### DigitalOcean/AWS/VPS:
```bash
# Клонування репозиторію
git clone <your-repo-url>
cd nexus-digital

# Встановлення залежностей
npm install --production

# Запуск з PM2
npm install -g pm2
pm2 start server.js --name "nexus-digital"
pm2 startup
pm2 save
```

## 📊 Моніторинг

Сервер включає:
- 📝 **Логування запитів** (development/production)
- ❌ **Логування помилок** у файли
- 📈 **Health check endpoint** для моніторингу
- 🔍 **Детальна діагностика** в development режимі

## 🤝 Внесок в розробку

1. Fork проекту
2. Створіть feature branch (`git checkout -b feature/amazing-feature`)
3. Commit зміни (`git commit -m 'Add amazing feature'`)
4. Push до branch (`git push origin feature/amazing-feature`)
5. Створіть Pull Request

## 📞 Підтримка

Якщо у вас виникли питання або проблеми:

- 📧 **Email**: [support@nexus-digital.com]
- 💬 **Issues**: Створіть issue в GitHub репозиторії
- 📚 **Документація**: Перевірте файли в папці проекту

## 📄 Ліцензія

Цей проект має [MIT License](LICENSE).

---

**Nexus Digital** - Ваш партнер у цифровій трансформації! 🚀