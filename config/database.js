// ==========================================
// DATABASE CONNECTION CONFIGURATION
// ==========================================

const mongoose = require('mongoose');

class Database {
    constructor() {
        this.connection = null;
    }

    async connect() {
        try {
            const options = {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                maxPoolSize: 10,
                serverSelectionTimeoutMS: 5000,
                socketTimeoutMS: 45000,
                bufferCommands: false,
                bufferMaxEntries: 0
            };

            const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/nexus-digital';
            
            this.connection = await mongoose.connect(uri, options);
            
            console.log(`
📊 Database Connected Successfully!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 Database: ${this.connection.connection.name}
🏠 Host: ${this.connection.connection.host}:${this.connection.connection.port}
⚡ Status: ${this.connection.connection.readyState === 1 ? 'Connected' : 'Disconnected'}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            `);

            // Handle connection events
            mongoose.connection.on('error', (err) => {
                console.error('❌ MongoDB connection error:', err);
            });

            mongoose.connection.on('disconnected', () => {
                console.log('📊 MongoDB disconnected');
            });

            mongoose.connection.on('reconnected', () => {
                console.log('📊 MongoDB reconnected');
            });

            return this.connection;
        } catch (error) {
            console.error('❌ Database connection failed:', error.message);
            
            // В development режимі продовжуємо роботу без БД
            if (process.env.NODE_ENV === 'development') {
                console.log('⚠️  Running without database in development mode');
                return null;
            }
            
            process.exit(1);
        }
    }

    async disconnect() {
        try {
            if (this.connection) {
                await mongoose.disconnect();
                console.log('📊 Database disconnected successfully');
            }
        } catch (error) {
            console.error('❌ Error disconnecting from database:', error);
        }
    }

    isConnected() {
        return mongoose.connection.readyState === 1;
    }
}

module.exports = new Database();