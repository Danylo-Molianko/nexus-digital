#!/bin/bash

# ==========================================
# NEXUS DIGITAL - DROPLET DEPLOYMENT SCRIPT
# ==========================================

set -e  # Exit on any error

DROPLET_IP="nexus-studio-web-app"
APP_NAME="nexus-digital"
APP_DIR="/home/nexususer/nexus-digital"
NGINX_CONFIG="/etc/nginx/sites-available/nexus-digital"

echo "🚀 Starting Nexus Digital deployment to Droplet..."
echo "📡 Target: $DROPLET_IP"

# Create logs directory if it doesn't exist
echo "� Creating logs directory..."
mkdir -p ./logs

# Check if Node.js and npm are installed
echo "🔍 Checking Node.js installation..."
node --version || { echo "❌ Node.js not installed"; exit 1; }
npm --version || { echo "❌ npm not installed"; exit 1; }

# Check if PM2 is installed globally
if ! command -v pm2 &> /dev/null; then
    echo "� Installing PM2 globally..."
    npm install -g pm2
fi

# Stop existing application if running
echo "⏹️ Stopping existing application..."
pm2 stop $APP_NAME 2>/dev/null || echo "ℹ️ No existing application to stop"

# Install dependencies
echo "📦 Installing production dependencies..."
npm ci --only=production

# Create .env file from .env.example if it doesn't exist
if [ ! -f .env ]; then
    echo "📄 Creating .env file from template..."
    cp .env.example .env
    echo "⚠️ Please update .env file with your configuration"
fi

# Build/prepare static assets if needed
echo "🔨 Preparing application..."

# Start application with PM2
echo "🚀 Starting application with PM2..."
pm2 start ecosystem.config.js --env production

# Save PM2 configuration for auto-restart on reboot
echo "💾 Saving PM2 configuration..."
pm2 save

# Setup PM2 startup script (run once)
echo "🔄 Setting up PM2 startup script..."
pm2 startup systemd -u root --hp /root 2>/dev/null || echo "ℹ️ PM2 startup already configured"

# Display application status
echo "✅ Deployment completed!"
echo ""
echo "📊 Application Status:"
pm2 status

echo ""
echo "🔗 Application URLs:"
echo "   - Server: http://$DROPLET_IP:8080"
echo "   - Health check: http://$DROPLET_IP:8080/api/health"
echo "   - API test: http://$DROPLET_IP:8080/api/contact/test"

echo ""
echo "📋 Useful PM2 Commands:"
echo "   - View logs: pm2 logs $APP_NAME"
echo "   - Restart: pm2 restart $APP_NAME"
echo "   - Stop: pm2 stop $APP_NAME"
echo "   - Monitor: pm2 monit"

echo ""
echo "🔧 Next Steps:"
echo "   1. Setup Nginx reverse proxy: sudo cp nginx.conf $NGINX_CONFIG"
echo "   2. Enable Nginx site: sudo ln -s $NGINX_CONFIG /etc/nginx/sites-enabled/"
echo "   3. Test Nginx config: sudo nginx -t"
echo "   4. Reload Nginx: sudo systemctl reload nginx"
echo "   5. Setup SSL with Let's Encrypt (optional)"

echo ""
echo "🔥 Deployment successful! Your app is running on the Droplet!"