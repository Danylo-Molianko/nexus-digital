#!/bin/bash

# ==========================================
# DROPLET SETUP SCRIPT FOR NEXUS DIGITAL
# ==========================================
# Run this script on your DigitalOcean Droplet to set up the environment

set -e

DROPLET_IP="164.90.234.176"
APP_NAME="nexus-digital"
DOMAIN="nexus-digital.com"

echo "🚀 Setting up DigitalOcean Droplet for Nexus Digital"
echo "📡 Droplet IP: $DROPLET_IP"

# Update system
echo "🔄 Updating system packages..."
apt update && apt upgrade -y

# Install essential packages
echo "📦 Installing essential packages..."
apt install -y curl wget git nginx ufw fail2ban

# Install Node.js (LTS version)
echo "📦 Installing Node.js..."
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
apt install -y nodejs

# Verify installations
echo "✅ Verifying installations..."
node --version
npm --version
nginx -v

# Install PM2 globally
echo "📦 Installing PM2 globally..."
npm install -g pm2

# Create application directory
echo "📁 Creating application directory..."
mkdir -p /home/nexususer/nexus-digital
cd /home/nexususer/nexus-digital

# Setup logs directory
mkdir -p logs

# Setup firewall
echo "🔥 Configuring firewall..."
ufw default deny incoming
ufw default allow outgoing
ufw allow ssh
ufw allow 80
ufw allow 443
ufw allow 8080  # For direct Node.js access during setup
ufw --force enable

# Configure fail2ban for SSH protection
echo "🛡️ Configuring fail2ban..."
systemctl enable fail2ban
systemctl start fail2ban

# Setup Nginx
echo "🌐 Setting up Nginx..."
# Remove default site
rm -f /etc/nginx/sites-enabled/default

# Create error page for 502/503/504
mkdir -p /var/www/html
cat > /var/www/html/50x.html << 'EOF'
<!DOCTYPE html>
<html>
<head>
    <title>Service Temporarily Unavailable</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
        h1 { color: #666; }
    </style>
</head>
<body>
    <h1>Service Temporarily Unavailable</h1>
    <p>The server is temporarily unable to service your request. Please try again later.</p>
</body>
</html>
EOF

# Test Nginx configuration
nginx -t

# Enable and start Nginx
systemctl enable nginx
systemctl start nginx

# Setup PM2 startup
echo "🔄 Setting up PM2 startup..."
pm2 startup systemd -u nexususer --hp /home/nexususer

# Create deployment user (optional, for security)
echo "👤 Creating deployment user..."
useradd -m -s /bin/bash deploy || echo "User 'deploy' already exists"
usermod -aG sudo deploy || true

# Set up SSH key directory for deploy user
mkdir -p /home/deploy/.ssh
chown deploy:deploy /home/deploy/.ssh
chmod 700 /home/deploy/.ssh

# Clone repository (you'll need to set up SSH keys or use HTTPS)
echo "📥 Cloning repository..."
if [ ! -d "/home/nexususer/nexus-digital/.git" ]; then
    echo "ℹ️ Manual step required: Clone your repository to /home/nexususer/nexus-digital"
    echo "   Example: git clone https://github.com/Danylo-Molianko/nexus-digital.git /home/nexususer/nexus-digital"
fi

# Set up log rotation
echo "📝 Setting up log rotation..."
cat > /etc/logrotate.d/nexus-digital << 'EOF'
/home/nexususer/nexus-digital/logs/*.log {
    daily
    missingok
    rotate 30
    compress
    delaycompress
    notifempty
    create 0644 nexususer nexususer
    postrotate
        pm2 reload nexus-digital || true
    endscript
}
EOF

# Setup system monitoring (optional)
echo "📊 Installing system monitoring tools..."
apt install -y htop iotop net-tools

# Create deployment info file
cat > /home/nexususer/nexus-digital/DEPLOYMENT_INFO.md << EOF
# Nexus Digital Droplet Deployment Info

## Server Details
- **Server**: nexus-studio-web-app
- **User**: nexususer
- **App Directory**: /home/nexususer/nexus-digital
- **Node.js Port**: 8080
- **Nginx Port**: 80, 443

## Deployment Steps Completed
1. ✅ System packages updated
2. ✅ Node.js and npm installed
3. ✅ PM2 installed globally
4. ✅ Nginx installed and configured
5. ✅ Firewall (UFW) configured
6. ✅ Fail2ban configured for SSH protection
7. ✅ Application directory created
8. ✅ Log rotation configured

## Next Steps
1. Clone your repository to /home/nexususer/nexus-digital
2. Copy nginx.conf to /etc/nginx/sites-available/nexus-digital
3. Enable Nginx site: \`ln -s /etc/nginx/sites-available/nexus-digital /etc/nginx/sites-enabled/\`
4. Create .env file with production settings
5. Run deployment script: \`bash deploy.sh\`
6. Set up SSL certificate with Let's Encrypt (optional)

## Useful Commands
- Check app status: \`pm2 status\`
- View logs: \`pm2 logs nexus-digital\`
- Restart app: \`pm2 restart nexus-digital\`
- Check Nginx: \`systemctl status nginx\`
- Test Nginx config: \`nginx -t\`
- Firewall status: \`ufw status\`

## File Locations
- App: /home/nexususer/nexus-digital
- Nginx config: /etc/nginx/sites-available/nexus-digital
- Logs: /home/nexususer/nexus-digital/logs
- PM2 logs: ~/.pm2/logs
EOF

echo ""
echo "✅ Droplet setup completed!"
echo ""
echo "📋 Summary:"
echo "   ✅ System updated and secured"
echo "   ✅ Node.js $(node --version) installed"
echo "   ✅ PM2 installed"
echo "   ✅ Nginx installed"
echo "   ✅ Firewall configured"
echo "   ✅ Application directory created"
echo ""
echo "🔗 Your Droplet is ready at: http://$DROPLET_IP"
echo ""
echo "📄 Next steps documented in: /home/nexususer/nexus-digital/DEPLOYMENT_INFO.md"
echo ""
echo "🚀 Ready for application deployment!"