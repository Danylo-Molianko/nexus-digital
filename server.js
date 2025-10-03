// ==========================================
// NEXUS DIGITAL - ENHANCED EXPRESS SERVER
// ==========================================

const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const { connectDB, healthCheck, getPool } = require('./config/db');

const app = express();
app.use(cors());
app.use(express.json());
app.set('trust proxy', 1);

// Перевірка здоров'я
app.get('/api/health', async (_req, res) => {
  try {
    await healthCheck();
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ ok: false, error: e?.message });
  }
});

// Тестовий ендпоінт
app.get('/api/time', async (_req, res) => {
  const pool = getPool();
  const { rows } = await pool.query('select now() as now');
  res.json(rows[0]);
});

// Старт тільки після перевірки БД
(async () => {
  try {
    connectDB();
    await healthCheck();
    const port = Number(process.env.PORT || 8080);
    app.listen(port, () => console.log(`API listening on :${port}`));
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
})());

// Створення простого Express сервера
console.log('🚀 Запуск Nexus Digital сервера...');

// Middleware для статичних файлів
app.use(express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Основний маршрут
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 404 handler
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Error handler
app.use((err, req, res, next) => {
    console.error('Помилка сервера:', err);
    res.status(500).send('Внутрішня помилка сервера');
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`✅ Nexus Digital сервер запущено на порту ${PORT}`);
    console.log(`🌐 Доступно за адресою: http://localhost:${PORT}`);
});