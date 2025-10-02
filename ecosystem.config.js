// ==========================================
// PM2 ECOSYSTEM CONFIGURATION FOR DROPLET
// ==========================================

module.exports = {
  apps: [
    {
      name: 'nexus-digital-backend',
      script: './server.js',
      cwd: './',
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      autorestart: true,
      max_restarts: 10,
      env_production: {
        NODE_ENV: 'production',
        PORT: 8080,
      },
    },
  ],
};