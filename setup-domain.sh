#!/bin/bash

# Скрипт для налаштування домену nexus-studio-innovation.com

echo "🚀 Налаштування домену для Nexus Studio"
echo "========================================"

# Перевіряємо чи встановлений nginx
if ! command -v nginx &> /dev/null; then
    echo "📦 Встановлюємо Nginx..."
    sudo apt update
    sudo apt install -y nginx
fi

# Створюємо папку для SSL сертифікатів
sudo mkdir -p /etc/nginx/ssl
sudo mkdir -p /var/www/nexus-studio

# Копіюємо конфігурацію nginx
echo "⚙️ Налаштовуємо Nginx конфігурацію..."
sudo cp nginx.conf /etc/nginx/sites-available/nexus-studio-innovation.com
sudo ln -sf /etc/nginx/sites-available/nexus-studio-innovation.com /etc/nginx/sites-enabled/

# Видаляємо дефолтну конфігурацію
sudo rm -f /etc/nginx/sites-enabled/default

# Перевіряємо конфігурацію nginx
echo "🔍 Перевіряємо конфігурацію Nginx..."
sudo nginx -t

if [ $? -eq 0 ]; then
    echo "✅ Конфігурація Nginx валідна"
    
    # Перезапускаємо nginx
    echo "🔄 Перезапускаємо Nginx..."
    sudo systemctl restart nginx
    sudo systemctl enable nginx
    
    echo "🎉 Nginx налаштовано успішно!"
else
    echo "❌ Помилка в конфігурації Nginx"
    exit 1
fi

# Інструкції для SSL
echo ""
echo "📋 Наступні кроки для SSL:"
echo "========================="
echo "1. Отримайте SSL сертифікат (Let's Encrypt рекомендується):"
echo "   sudo apt install certbot python3-certbot-nginx"
echo "   sudo certbot --nginx -d nexus-studio-innovation.com -d www.nexus-studio-innovation.com"
echo ""
echo "2. Або завантажте ваші SSL файли до /etc/nginx/ssl/"
echo ""
echo "3. Оновіть nginx.conf з правильними шляхами до сертифікатів"
echo ""

# Перевіряємо статус сервісів
echo "📊 Статус сервісів:"
echo "==================="
echo "Nginx: $(sudo systemctl is-active nginx)"
echo "Node.js app (порт 3001): $(lsof -i :3001 >/dev/null 2>&1 && echo 'Running' || echo 'Stopped')"

echo ""
echo "🌐 Ваш сайт має бути доступний за адресою:"
echo "   https://nexus-studio-innovation.com"
echo ""
echo "📝 Логи Nginx:"
echo "   sudo tail -f /var/log/nginx/error.log"
echo "   sudo tail -f /var/log/nginx/access.log"