# === ЕТАП 1: ЗБІРКА ФРОНТЕНДУ (BUILD STAGE) ===
FROM node:20-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# === ЕТАП 2: ЗАПУСК СЕРВЕРА (PRODUCTION STAGE) ===
FROM node:20-alpine
WORKDIR /app                          # <--- ВСТАНОВЛЮЄМО РОБОЧУ ТЕКУ
COPY package*.json ./
RUN npm install --only=production
COPY server.js .
# Ми копіюємо вміст теки dist з builder'а у поточну робочу теку (/app)
COPY --from=builder /app/dist/ ./

# Відкриваємо порт 3000
EXPOSE 3000

# Команда для запуску нашого сервера
CMD ["node", "server.js"]