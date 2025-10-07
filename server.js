import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Шлях до "зібраної" папки фронтенду. Vite створює її під назвою 'dist'.
const buildPath = path.join(__dirname, 'dist');

// 1. Обслуговуємо статичні файли (JS, CSS, зображення) з папки 'dist'
app.use(express.static(buildPath));

// 2. Для будь-яких інших запитів (наприклад, /services, /projects)
// віддаємо головний файл index.html. React Router сам розбереться, що показати.
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
