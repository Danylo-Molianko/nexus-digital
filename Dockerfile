# ==========================================
# NEXUS DIGITAL - CLEAN DOCKERFILE
# ==========================================

# Використовуємо офіційний Node.js runtime
FROM node:18-alpine

# Встановлюємо робочу директорію
WORKDIR /app

# Копіюємо package files
COPY package*.json ./

# Встановлюємо залежності
RUN npm ci --only=production

# Копіюємо вихідний код
COPY . .

# Створюємо не-root користувача
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Змінюємо користувача
USER nextjs

# Встановлюємо порт середовища для серверу Express
ENV PORT=8080

# Відкриваємо порт
EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:8080/health || exit 1

# Запускаємо додаток
CMD ["npm", "start"]