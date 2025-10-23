# 🚀 Nexus Digital - Інструкції для розробки

## Швидкий старт

### Розробка (Development)
```bash
# Docker-only flow: запускайте через Docker Compose
docker compose up -d
```

### Продакшн (Production)
```bash
# Docker-only: збірка/запуск контейнерів
docker compose up -d --build
```

### Швидкі команди

> Локальні npm/скрипти PowerShell/BAT більше не використовуються. Використовуйте Docker Compose.

## Порти
- **Доступ до застосунку (через Nginx)**: http://localhost:80
- **Внутрішній порт Node.js**: http://localhost:3001

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
1. Зупиніть контейнери: `docker compose down`
2. Перезберіть: `docker compose up -d --build`

### Порт зайнятий?
```bash
netstat -ano | findstr :3001    # Знайти процес на порту 3001
taskkill /F /PID <PID>          # Вбити процес
```

## Docker
```bash
docker build -t nexus-digital .
docker run -p 3001:3001 nexus-digital
```