# === ЕТАП 1: ЗБІРКА ФРОНТЕНДУ (BUILD STAGE) ===
FROM node:20-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# === ЕТАП 2: ЗАПУСК СЕРВЕРА (PRODUCTION STAGE) ===
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --only=production
COPY server.js .
COPY --from=builder /app/dist ./dist

# Відкриваємо порт 3000
EXPOSE 3000

# Команда для запуску нашого сервера
CMD ["node", "server.js"]