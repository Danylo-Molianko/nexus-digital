# 🌐 Налаштування домену nexus-studio-innovation.com

## Архітектура

```
Internet → nginx (порт 80/443) → Node.js (порт 3001) → React App
```

## Швидке налаштування

### 1. На сервері виконайте:
```bash
chmod +x setup-domain.sh
./setup-domain.sh
```

### 2. Налаштування SSL (Let's Encrypt)
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d nexus-studio-innovation.com -d www.nexus-studio-innovation.com
```

### 3. Або з Docker Compose
```bash
docker-compose up -d
```

## Конфігурація DNS

Переконайтесь що DNS записи налаштовані:

```
A Record: nexus-studio-innovation.com → [IP вашого сервера]
A Record: www.nexus-studio-innovation.com → [IP вашого сервера]
```

## Файли конфігурації

- `nginx.conf` - Конфігурація Nginx реверс-проксі
- `docker-compose.yml` - Docker оркестрація
- `server.js` - Node.js сервер з підтримкою проксі
- `setup-domain.sh` - Автоматичне налаштування

## Troubleshooting

### Перевірка статусу
```bash
# Nginx
sudo systemctl status nginx
sudo nginx -t

# Node.js app
docker-compose ps
docker-compose logs nexus-app

# Порти
sudo netstat -tlnp | grep :80
sudo netstat -tlnp | grep :443
sudo netstat -tlnp | grep :3001
```

### Логи
```bash
# Nginx логи
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log

# Docker логи
docker-compose logs -f nexus-app
```

### Тестування
```bash
# Локальна перевірка
curl -I http://localhost:3001
curl -I https://nexus-studio-innovation.com

# SSL перевірка
openssl s_client -connect nexus-studio-innovation.com:443
```

## Автоматичний деплой

GitHub Actions автоматично оновить сайт при push до main гілки.

Потрібні GitHub Secrets:
- `SERVER_HOST`
- `SERVER_USERNAME` 
- `SSH_PRIVATE_KEY`
- `SERVER_PORT`

## Моніторинг

### Health Check
```bash
curl -f https://nexus-studio-innovation.com/health || echo "Сайт недоступний"
```

### Uptime моніторинг
Рекомендується налаштувати моніторинг через:
- UptimeRobot
- Pingdom
- StatusCake