# Nexus Digital - Розумний Dev режим для PowerShell

Write-Host "╔══════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║      🚀 Nexus Digital - Smart Dev Mode       ║" -ForegroundColor Cyan  
Write-Host "╚══════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

Write-Host "🔥 Запускаю автоматичне збирання..." -ForegroundColor Yellow
Write-Host "📁 Відстежую зміни в src/" -ForegroundColor Green
Write-Host "🌐 Сервер: http://localhost:3000" -ForegroundColor Blue
Write-Host ""
Write-Host "✨ При зміні файлів - автоматично перебудовую!" -ForegroundColor Magenta
Write-Host "🛑 Для зупинки натисніть Ctrl+C" -ForegroundColor Red
Write-Host ""

# Зупиняємо старі процеси
Write-Host "🧹 Очищаю старі процеси..." -ForegroundColor Gray
taskkill /F /IM node.exe 2>$null

# Запускаємо автобілдер
Write-Host "🔧 Запускаю Auto Builder..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "npm run dev:auto"

# Чекаємо трохи
Start-Sleep -Seconds 3

# Запускаємо сервер  
Write-Host "🌐 Запускаю Express Server..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "npm run dev:server"

Write-Host ""
Write-Host "✅ Все запущено!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Відкриті вікна:" -ForegroundColor Cyan
Write-Host "   • Auto Builder - автоматичне збирання" -ForegroundColor White
Write-Host "   • Express Server - веб-сервер" -ForegroundColor White
Write-Host ""
Write-Host "🌐 Відкриваю сайт..." -ForegroundColor Blue

# Відкриваємо браузер
Start-Process "http://localhost:3000"

Write-Host ""
Write-Host "🎉 Готово! Розробляйте з комфортом!" -ForegroundColor Green
Read-Host "Натисніть Enter щоб закрити це вікно"