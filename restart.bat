@echo off
echo Зупиняємо сервер...
taskkill /F /IM node.exe >nul 2>&1

echo Створюємо нову збірку...
call npm run build

echo Запускаємо сервер...
start cmd /k npm start

echo Сервер перезапущено! Відкривайте http://localhost:3000
pause