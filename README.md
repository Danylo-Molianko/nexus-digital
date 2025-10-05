# Nexus Digital - Чистий Сервер# Nexus Digital - Full-Stack Backend Project



Мінімальний Express.js сервер для Nexus Digital.🚀 **Професійний веб-сайт цифрового агентства Nexus Digital з повнофункціональним Node.js/Express backend сервером**



## 🚀 Швидкий старт## 📋 Огляд проекту



### Локальний запускЦей проект було успішно конвертовано зі статичного HTML/CSS/JS сайту в повноцінний backend проект на Node.js з Express фреймворком. Тепер сайт готовий для розгортання на сервері та підключення баз даних.



1. **Встановіть Node.js**### 🎯 Основні можливості

   ```bash

   # Завантажте та встановіть Node.js з https://nodejs.org/- ✅ **Express.js сервер** з професійною архітектурою

   # Версія 16+ обов'язкова- ✅ **RESTful API** для всіх функцій сайту

   ```- ✅ **MongoDB інтеграція** готова до підключення

- ✅ **Безпека та захист** (Helmet, CORS, Rate Limiting)

2. **Встановіть залежності**- ✅ **Валідація даних** та санітизація вводу

   ```bash- ✅ **Обробка помилок** та логування

   npm install- ✅ **Модульна архітектура** для легкого розширення

   ```- ✅ **SPA підтримка** для frontend фреймворків



3. **Запустіть сервер**## 🛠 Технічний стек

   ```bash

   npm start### Backend

   # або для розробки- **Node.js** - JavaScript runtime

   npm run dev- **Express.js** - Web фреймворк

   ```- **MongoDB** - NoSQL база даних

- **Mongoose** - MongoDB ODM

4. **Перевірте роботу**- **JWT** - Аутентифікація (готово)

   - Основна сторінка: http://localhost:8080- **Nodemailer** - Email сервіс (готово)

   - Health check: http://localhost:8080/health

   - API статус: http://localhost:8080/api/status### Security & Middleware

- **Helmet** - Безпека заголовків

### Docker запуск- **CORS** - Cross-Origin Resource Sharing

- **Rate Limiting** - Захист від DDoS

```bash- **Validation** - Валідація та санітизація даних

# Збірка образу- **Compression** - Стиснення відповідей

docker build -t nexus-digital .

### Frontend (Статичні файли)

# Запуск контейнера- **HTML5** - Семантична розмітка

docker run -p 8080:8080 nexus-digital- **CSS3** - Сучасні стилі (Flexbox, Grid, Animations)

```- **JavaScript ES6+** - Інтерактивність

- **AOS Library** - Animate On Scroll

## 📁 Структура проекту- **Responsive Design** - Адаптивність



```## 📁 Структура проекту

nexus-digital/

├── public/```

│   └── index.html          # Головна сторінкаnexus-digital/

├── server.js               # Express сервер├── 📂 config/

├── package.json            # NPM конфігурація│   └── database.js          # Конфігурація MongoDB

├── Dockerfile              # Docker конфігурація├── 📂 middleware/

├── .env.example            # Приклад змінних середовища│   ├── errorHandler.js      # Обробка помилок

└── README.md               # Документація│   └── security.js          # Безпека та валідація

```├── 📂 routes/

│   ├── contact.js           # API контактної форми

## 🔧 API Endpoints│   └── services.js          # API послуг

├── 📂 utils/

- `GET /` - Головна сторінка│   └── validation.js        # Утиліти валідації

- `GET /health` - Health check├── 📂 public/               # Статичні файли

- `GET /api/status` - API статус│   ├── index.html           # Головна сторінка

- `GET /*` - 404 для неіснуючих сторінок│   ├── about.html           # Про нас

│   ├── services.html        # Послуги

## 🌐 Production│   ├── cases.html           # Кейси

│   ├── contact.html         # Контакти

Сервер готовий для production deployment:│   ├── 📂 assets/           # Медіа файли

- ✅ Docker підтримка│   │   ├── 📂 css/          # Стилі

- ✅ Health check│   │   ├── 📂 js/           # Скрипти

- ✅ Graceful shutdown│   │   ├── 📂 images/       # Зображення

- ✅ Error handling│   │   └── 📂 videos/       # Відео

- ✅ Static file serving│   ├── manifest.json        # PWA маніфест

- ✅ JSON response API│   ├── sw.js               # Service Worker

│   ├── robots.txt          # SEO robots

## 🛠️ Технології│   └── sitemap.xml         # XML карта сайту

├── .env                     # Змінні середовища

- **Node.js** 16+├── .env.example            # Приклад змінних

- **Express.js** 4.18+├── package.json            # Залежності проекту

- **Docker** готовність└── server.js               # Головний сервер

```

---

## 🚀 Швидкий старт

**Nexus Digital** © 2025
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
- **Сайт**: http://localhost:8080
- **API Health Check**: http://localhost:8080/api/health
- **API Documentation**: http://localhost:8080/api

## 🐳 Docker розгортання

### Збірка Docker image:
```bash
docker build -t nexus-digital .
```

### Запуск контейнера:
```bash
docker run -p 8080:8080 --env-file .env nexus-digital
```

## 🚀 Production розгортання

### DigitalOcean/VPS з PM2:
```bash
# Клонування та setup
git clone <your-repo-url>
cd nexus-digital
npm install --production

# Запуск з PM2
npm run pm2:start

# Або використайте deploy скрипт
chmod +x deploy.sh
./deploy.sh
```

### Heroku:
```bash
# Встановіть Heroku CLI
npm install -g heroku

# Логін та створення застосунку
heroku login
heroku create nexus-digital-app

# Налаштування змінних
heroku config:set NODE_ENV=production
heroku config:set PORT=8080
heroku config:set MONGODB_URI=your-mongodb-connection

# Деплой
git push heroku main
```

## 🔧 Nginx конфігурація

Для підключення з Nginx на порту 8080:

```nginx
server {
    listen 80;
    server_name your-domain.com;
    
    location / {
        proxy_pass http://localhost:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

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