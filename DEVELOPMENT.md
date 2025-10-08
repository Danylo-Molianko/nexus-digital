# 🚀 Nexus Digital - Інструкції для розробки

## Швидкий старт

### Розробка (Development)
```bash
npm run dev          # Запуск Vite dev сервера (http://localhost:5173)
npm run dev:server   # Запуск Express сервера з автоперезапуском
npm run dev:full     # Одночасний запуск Vite + Express серверів
```

### Продакшн (Production)
```bash
npm run build        # Збірка проекту
npm start           # Запуск продакшн сервера (http://localhost:3000)
npm run build:start # Збірка + запуск сервера
```

### Швидкі команди

#### Windows PowerShell
```powershell
./restart.ps1        # Перезапуск сервера з новою збіркою
```

#### Windows Batch
```cmd
restart.bat          # Перезапуск сервера з новою збіркою
```

## Порти
- **Розробка (Vite)**: http://localhost:5173
- **Продакшн (Express)**: http://localhost:3000

## Структура проекту
```
nexus-digital/
├── src/             # React компоненти
├── public/          # Статичні файли
├── dist/            # Збірка проекту
├── server.js        # Express сервер
├── vite.config.js   # Конфігурація Vite
└── package.json     # NPM конфігурація
```

## Робочий процес

1. **Під час розробки**: Використовуйте `npm run dev` для hot reload
2. **Для тестування продакшн збірки**: `npm run build:start`
3. **Після змін**: Якщо сайт не оновився, використайте `restart.bat` або `restart.ps1`

## Troubleshooting

### Сайт не оновлюється?
1. Зупиніть всі процеси: `taskkill /F /IM node.exe`
2. Створіть нову збірку: `npm run build`
3. Запустіть сервер: `npm start`

### Порт зайнятий?
```bash
netstat -ano | findstr :3000    # Знайти процес на порту 3000
taskkill /F /PID <PID>          # Вбити процес
```

## Docker
```bash
docker build -t nexus-digital .
docker run -p 3000:3000 nexus-digital
```