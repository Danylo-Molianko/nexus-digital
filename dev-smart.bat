@echo off
title Nexus Digital - Розумний Dev режим

echo ╔══════════════════════════════════════════════╗
echo ║      🚀 Nexus Digital - Smart Dev Mode       ║
echo ╚══════════════════════════════════════════════╝
echo.
echo 🔥 Запускаю автоматичне збирання...
echo 📁 Відстежую зміни в src/
echo 🌐 Сервер: http://localhost:3000
echo.
echo ✨ При зміні файлів - автоматично перебудовую!
echo 🛑 Для зупинки натисніть Ctrl+C
echo.

:: Запускаємо автобілдер та сервер одночасно
start "Auto Builder" cmd /k "npm run dev:auto"
timeout /t 3 /nobreak >nul
start "Express Server" cmd /k "npm run dev:server"

echo ✅ Все запущено!
echo.
echo 📋 Відкриті вікна:
echo    • Auto Builder - автоматичне збирання
echo    • Express Server - веб-сервер
echo.
echo 🌐 Відкрити сайт: http://localhost:3000
echo.
pause