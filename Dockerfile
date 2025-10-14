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

# ================== START: CORRECT CERTIFICATE INSTALL ==================

# Install the ca-certificates package required for certificate management on Alpine
RUN apk add --no-cache ca-certificates

# Copy the database CA certificate into the container's certificate store with correct permissions
COPY --chmod=644 db-ca-cert.crt /usr/local/share/ca-certificates/db-ca-cert.crt

# Update the certificate store to recognize the new certificate
RUN update-ca-certificates

# =================== END: CORRECT CERTIFICATE INSTALL ===================

COPY server.js .
# Ми копіюємо вміст теки dist з builder'а у поточну робочу теку (/app)
COPY --from=builder /app/dist/ ./

# Відкриваємо порт 3000
EXPOSE 3000

# Set ownership of all files in /app to the 'node' user
RUN chown -R node:node /app

# Switch to the non-root 'node' user for subsequent commands
USER node

# Команда для запуску нашого сервера
CMD ["node", "server.js"]