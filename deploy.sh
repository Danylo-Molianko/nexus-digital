#!/bin/bash

# ==========================================
# NEXUS DIGITAL - DEPLOYMENT SCRIPT
# ==========================================

echo "🚀 Starting Nexus Digital deployment..."

# Зупиняємо існуючий процес
echo "📦 Stopping existing application..."
pm2 stop nexus-digital 2>/dev/null || true

# Оновлюємо код
echo "📥 Pulling latest code..."
git pull origin main

# Встановлюємо залежності
echo "📦 Installing dependencies..."
npm ci --only=production

# Запускаємо з PM2
echo "🚀 Starting application with PM2..."
pm2 start ecosystem.config.js --env production

# Збереження PM2 конфігурації
echo "💾 Saving PM2 configuration..."
pm2 save

echo "✅ Deployment completed!"
echo "📊 Application status:"
pm2 status

echo "🔗 Application should be running on:"
echo "   - http://localhost:8080"
echo "   - Health check: http://localhost:8080/api/health"

echo "📋 Useful commands:"
echo "   - Check logs: pm2 logs nexus-digital"
echo "   - Restart: pm2 restart nexus-digital"
echo "   - Stop: pm2 stop nexus-digital"