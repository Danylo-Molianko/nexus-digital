// ==========================================
// NEXUS DIGITAL - ENHANCED EXPRESS SERVER
// ==========================================

const express = require('express');
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
})();