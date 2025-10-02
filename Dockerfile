# ==========================================
# NEXUS DIGITAL - DOCKERFILE
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

# Створюємо папку для логів
RUN mkdir -p logs && chown -R nextjs:nodejs logs

# Змінюємо користувача
USER nextjs

# Відкриваємо порт
EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node healthcheck.js

# Запускаємо додаток
CMD ["npm", "start"]