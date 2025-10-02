# 🌊 DigitalOcean Deployment Guide

## Розгортання Nexus Digital на DigitalOcean

### 📋 Передумови

1. **DigitalOcean Droplet** з Ubuntu 20.04+ LTS
2. **Node.js 18+** встановлено
3. **PM2** для процес-менеджменту
4. **Nginx** для reverse proxy

### 🚀 Крок за кроком

#### 1. Підготовка сервера

```bash
# Оновлення системи
sudo apt update && sudo apt upgrade -y

# Встановлення Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Встановлення PM2 глобально
sudo npm install -g pm2

# Встановлення Nginx
sudo apt install nginx -y
```

#### 2. Клонування та налаштування проекту

```bash
# Клонування репозиторію
git clone <your-repo-url>
cd nexus-digital

# Встановлення залежностей
npm install --production

# Копіювання та налаштування .env
cp .env.example .env
nano .env
```

#### 3. Налаштування .env для production

```env
NODE_ENV=production
PORT=8080
FRONTEND_URL=https://your-domain.com

# MongoDB (MongoDB Atlas рекомендовано)
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/nexus-digital

# Email (Gmail або SendGrid)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Security
JWT_SECRET=your-super-secure-production-jwt-secret

# Admin
ADMIN_EMAIL=admin@your-domain.com

# CORS
CORS_ORIGIN=https://your-domain.com
```

#### 4. Запуск з PM2

```bash
# Запуск застосунку
npm run pm2:start

# Збереження PM2 конфігурації
pm2 save

# Автозапуск PM2 при перезавантаженні
pm2 startup
# Виконайте команду, яку покаже PM2
```

#### 5. Налаштування Nginx

```bash
# Створення конфігурації сайту
sudo nano /etc/nginx/sites-available/nexus-digital
```

Додайте наступну конфігурацію:

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;

    # Rate limiting
    limit_req_zone $binary_remote_addr zone=api:10m rate=10r/s;
    limit_req_zone $binary_remote_addr zone=contact:10m rate=1r/m;

    # API proxy
    location /api/ {
        limit_req zone=api burst=20 nodelay;
        
        proxy_pass http://localhost:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        
        # CORS headers
        add_header Access-Control-Allow-Origin "https://your-domain.com" always;
        add_header Access-Control-Allow-Methods "GET, POST, OPTIONS" always;
        add_header Access-Control-Allow-Headers "DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range" always;
    }

    # Contact form specific rate limiting
    location /api/contact {
        limit_req zone=contact burst=3 nodelay;
        
        proxy_pass http://localhost:8080;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Static files and main app
    location / {
        proxy_pass http://localhost:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Error pages
    error_page 502 503 504 /50x.html;
    location = /50x.html {
        root /var/www/html;
    }
}
```

#### 6. Активація Nginx конфігурації

```bash
# Активація сайту
sudo ln -s /etc/nginx/sites-available/nexus-digital /etc/nginx/sites-enabled/

# Видалення дефолтного сайту (опціонально)
sudo rm /etc/nginx/sites-enabled/default

# Перевірка конфігурації
sudo nginx -t

# Перезапуск Nginx
sudo systemctl restart nginx
sudo systemctl enable nginx
```

#### 7. SSL сертифікат (Let's Encrypt)

```bash
# Встановлення Certbot
sudo apt install certbot python3-certbot-nginx -y

# Отримання SSL сертифікату
sudo certbot --nginx -d your-domain.com -d www.your-domain.com

# Автоматичне оновлення
sudo crontab -e
# Додайте: 0 12 * * * /usr/bin/certbot renew --quiet
```

### 🔧 Корисні команди

```bash
# Перевірка статусу PM2
pm2 status

# Логи застосунку
pm2 logs nexus-digital

# Перезапуск застосунку
pm2 restart nexus-digital

# Зупинка застосунку
pm2 stop nexus-digital

# Перевірка Nginx
sudo nginx -t
sudo systemctl status nginx

# Логи Nginx
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log

# Моніторинг ресурсів
htop
df -h
free -h
```

### 🔍 Troubleshooting

#### Застосунок не запускається:
```bash
# Перевірте логи
pm2 logs nexus-digital
npm start
```

#### Nginx не може підключитися:
```bash
# Перевірте чи працює порт 8080
sudo netstat -tulpn | grep :8080
curl http://localhost:8080/api/health
```

#### 502 Bad Gateway:
```bash
# Перевірте PM2 процес
pm2 status
pm2 restart nexus-digital

# Перевірте Nginx конфігурацію
sudo nginx -t
```

### 📊 Моніторинг

#### Налаштування моніторингу PM2:
```bash
# PM2 web інтерфейс
pm2 install pm2-server-monit

# Keymetrics (опціонально)
pm2 link <secret> <public>
```

### 🔄 Автоматичне розгортання

Створіть GitHub Actions або webhook для автоматичного деплою:

```bash
# Webhook endpoint (додайте в ваш репозиторій)
curl -X POST https://your-domain.com/webhook \
  -H "Content-Type: application/json" \
  -d '{"ref": "refs/heads/main"}'
```

### 📋 Фінальна перевірка

1. ✅ **Сайт працює**: https://your-domain.com
2. ✅ **API працює**: https://your-domain.com/api/health
3. ✅ **SSL активний**: Зелений замок в браузері
4. ✅ **PM2 запущено**: `pm2 status` показує online
5. ✅ **Nginx працює**: `sudo systemctl status nginx`
6. ✅ **Логи чисті**: Немає помилок в pm2 logs

### 🎉 Готово!

Ваш Nexus Digital сайт тепер працює в production на DigitalOcean з:
- ✅ **Node.js/Express backend на порту 8080**
- ✅ **Nginx reverse proxy**
- ✅ **SSL сертифікат**
- ✅ **PM2 процес-менеджер**
- ✅ **Автоматичний restart**
- ✅ **Логування та моніторинг**