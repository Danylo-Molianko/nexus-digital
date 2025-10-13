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

# ================== START: ADD DATABASE CA CERTIFICATE ==================

# Copy the database CA certificate into the container's certificate store
COPY db-ca-cert.crt /usr/local/share/ca-certificates/db-ca-cert.crt

# Set correct permissions and update the certificate store
RUN chmod 644 /usr/local/share/ca-certificates/db-ca-cert.crt && update-ca-certificates

# =================== END: ADD DATABASE CA CERTIFICATE ===================

COPY server.js .
# Ми копіюємо вміст теки dist з builder'а у поточну робочу теку (/app)
COPY --from=builder /app/dist/ ./

# Відкриваємо порт 3000
EXPOSE 3000

# Команда для запуску нашого сервера
CMD ["node", "server.js"]