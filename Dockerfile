# === ЕТАП 1: ЗБІРКА ФРОНТЕНДУ (BUILD STAGE) ===
FROM node:20-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install --force
COPY . .
RUN npm run build

# --- FINAL STAGE ---
FROM node:20-alpine

# 1. Create the application directory
WORKDIR /app

# 2. Copy only necessary production files from the 'builder' stage
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server.js ./server.js

# 3. Install ONLY production dependencies
RUN npm install --only=production --force \
 && apk add --no-cache curl

# 4. Set correct permissions now that files are copied
RUN chown -R node:node /app
USER node

# 5. Expose the application port
EXPOSE 3001

# 6. The command to run the application
CMD [ "node", "server.js" ]