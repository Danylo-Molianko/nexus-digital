@echo off
echo 🌍 Nexus Studio - Продакшн Деплой
echo Основний сайт: https://nexus-studio-innovation.com
echo.

echo 📦 Збірка для продакшн...
call npm run build
if %errorlevel% neq 0 (
    echo ❌ Помилка збірки!
    pause
    exit /b 1
)

echo.
echo 🚀 Запуск локального сервера (тест версія)...
echo.
echo 🌍 Продакшн сайт: https://nexus-studio-innovation.com
echo 🔧 Локальна розробка: http://localhost:3000
echo.
echo ✅ Готово до завантаження на сервер!
echo.
call npm start

pause