import chokidar from 'chokidar';
import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔥 Розумний автобілдер запущено!');
console.log('📁 Відстеження файлів у папці src/...');

let isBuilding = false;
let buildQueue = false;

function triggerBuild() {
  if (isBuilding) {
    buildQueue = true;
    return;
  }

  isBuilding = true;
  const timestamp = new Date().toLocaleTimeString();
  
  try {
    console.log(`🚀 [${timestamp}] Починаю збірку...`);
    
    // Створюємо збірку
    execSync('npm run build', { 
      stdio: 'inherit',
      cwd: __dirname 
    });
    
    console.log(`✅ [${timestamp}] Збірка завершена успішно!`);
    console.log('🌐 Оновіть браузер: http://localhost:3000');
    
  } catch (error) {
    console.error(`❌ [${timestamp}] Помилка збірки:`, error.message);
  } finally {
    isBuilding = false;
    
    // Якщо під час збірки були ще зміни
    if (buildQueue) {
      buildQueue = false;
      setTimeout(triggerBuild, 1000);
    }
  }
}

// Відстежуємо файли в src/
const watcher = chokidar.watch('src/**/*', {
  ignored: /node_modules/,
  persistent: true,
  ignoreInitial: true
});

watcher.on('change', (filePath) => {
  console.log(`📝 Зміна в файлі: ${filePath}`);
  triggerBuild();
});

watcher.on('add', (filePath) => {
  console.log(`➕ Новий файл: ${filePath}`);
  triggerBuild();
});

watcher.on('unlink', (filePath) => {
  console.log(`🗑️ Видалено файл: ${filePath}`);
  triggerBuild();
});

// Початкова збірка
triggerBuild();

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Зупиняю автобілдер...');
  watcher.close();
  process.exit(0);
});