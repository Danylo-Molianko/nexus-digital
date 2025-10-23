# 🚀 NEXUS DIGITAL - ГАРАНТОВАНЕ ПІДКЛЮЧЕННЯ СЕРВЕРА
# PowerShell версія з повною діагностикою

param(
    [switch]$Force,
    [switch]$Debug
)

# Налаштування
$ErrorActionPreference = "Continue"
$Host.UI.RawUI.WindowTitle = "🚀 Nexus Digital - Smart Server"

# Функції для кольорового виводу
function Write-ColorText {
    param([string]$Text, [string]$Color = "White")
    Write-Host $Text -ForegroundColor $Color
}

function Write-Banner {
    Clear-Host
    Write-ColorText "╔══════════════════════════════════════════════════════════════╗" Cyan
    Write-ColorText "║                🚀 NEXUS DIGITAL SERVER                       ║" Cyan
    Write-ColorText "║              ГАРАНТОВАНЕ ПІДКЛЮЧЕННЯ ТА ОНОВЛЕННЯ            ║" Cyan
    Write-ColorText "╚══════════════════════════════════════════════════════════════╝" Cyan
    Write-Host ""
}

function Test-Requirements {
    Write-ColorText "🔍 Перевіряю системні вимоги..." Yellow
    
    # Перевіряємо Node.js
    try {
        $nodeVersion = node --version
        Write-ColorText "✅ Node.js встановлено: $nodeVersion" Green
    }
    catch {
        Write-ColorText "❌ Node.js не встановлено!" Red
        Write-ColorText "📥 Завантажте з https://nodejs.org/" Yellow
        Read-Host "Натисніть Enter для виходу"
        exit 1
    }
    
    # Перевіряємо npm
    try {
        $npmVersion = npm --version
        Write-ColorText "✅ npm встановлено: v$npmVersion" Green
    }
    catch {
        Write-ColorText "❌ npm не доступний!" Red
        exit 1
    }
    
    # Перевіряємо файли проекту
    if (!(Test-Path "package.json")) {
        Write-ColorText "❌ package.json не знайдено!" Red
        Write-ColorText "🔍 Переконайтесь що ви в правильній папці" Yellow
        exit 1
    }
    
    if (!(Test-Path "server.js")) {
        Write-ColorText "❌ server.js не знайдено!" Red
        exit 1
    }
    
    Write-ColorText "✅ Всі файли проекту знайдені" Green
    Write-Host ""
}

function Stop-AllNodeProcesses {
    Write-ColorText "🧹 Очищаю старі процеси..." Yellow
    
    try {
        Get-Process node -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue
        Start-Sleep -Seconds 2
        Write-ColorText "✅ Старі процеси очищені" Green
    }
    catch {
        Write-ColorText "ℹ️ Старих процесів не знайдено" Gray
    }
}

function Install-Dependencies {
    Write-ColorText "📦 Встановлюю залежності..." Cyan
    
    try {
        $output = npm install 2>&1
        if ($LASTEXITCODE -eq 0) {
            Write-ColorText "✅ Залежності встановлені" Green
        } else {
            Write-ColorText "⚠️ Попередження при встановленні залежностей" Yellow
            if ($Debug) { Write-Host $output }
        }
    }
    catch {
        Write-ColorText "❌ Помилка встановлення залежностей" Red
        Write-Host $_.Exception.Message
        exit 1
    }
}

function Build-Project {
    Write-ColorText "🔨 Створюю збірку проекту..." Cyan
    
    try {
        $output = npm run build 2>&1
        if ($LASTEXITCODE -eq 0) {
            Write-ColorText "✅ Збірка створена успішно" Green
        } else {
            Write-ColorText "❌ Помилка створення збірки" Red
            Write-Host $output
            exit 1
        }
    }
    catch {
        Write-ColorText "❌ Критична помилка збірки" Red
        Write-Host $_.Exception.Message
        exit 1
    }
}

function Test-ServerConnection {
    Write-ColorText "🔍 Тестую підключення до сервера..." Yellow
    
    Start-Sleep -Seconds 3
    
    try {
    $response = Invoke-WebRequest -Uri "http://localhost:3001" -TimeoutSec 10 -ErrorAction Stop
        if ($response.StatusCode -eq 200) {
            Write-ColorText "✅ Сервер відповідає успішно!" Green
            return $true
        }
    }
    catch {
        Write-ColorText "⚠️ Сервер ще запускається..." Yellow
        return $false
    }
    
    return $false
}

function Start-SmartServer {
    Write-ColorText "🚀 Запускаю розумний сервер..." Green
    Write-Host ""
    Write-ColorText "⚡ Автоматичне оновлення активне" Magenta
    Write-ColorText "🌐 Сайт: http://localhost:3001" Blue
    Write-ColorText "🛑 Ctrl+C для зупинки" Red
    Write-Host ""
    
    try {
        # Запускаємо розумний сервер
        if (Test-Path "smart-server.js") {
            node smart-server.js
        } else {
            Write-ColorText "⚠️ Розумний сервер недоступний, запускаю звичайний..." Yellow
            npm start
        }
    }
    catch {
        Write-ColorText "❌ Помилка запуску сервера" Red
        Write-Host $_.Exception.Message
        
        Write-ColorText "🔄 Спроба резервного запуску..." Yellow
        try {
            npm start
        }
        catch {
            Write-ColorText "💥 Критична помилка запуску" Red
            exit 1
        }
    }
}

function Open-Browser {
    Write-ColorText "🌐 Відкриваю браузер..." Blue
    try {
    Start-Process "http://localhost:3001"
    }
    catch {
        Write-ColorText "ℹ️ Не вдалося автоматично відкрити браузер" Gray
    Write-ColorText "🔗 Відкрийте вручну: http://localhost:3001" Yellow
    }
}

# Головна функція
function Main {
    Write-Banner
    
    try {
        Test-Requirements
        Stop-AllNodeProcesses
        Install-Dependencies
        Build-Project
        
        Write-Host ""
        Write-ColorText "🎯 Все готово для запуску!" Green
        Write-Host ""
        
        # Невелика затримка для читання
        Start-Sleep -Seconds 1
        
        # Відкриваємо браузер
        Open-Browser
        
        # Запускаємо сервер
        Start-SmartServer
        
    }
    catch {
        Write-ColorText "💥 Критична помилка: $($_.Exception.Message)" Red
        Read-Host "Натисніть Enter для виходу"
        exit 1
    }
    finally {
        Write-Host ""
        Write-ColorText "🛑 Сервер зупинено" Yellow
        Read-Host "Натисніть Enter для закриття"
    }
}

# Запуск
Main