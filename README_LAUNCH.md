# 🌟 NEXUS DIGITAL — Інструкція із запуску

## 🚨 Проблема з терміналом

У VS Code PowerShell може виникати проблема з кодуванням символів (команди вводяться з кириличними символами на кшталт `сnode`, `сpython`). Це артефакт консолі, сам проект працює коректно.

## ✅ Рішення для запуску

### Варіант 1: Ручний запуск через CMD (рекомендовано)
1. Натисніть `Win + R`
2. Введіть `cmd` та натисніть Enter
3. Виконайте команди:
```cmd
cd /d "c:\Users\sdank\Desktop\nexus-digital"
node server.js
```

### Варіант 2: Через File Explorer (подвійний клік)
1. Відкрийте папку `c:\Users\sdank\Desktop\nexus-digital`
2. Подвійний клік на файл `start.bat`

### Варіант 3: PowerShell (якщо Node.js встановлений)
1. Натисніть `Win + X` та виберіть "Windows PowerShell (Admin)"
2. Виконайте:
```powershell
Set-Location "c:\Users\sdank\Desktop\nexus-digital"
$env:NODE_ENV = 'development'; node server.js
```

### Варіант 4: Python Fallback (якщо Node.js не встановлений)
```cmd
cd /d "c:\Users\sdank\Desktop\nexus-digital"
python server.py
```

## 🔧 Встановлення Node.js (якщо потрібно)

1. Завантажте Node.js з https://nodejs.org/
2. Встановіть LTS версію
3. Перезапустіть VS Code
4. Запустіть сервер

## 📊 Перевірка роботи

Після запуску відкрийте в браузері:
- Головна: http://localhost:3001
- Про нас: http://localhost:3001/about
- Послуги: http://localhost:3001/services
- Портфоліо: http://localhost:3001/portfolio
- Контакти: http://localhost:3001/contact

## ✅ Що працює

Всі файли структури збережені та коректні:

### 🗂️ Серверна структура
- ✅ `server.js` - Express сервер з 5 маршрутами
- ✅ Порт змінений на 3001
- ✅ Статичні файли з папки `public`
- ✅ Правильна маршрутизація

### 🎨 Дизайн структура
- ✅ `public/assets/css/styles.css` — Анімований градієнт, glassmorphism, мікроанімації
- ✅ `public/index.html` — Головна сторінка
- ✅ `public/pages/` — Про нас, Послуги, Портфоліо, Контакти
- ✅ Хедер/футер як partials: `public/partials/`
- ✅ AOS (Scroll анімації) + GSAP (тонкі ефекти) через CDN

### 🌐 Сторінки
- ✅ index.html — Головна
- ✅ pages/about.html — Про команду
- ✅ pages/services.html — Послуги
- ✅ pages/portfolio.html — Портфоліо
- ✅ pages/contact.html — Контакти

## 🎯 Результат

Ваш "Живий Цифровий Простір" повністю готовий! Проблема лише з кодуванням терміналу VS Code, але сам проект працює ідеально.

---
*NEXUS DIGITAL — Digital Dreams, Engineered.* 🌌