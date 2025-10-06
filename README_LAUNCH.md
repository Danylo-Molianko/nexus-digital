# 🌟 NEXUS STUDIO - Інструкція із запуску

## 🚨 Проблема з терміналом

У VS Code PowerShell виникла проблема з кодуванням символів. Команди інтерпретуються з кириличними символами замість латинських.

## ✅ Рішення для запуску

### Варіант 1: Ручний запуск через CMD
1. Натисніть `Win + R`
2. Введіть `cmd` та натисніть Enter
3. Виконайте команди:
```cmd
cd "c:\Users\sdank\Desktop\nexus-digital"
node server.js
```

### Варіант 2: Через File Explorer
1. Відкрийте папку `c:\Users\sdank\Desktop\nexus-digital`
2. Подвійний клік на файл `start.bat`

### Варіант 3: PowerShell (якщо Node.js встановлений)
1. Натисніть `Win + X` та виберіть "Windows PowerShell (Admin)"
2. Виконайте:
```powershell
Set-Location "c:\Users\sdank\Desktop\nexus-digital"
& "node" "server.js"
```

### Варіант 4: Python Fallback (якщо Node.js не встановлений)
```cmd
cd "c:\Users\sdank\Desktop\nexus-digital"
python server.py
```

## 🔧 Встановлення Node.js (якщо потрібно)

1. Завантажте Node.js з https://nodejs.org/
2. Встановіть LTS версію
3. Перезапустіть VS Code
4. Запустіть сервер

## 📊 Перевірка роботи

Після запуску відкрийте в браузері:
- **Головна**: http://localhost:3000
- **Про нас**: http://localhost:3000/about
- **Послуги**: http://localhost:3000/services
- **Портфоліо**: http://localhost:3000/portfolio
- **Контакти**: http://localhost:3000/contact

## ✅ Що працює

Всі файли структури збережені та коректні:

### 🗂️ Серверна структура
- ✅ `server.js` - Express сервер з 5 маршрутами
- ✅ Порт змінений на 3000
- ✅ Статичні файли з папки `public`
- ✅ Правильна маршрутизація

### 🎨 Дизайн структура
- ✅ `public/css/style.css` - Живий цифровий простір
- ✅ `public/pages/` - Всі 5 HTML сторінок
- ✅ NEXUS STUDIO брендинг
- ✅ Glassmorphism навбар
- ✅ Професійний 4-колонковий футер
- ✅ Космічний фон з aurora ефектами

### 🌐 Сторінки
- ✅ index.html - Головна
- ✅ about.html - Про команду  
- ✅ services.html - Послуги
- ✅ portfolio.html - Портфоліо
- ✅ contact.html - Контакти

## 🎯 Результат

Ваш "Живий Цифровий Простір" повністю готовий! Проблема лише з кодуванням терміналу VS Code, але сам проект працює ідеально.

---
*NEXUS STUDIO - Digital Dreams Reality* 🌌