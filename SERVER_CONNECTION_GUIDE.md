# 🚀 ЩО ОБОВ'ЯЗКОВО ПОТРІБНО ДЛЯ ПІДКЛЮЧЕННЯ СЕРВЕРА

## ✅ ГАРАНТОВАНИЙ ПЛАН ПІДКЛЮЧЕННЯ

### 🔧 1. ОСНОВНІ ВИМОГИ (перевірте спочатку):

#### A. Системні вимоги:
- ✅ **Node.js** версія 18+ встановлена
- ✅ **npm** працює
- ✅ Порт **3000** вільний

#### B. Файли проекту:
- ✅ `package.json` існує
- ✅ `server.js` існує  
- ✅ `src/` папка з компонентами
- ✅ `dist/` папка збірки

### 🚀 2. КОМАНДИ ДЛЯ ГАРАНТОВАНОГО ЗАПУСКУ:

#### Варіант A: Простий запуск
```bash
npm run build:start
```

#### Варіант B: Покроковий запуск
```bash
# Крок 1: Очистити процеси
taskkill /F /IM node.exe

# Крок 2: Встановити залежності
npm install

# Крок 3: Створити збірку
npm run build

# Крок 4: Запустити сервер
npm start
```

#### Варіант C: Розумний сервер (рекомендовано)
```bash
npm run server:guaranteed
```

#### Варіант D: Windows автозапуск
```cmd
start-guaranteed.bat
```

```powershell
.\start-guaranteed.ps1
```

### 🔍 3. ДІАГНОСТИКА ПРОБЛЕМ:

#### Якщо сервер не запускається:
```bash
# Перевірити порт
netstat -ano | findstr :3000

# Вбити процеси на порту
taskkill /F /PID <номер_процесу>

# Перевірити Node.js
node --version
npm --version
```

#### Якщо збірка не працює:
```bash
# Видалити стару збірку
Remove-Item -Recurse -Force dist

# Перевірити Vite
npm run build -- --debug

# Переустановити залежності
Remove-Item -Recurse -Force node_modules
npm install
```

#### Якщо браузер не оновлюється:
```bash
# Очистити кеш браузера (Ctrl+F5)
# Або відкрити в приватному режимі
# Або перевірити мережеві заголовки
```

### 🎯 4. ЩО САМЕ ЗАБЕЗПЕЧУЄ ОНОВЛЕННЯ:

#### A. Унікальні хеші файлів:
```javascript
// vite.config.js
entryFileNames: `assets/[name]-[hash]-${Date.now()}.js`
```

#### B. Правильні заголовки кешування:
```javascript
// server.js
res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
```

#### C. Автоматична збірка:
```javascript
// smart-server.js
watcher.on('change', () => restartServer());
```

### 🌐 5. ПЕРЕВІРКА ЧИ ВСЕ ПРАЦЮЄ:

#### A. Перевірити сервер:
- Відкрити: http://localhost:3000
- Має з'явитися сайт Nexus Studio

#### B. Перевірити API:
- Відкрити: http://localhost:3000/api/health
- Має показати JSON з інформацією

#### C. Перевірити оновлення:
1. Змінити файл в `src/`
2. Запустити `npm run build`
3. Оновити браузер (F5)
4. Зміни мають з'явитися

### 🚨 6. КРИТИЧНІ ПОМИЛКИ ТА РІШЕННЯ:

#### "Port 3000 is already in use":
```bash
taskkill /F /IM node.exe
# АБО змінити порт в .env:
# PORT=3001
```

#### "Cannot find module":
```bash
npm install
# АБО видалити node_modules та переустановити
```

#### "Build failed":
```bash
# Перевірити синтаксис у файлах
npm run build -- --debug
```

#### "Server starts but site doesn't load":
```bash
# Перевірити чи існує dist/index.html
ls dist/
# Якщо немає - запустити збірку
npm run build
```

### ⚡ 7. ЕКСПРЕС-ЗАПУСК (одна команда):

#### Windows CMD:
```cmd
start-guaranteed.bat
```

#### PowerShell:
```powershell
.\start-guaranteed.ps1
```

#### Термінал:
```bash
npm run server:guaranteed
```

### 🎉 8. РЕЗУЛЬТАТ:

Після виконання будь-якого з варіантів, ви матимете:

- ✅ **Запущений сервер** на http://localhost:3000
- ✅ **Робочий сайт** Nexus Studio
- ✅ **API endpoints** для моніторингу
- ✅ **Автоматичне оновлення** при змінах
- ✅ **Правильне кешування** ресурсів

---

## 🔥 ШВИДКИЙ СТАРТ (якщо поспішаєте):

```bash
# 1. Відкрийте термінал у папці проекту
# 2. Виконайте одну команду:
npm run build:start

# 3. Відкрийте браузер:
# http://localhost:3000
```

**Готово!** 🚀
