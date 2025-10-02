# 🚀 Інструкції для запуску проекту Nexus Digital

## ⚠️ Передумови

Для запуску проекту потрібно встановити Node.js та npm.

### Встановлення Node.js (Windows)

1. **Завантажте Node.js LTS версію**:
   - Перейдіть на https://nodejs.org/
   - Завантажте LTS версію (рекомендована)
   - Запустіть інсталятор та дотримуйтесь інструкцій

2. **Перевірте встановлення**:
   ```powershell
   node --version
   npm --version
   ```

### Альтернативні способи встановлення

#### Через Windows Package Manager (winget):
```powershell
winget install OpenJS.NodeJS
```

#### Через Chocolatey:
```powershell
choco install nodejs
```

#### Через Scoop:
```powershell
scoop install nodejs
```

## 🏃‍♂️ Швидкий старт

1. **Відкрийте PowerShell як адміністратор**

2. **Перейдіть до папки проекту**:
   ```powershell
   cd "c:\Users\sdank\Desktop\nexus-digital"
   ```

3. **Встановіть залежності**:
   ```powershell
   npm install
   ```

4. **Налаштуйте змінні середовища**:
   ```powershell
   copy .env.example .env
   ```
   
   Відредагуйте `.env` файл в текстовому редакторі та налаштуйте:
   - `MONGODB_URI` - підключення до бази даних
   - `EMAIL_*` - налаштування для email
   - Інші змінні за потребою

5. **Запустіть сервер**:
   ```powershell
   npm start
   ```

6. **Відкрийте браузер**:
   - Перейдіть на http://localhost:3000
   - API: http://localhost:3000/api/health

## 🔧 Режими запуску

### Режим розробки (з автоматичним перезапуском)
```powershell
npm run dev
```

### Продакшн режим
```powershell
npm start
```

## 🐛 Усунення проблем

### Node.js не знайдено
- Перезапустіть PowerShell після встановлення Node.js
- Перевірте PATH змінну середовища
- Перезавантажте комп'ютер

### Помилки при npm install
```powershell
# Очистіть кеш npm
npm cache clean --force

# Видаліть node_modules та package-lock.json
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json

# Перевстановіть
npm install
```

### Порт 3000 зайнятий
Змініть порт в `.env` файлі:
```env
PORT=3001
```

## 📋 Перевірка статусу

Після запуску сервера перевірте:

1. **Головна сторінка**: http://localhost:3000
2. **API Health**: http://localhost:3000/api/health
3. **API Info**: http://localhost:3000/api

Якщо все працює, ви побачите:
- ✅ Веб-сайт завантажується
- ✅ API відповідає JSON
- ✅ В консолі немає помилок

## 🎯 Наступні кроки

1. **Налаштуйте базу даних** (MongoDB)
2. **Налаштуйте email сервіс** (Gmail SMTP/SendGrid)
3. **Протестуйте контактну форму**
4. **Розгорніть на сервері** (Heroku/DigitalOcean)

---

**Потрібна допомога?** Перевірте README.md для детальної документації.

🚀 **Nexus Digital** - готовий до роботи!