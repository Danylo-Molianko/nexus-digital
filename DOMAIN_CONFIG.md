# 🌐 Конфігурація Домену - nexus-studio-innovation.com

## ✅ Основна Інформація

**Продакшн домен**: `nexus-studio-innovation.com`  
**WWW версія**: `www.nexus-studio-innovation.com`  
**Локальна розробка**: `http://localhost:3001`

---

## 📋 Налаштування Хостингу

### 1. DNS Записи (у вашого реєстратора)

```
Тип   | Ім'я    | Значення           | TTL
------|---------|--------------------|---------
A     | @       | YOUR_SERVER_IP     | 3600
A     | www     | YOUR_SERVER_IP     | 3600
CNAME | www     | nexus-studio-innovation.com | 3600 (альтернатива)
```

**YOUR_SERVER_IP** - IP адреса вашого DigitalOcean droplet

---

## 🔧 Конфігураційні Файли

### `.env` (Головний файл середовища)

```env
# Сервер
PORT=3001
HOST=0.0.0.0
NODE_ENV=production
DOMAIN=nexus-studio-innovation.com
PRODUCTION_DOMAIN=nexus-studio-innovation.com

# CORS
CORS_ORIGIN=https://nexus-studio-innovation.com,https://www.nexus-studio-innovation.com,http://localhost:3001
```

### `server.js` (Express Server)

```javascript
// CORS вже налаштований для:
origin: [
    'https://nexus-studio-innovation.com',
    'https://www.nexus-studio-innovation.com',
    'http://localhost:3001', 
    'http://127.0.0.1:3001'
]
```

### `nginx.conf` (Reverse Proxy)

```nginx
server_name nexus-studio-innovation.com www.nexus-studio-innovation.com;
proxy_pass http://nexus-app:3001;
```

### `docker-compose.yml`

```yaml
nexus-app:
  ports:
    - "3001:3001"  # Internal port
nginx:
  ports:
    - "80:80"      # External HTTP port
```

---

## 🚀 Деплой на Сервер

### Крок 1: Підключення до Сервера

```bash
ssh root@YOUR_SERVER_IP
```

### Крок 2: Клонування Репозиторію

```bash
cd /var/www
git clone https://github.com/Danylo-Molianko/nexus-digital.git
cd nexus-digital
```

### Крок 3: Налаштування .env

```bash
cp .env.example .env
nano .env  # Встановіть всі змінні
```

### Крок 4: Запуск через Docker

```bash
docker-compose up -d --build
```

### Крок 5: Перевірка

```bash
# Перевірка контейнерів
docker ps

# Перевірка логів
docker logs nexus-app
docker logs nexus-nginx

# Тест з сервера
curl http://localhost:3001/api/health
curl http://localhost:80
```

---

## 🔐 SSL Сертифікат (Let's Encrypt)

### Автоматична установка через Certbot

```bash
# Встановіть Certbot
sudo apt update
sudo apt install certbot python3-certbot-nginx -y

# Отримайте SSL сертифікат
sudo certbot --nginx -d nexus-studio-innovation.com -d www.nexus-studio-innovation.com

# Автоматичне оновлення
sudo certbot renew --dry-run
```

### Оновлений nginx.conf з SSL

Certbot автоматично оновить конфігурацію для HTTPS (порт 443).

---

## 📊 Перевірка Роботи

### Локально (Розробка)

```bash
# Збірка
npm run build

# Запуск сервера
npm start

# Відкрити в браузері
http://localhost:3001
```

### На Продакшн Сервері

```bash
# Перевірити API
curl https://nexus-studio-innovation.com/api/health

# Перевірити сайт
curl https://nexus-studio-innovation.com

# Перевірити в браузері
https://nexus-studio-innovation.com
https://www.nexus-studio-innovation.com
```

---

## 🛠️ Налагодження

### Якщо сайт не відкривається:

1. **Перевірте DNS**:
   ```bash
   nslookup nexus-studio-innovation.com
   ping nexus-studio-innovation.com
   ```

2. **Перевірте Docker контейнери**:
   ```bash
   docker ps
   docker logs nexus-app
   docker logs nexus-nginx
   ```

3. **Перевірте порти на сервері**:
   ```bash
   sudo netstat -tlnp | grep :80
   sudo netstat -tlnp | grep :3001
   ```

4. **Перевірте файрвол**:
   ```bash
   sudo ufw status
   sudo ufw allow 80/tcp
   sudo ufw allow 443/tcp
   ```

---

## 📝 Чек-лист Деплою

- [ ] DNS записи налаштовані (A record для @ та www)
- [ ] Сервер запущений і доступний по SSH
- [ ] Docker та Docker Compose встановлені
- [ ] Репозиторій склоновано на сервер
- [ ] .env файл налаштований з правильними змінними
- [ ] Docker контейнери запущені (`docker-compose up -d`)
- [ ] Nginx проксує на nexus-app:3001
- [ ] API endpoints відповідають (/api/health)
- [ ] Статичні файли віддаються (index.html)
- [ ] SSL сертифікат встановлений (Let's Encrypt)
- [ ] HTTPS працює (https://nexus-studio-innovation.com)
- [ ] WWW версія працює (https://www.nexus-studio-innovation.com)

---

## 🎯 Поточний Статус

✅ **Конфігурація завершена**  
✅ **CORS налаштований для nexus-studio-innovation.com**  
✅ **Nginx готовий до проксування**  
✅ **Docker compose готовий**  
✅ **Environment variables встановлені**  

**Наступний крок**: Деплой на продакшн сервер

---

## 📞 Підтримка

Якщо виникнуть проблеми:
1. Перевірте логи: `docker logs nexus-app -f`
2. Перевірте nginx: `docker logs nexus-nginx -f`
3. Перевірте .env файл на сервері
4. Перевірте DNS записи (може зайняти до 48 годин)

---

**Дата оновлення**: 16 жовтня 2025  
**Домен**: nexus-studio-innovation.com  
**Статус**: ✅ Готово до деплою
