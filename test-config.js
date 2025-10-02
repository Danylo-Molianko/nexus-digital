// ==========================================
// PORT CONFIGURATION TEST
// ==========================================

require('dotenv').config();

console.log('🔧 Nexus Digital - Port Configuration Test');
console.log('==========================================');
console.log(`📡 PORT from .env: ${process.env.PORT}`);
console.log(`🚀 Fallback PORT: 8080`);
console.log(`✅ Final PORT: ${process.env.PORT || 8080}`);
console.log(`🌍 NODE_ENV: ${process.env.NODE_ENV || 'development'}`);
console.log(`🔗 CORS_ORIGIN: ${process.env.CORS_ORIGIN || 'http://localhost:8080'}`);
console.log('==========================================');

if ((process.env.PORT || 8080) == 8080) {
    console.log('✅ Port 8080 configured correctly for DigitalOcean/Nginx!');
} else {
    console.log('⚠️  Warning: Port is not 8080. Nginx may not connect properly.');
}

console.log('\n🎯 Ready for deployment!');