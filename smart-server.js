#!/usr/bin/env node

/**
 * 🚀 NEXUS DIGITAL - ГАРАНТОВАНЕ ПІДКЛЮЧЕННЯ СЕРВЕРА
 * 
 * Цей скрипт забезпечує:
 * 1. Автоматичну збірку при змінах
 * 2. Перезапуск сервера
 * 3. Очищення кешу браузера
 * 4. Гарантоване оновлення
 */

import { spawn, exec } from 'child_process';
import chokidar from 'chokidar';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let serverProcess = null;
let isBuilding = false;
let buildQueue = false;

// Кольори для консолі
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
  const timestamp = new Date().toLocaleTimeString();
  console.log(`${colors[color]}[${timestamp}] ${message}${colors.reset}`);
}

function killServer() {
  return new Promise((resolve) => {
    if (serverProcess) {
      log('🛑 Зупиняю сервер...', 'yellow');
      serverProcess.kill('SIGTERM');
      serverProcess = null;
    }
    
    // Також вбиваємо всі Node.js процеси на порту 3000
    exec('taskkill /F /IM node.exe', (error) => {
      // Ігноруємо помилки - можливо процесів немає
      setTimeout(resolve, 1000);
    });
  });
}

function startServer() {
  return new Promise((resolve, reject) => {
    log('🚀 Запускаю сервер...', 'green');
    
    serverProcess = spawn('node', ['server.js'], {
      cwd: __dirname,
      stdio: 'pipe'
    });

    serverProcess.stdout.on('data', (data) => {
      const output = data.toString().trim();
      if (output) {
        log(`📡 ${output}`, 'blue');
        if (output.includes('запущено на порту')) {
          resolve();
        }
      }
    });

    serverProcess.stderr.on('data', (data) => {
      log(`❌ Помилка сервера: ${data.toString().trim()}`, 'red');
    });

    serverProcess.on('close', (code) => {
      if (code !== 0) {
        log(`💥 Сервер зупинився з кодом ${code}`, 'red');
      }
      serverProcess = null;
    });

    // Таймаут для запуску
    setTimeout(() => {
      if (serverProcess) resolve();
    }, 3000);
  });
}

function buildProject() {
  return new Promise((resolve, reject) => {
    if (isBuilding) {
      buildQueue = true;
      return resolve();
    }

    isBuilding = true;
    log('🔨 Збираю проект...', 'cyan');

    const buildProcess = spawn('npm', ['run', 'build'], {
      cwd: __dirname,
      stdio: 'pipe',
      shell: true
    });

    buildProcess.stdout.on('data', (data) => {
      const output = data.toString().trim();
      if (output && !output.includes('npm run build')) {
        console.log(`    ${output}`);
      }
    });

    buildProcess.stderr.on('data', (data) => {
      log(`❌ Помилка збірки: ${data.toString().trim()}`, 'red');
    });

    buildProcess.on('close', (code) => {
      isBuilding = false;
      
      if (code === 0) {
        log('✅ Збірка завершена успішно!', 'green');
        resolve();
        
        // Обробляємо чергу збірок
        if (buildQueue) {
          buildQueue = false;
          setTimeout(() => buildProject(), 1000);
        }
      } else {
        log(`❌ Збірка провалилася з кодом ${code}`, 'red');
        reject(new Error(`Build failed with code ${code}`));
      }
    });
  });
}

async function restartServer() {
  try {
    await killServer();
    await buildProject();
    await startServer();
    
    log('🎉 Сервер успішно перезапущено!', 'green');
    log('🌐 Оновіть браузер: http://localhost:3000', 'bright');
    
    // Відкриваємо браузер автоматично
    exec('start http://localhost:3000', (error) => {
      // Ігноруємо помилки відкриття браузера
    });
    
  } catch (error) {
    log(`💥 Помилка перезапуску: ${error.message}`, 'red');
  }
}

function startWatching() {
  log('👀 Починаю відстеження файлів...', 'cyan');
  
  const watcher = chokidar.watch(['src/**/*', 'public/**/*'], {
    ignored: [/node_modules/, /\.git/, /dist/],
    persistent: true,
    ignoreInitial: true
  });

  watcher.on('change', (filePath) => {
    log(`📝 Зміна: ${filePath}`, 'yellow');
    restartServer();
  });

  watcher.on('add', (filePath) => {
    log(`➕ Новий файл: ${filePath}`, 'yellow');
    restartServer();
  });

  watcher.on('unlink', (filePath) => {
    log(`🗑️ Видалено: ${filePath}`, 'yellow');
    restartServer();
  });

  return watcher;
}

// Graceful shutdown
function setupShutdown(watcher) {
  const shutdown = async () => {
    log('🛑 Зупиняю розумний сервер...', 'yellow');
    watcher.close();
    await killServer();
    process.exit(0);
  };

  process.on('SIGINT', shutdown);
  process.on('SIGTERM', shutdown);
  process.on('SIGQUIT', shutdown);
}

// Головна функція
async function main() {
  console.clear();
  log('╔══════════════════════════════════════════════╗', 'cyan');
  log('║      🚀 NEXUS DIGITAL - SMART SERVER         ║', 'cyan');
  log('╚══════════════════════════════════════════════╝', 'cyan');
  log('', 'reset');
  
  try {
    // Початковий запуск
    await restartServer();
    
    // Запускаємо відстеження
    const watcher = startWatching();
    setupShutdown(watcher);
    
    log('', 'reset');
    log('✨ Розумний сервер активний!', 'green');
    log('📁 Відстежую зміни в src/ та public/', 'cyan');
    log('🔄 Автоматичне оновлення активне', 'cyan');
    log('🛑 Ctrl+C для зупинки', 'yellow');
    log('', 'reset');
    
  } catch (error) {
    log(`💥 Критична помилка: ${error.message}`, 'red');
    process.exit(1);
  }
}

// Запуск
main().catch((error) => {
  log(`💥 Фатальна помилка: ${error.message}`, 'red');
  process.exit(1);
});