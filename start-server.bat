@echo off
echo 🚀 Запуск Nexus Studio в серверному режимі...
echo.

echo 📦 Збірка проекту...
call npm run build
if %errorlevel% neq 0 (
    echo ❌ Помилка збірки!
    pause
    exit /b 1
)

echo.
echo 🌐 Запуск сервера...
echo Сайт буде доступний на: http://localhost:3000
echo.
call npm start

pause