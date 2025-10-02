// ==========================================
// PM2 ECOSYSTEM CONFIGURATION FOR DROPLET
// ==========================================

module.exports = {
  apps: [
    {
      name: 'nexus-digital',
      script: 'server.js',
      instances: 2, // Use 2 instances for stability on Droplet
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'development',
        PORT: 8080,
        HOST: '0.0.0.0'
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 8080,
        HOST: '0.0.0.0'
      },
      log_file: './logs/combined.log',
      out_file: './logs/out.log',
      error_file: './logs/error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      max_memory_restart: '512M', // Conservative for Droplet
      watch: false,
      ignore_watch: ['node_modules', 'logs', 'public'],
      max_restarts: 5,
      min_uptime: '10s',
      restart_delay: 4000,
      
      // Auto-restart on file changes in production
      watch: process.env.NODE_ENV !== 'production',
      
      // Graceful shutdown
      kill_timeout: 5000,
      listen_timeout: 8000,
      
      // Health monitoring
      health_check_grace_period: 10000,
      
      // Environment-specific overrides
      node_args: process.env.NODE_ENV === 'production' ? '--max-old-space-size=512' : undefined
    }
  ],

  // Deployment configuration for automated deployment
  deploy: {
    production: {
      user: 'nexususer', // deployment user
      host: 'nexus-studio-web-app',
      ref: 'origin/main',
      repo: 'https://github.com/Danylo-Molianko/nexus-digital.git',
      path: '/home/nexususer/nexus-digital',
      'pre-deploy': 'git fetch --all',
      'post-deploy': 'npm install --production && pm2 reload ecosystem.config.js --env production && pm2 save',
      'pre-setup': 'mkdir -p /home/nexususer/nexus-digital/logs',
      env: {
        NODE_ENV: 'production',
        PORT: 8080
      }
    }
  }
};