@echo off
title 🚀 NEXUS DIGITAL - ГАРАНТОВАНЕ ПІДКЛЮЧЕННЯ

echo.
echo ╔══════════════════════════════════════════════════════════════╗
echo ║                🚀 NEXUS DIGITAL SERVER                       ║
echo ║              ГАРАНТОВАНЕ ПІДКЛЮЧЕННЯ ТА ОНОВЛЕННЯ            ║
echo ╚══════════════════════════════════════════════════════════════╝
echo.

echo 🔍 Перевіряю системні вимоги...

:: Перевіряємо Node.js
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js не встановлено!
    echo 📥 Завантажте з https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js встановлено
echo.

echo 🧹 Очищаю старі процеси...
taskkill /F /IM node.exe >nul 2>&1
timeout /t 2 /nobreak >nul

echo 📦 Встановлюю залежності...
call npm install --silent

echo 🔨 Створюю збірку...
call npm run build

echo.
echo 🚀 Запускаю розумний сервер...
echo ⚡ Автоматичне оновлення активне
echo 🌐 Сайт: http://localhost:3001
echo 🛑 Для зупинки закрийте це вікно
echo.

:: Запускаємо розумний сервер
node smart-server.js

echo.
echo 🛑 Сервер зупинено
pause