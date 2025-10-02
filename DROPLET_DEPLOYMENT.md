# 🚀 Nexus Digital - Droplet Deployment Guide

## 📡 Server Information
- **Server**: `nexus-studio-web-app`
- **User**: `nexususer`
- **Home Directory**: `/home/nexususer`

## 🔧 Quick Setup Commands

### 1. Connect to your Droplet
```bash
ssh nexususer@nexus-studio-web-app
```

### 2. Run the automated setup (first time only)
```bash
# Upload and run the setup script
curl -sSL https://raw.githubusercontent.com/Danylo-Molianko/nexus-digital/main/droplet-setup.sh | bash
```

### 3. Clone your repository
```bash
cd /home/nexususer
git clone https://github.com/Danylo-Molianko/nexus-digital.git nexus-digital
cd nexus-digital
```

### 4. Configure environment
```bash
# Copy your .env file (already configured with Droplet settings)
cp .env.example .env
# Edit if needed: nano .env
```

### 5. Setup Nginx
```bash
# Copy Nginx configuration
sudo cp nginx.conf /etc/nginx/sites-available/nexus-digital

# Enable the site
sudo ln -s /etc/nginx/sites-available/nexus-digital /etc/nginx/sites-enabled/

# Test configuration
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx
```

### 6. Deploy the application
```bash
# Make deploy script executable
chmod +x deploy.sh

# Run deployment
./deploy.sh
```

## 🔗 Access URLs

After deployment, your application will be available at:

- **Direct Node.js**: `http://nexus-studio-web-app:8080`
- **Through Nginx**: `http://nexus-studio-web-app`
- **Health Check**: `http://nexus-studio-web-app/api/health`
- **API Test**: `http://nexus-studio-web-app/api/contact/test`

## 📊 Monitoring Commands

```bash
# Check application status
pm2 status

# View logs
pm2 logs nexus-digital

# Monitor resources
pm2 monit

# Check Nginx status
sudo systemctl status nginx

# Check firewall status
sudo ufw status
```

## 🔄 Update/Redeploy

For future updates:

```bash
cd /home/nexususer/nexus-digital
git pull origin main
./deploy.sh
```

## 🔒 SSL Setup (Optional)

To add HTTPS with Let's Encrypt:

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Get certificate (replace with your domain)
sudo certbot --nginx -d nexus-digital.com -d www.nexus-digital.com

# Auto-renewal is set up automatically
```

## 🛡️ Security Checklist

- ✅ Firewall (UFW) configured
- ✅ Fail2ban installed for SSH protection
- ✅ Only necessary ports open (22, 80, 443, 8080)
- ✅ Application running as non-root process via PM2
- ✅ Nginx security headers configured

## 📞 Troubleshooting

### Application not starting:
```bash
# Check PM2 logs
pm2 logs nexus-digital

# Restart application
pm2 restart nexus-digital
```

### Nginx issues:
```bash
# Check Nginx logs
sudo tail -f /var/log/nginx/error.log

# Test configuration
sudo nginx -t
```

### Database connection issues:
```bash
# Check environment variables
printenv | grep DB_

# Test database connection
node -e "require('./config/database').connect()"
```

## 🎯 Performance Optimization

### For production:
1. Enable Nginx gzip compression ✅ (already configured)
2. Set up static file caching ✅ (already configured)
3. Configure log rotation ✅ (already configured)
4. Monitor with PM2 ✅ (already configured)

## 📈 Next Steps

1. **Domain Setup**: Point your domain to `nexus-studio-web-app`
2. **SSL Certificate**: Set up HTTPS with Let's Encrypt
3. **Monitoring**: Set up external monitoring (UptimeRobot, etc.)
4. **Backups**: Configure automated backups
5. **CDN**: Consider using a CDN for static assets

---

**🔥 Your Nexus Digital application is now running on nexus-studio-web-app server!**