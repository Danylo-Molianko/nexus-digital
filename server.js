import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import crypto from 'crypto'; // Новий імпорт для генерації "насіння"
import cors from 'cors';
import helmet from 'helmet';

// Налаштування ES Module __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;
const IS_PRODUCTION = process.env.NODE_ENV === 'production';

// --- МІДЛВЕРИ БЕЗПЕКИ ---
app.use(helmet());
app.use(cors({ origin: IS_PRODUCTION ? 'https://nexus-studio-innovation.com' : '*' }));
app.use(express.json());

// --- [НОВИЙ API ENDPOINT] ---
// Мікросервіс "Насіння" для "Гібридного Генеративного Патерну"
app.get('/api/v1/pattern-seed', (req, res) => {
  try {
    // Генерація криптографічно безпечного "насіння" (16 байт)
    const seed = crypto.randomBytes(16).toString('hex');
    console.log(`[SEED] Згенеровано нове "насіння": ${seed}`);
    res.json({ seed: seed });
  } catch (error) {
    console.error('[SEED] Помилка генерації "насіння":', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
// --- [КІНЕЦЬ API ENDPOINT] ---

// --- ОБСЛУГОВУВАННЯ СТАТИЧНИХ ФАЙЛІВ ТА SPA ---
if (IS_PRODUCTION) {
  const distPath = path.join(__dirname, 'dist');
  console.log(`[STATIC] Обслуговування статичних файлів з: ${distPath}`);
  
  app.use(express.static(distPath));

  // Перехоплення всіх інших маршрутів для React Router (SPA fallback)
  app.get('*', (req, res) => {
    // Ігноруємо API-маршрути, щоб вони не повертали index.html
    if (req.path.startsWith('/api/')) {
      return res.status(404).json({ error: 'API route not found' });
    }
    res.sendFile(path.join(distPath, 'index.html'), (err) => {
      if (err) {
        console.error('[SPA] Помилка відправки index.html:', err);
        res.status(500).send(err);
      }
    });
  });
}

// --- ЗАПУСК СЕРВЕРА ---
app.listen(PORT, '0.0.0.0', () => {
  console.log(`\n>>> [ІНДИКАТОР 2] УСПІХ! Сервер слухає на порту ${PORT}`);
  console.log('Nexus Studio Server запущено:');
  if (IS_PRODUCTION) {
    console.log(`  - Продакшн сайт: https://nexus-studio-innovation.com`);
    console.log(`  - Environment: production`);
  } else {
    console.log(`  - Локальна розробка: http://localhost:${PORT}`);
    console.log(`  - Environment: development`);
  }
});