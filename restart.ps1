# Скрипт для перезапуску сервера з новою збіркою
Write-Host "Зупиняємо сервер..." -ForegroundColor Yellow
taskkill /F /IM node.exe 2>$null

Write-Host "Створюємо нову збірку..." -ForegroundColor Cyan
npm run build

Write-Host "Запускаємо сервер..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-Command", "npm start"

Write-Host "Сервер перезапущено! Відкривайте http://localhost:3001" -ForegroundColor Green