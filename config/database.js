// ==========================================
// POSTGRESQL DATABASE CONNECTION CONFIGURATION
// ==========================================

const { Pool } = require('pg');

class Database {
    constructor() {
        this.pool = null;
        this.isConnectedFlag = false;
    }

    async connect() {
        try {
            // PostgreSQL connection configuration
            const config = {
                host: process.env.DB_HOST,
                port: process.env.DB_PORT,
                user: process.env.DB_USER,
                password: process.env.DB_PASS,
                database: process.env.DB_NAME,
                ssl: {
                    rejectUnauthorized: false // Required for DigitalOcean managed databases
                },
                max: 20, // Maximum number of clients in the pool
                idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
                connectionTimeoutMillis: 2000, // Return an error after 2 seconds if connection could not be established
            };

            // Alternative: use DATABASE_URL if provided
            if (process.env.DATABASE_URL) {
                this.pool = new Pool({
                    connectionString: process.env.DATABASE_URL,
                    ssl: {
                        rejectUnauthorized: false
                    }
                });
            } else {
                this.pool = new Pool(config);
            }

            // Test connection
            const client = await this.pool.connect();
            const result = await client.query('SELECT NOW()');
            client.release();
            
            this.isConnectedFlag = true;
            
            console.log(`
📊 PostgreSQL Database Connected Successfully!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 Database: ${process.env.DB_NAME}
🏠 Host: ${process.env.DB_HOST}:${process.env.DB_PORT}
⚡ Status: Connected
🕒 Server Time: ${result.rows[0].now}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            `);

            // Handle pool events
            this.pool.on('error', (err) => {
                console.error('❌ PostgreSQL pool error:', err);
                this.isConnectedFlag = false;
            });

            this.pool.on('connect', () => {
                console.log('📊 New PostgreSQL client connected');
            });

            this.pool.on('remove', () => {
                console.log('📊 PostgreSQL client removed');
            });

            return this.pool;
        } catch (error) {
            console.error('❌ Database connection failed:', error.message);
            
            // В development режимі продовжуємо роботу без БД
            if (process.env.NODE_ENV === 'development') {
                console.log('⚠️  Running without database in development mode');
                return null;
            }
            
            throw error; // Re-throw in production
        }
    }

    async disconnect() {
        try {
            if (this.pool) {
                await this.pool.end();
                this.isConnectedFlag = false;
                console.log('📊 PostgreSQL database disconnected successfully');
            }
        } catch (error) {
            console.error('❌ Error disconnecting from database:', error);
        }
    }

    isConnected() {
        return this.isConnectedFlag;
    }

    getPool() {
        return this.pool;
    }

    // Helper method to execute queries
    async query(text, params) {
        if (!this.pool) {
            throw new Error('Database not connected');
        }
        
        const client = await this.pool.connect();
        try {
            const result = await client.query(text, params);
            return result;
        } finally {
            client.release();
        }
    }

    // Create tables if they don't exist
    async initializeTables() {
        if (!this.isConnected()) {
            return;
        }

        try {
            // Create contacts table
            await this.query(`
                CREATE TABLE IF NOT EXISTS contacts (
                    id SERIAL PRIMARY KEY,
                    name VARCHAR(255) NOT NULL,
                    email VARCHAR(255) NOT NULL,
                    company VARCHAR(255),
                    message TEXT NOT NULL,
                    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
                )
            `);

            // Create services table (for future use)
            await this.query(`
                CREATE TABLE IF NOT EXISTS services (
                    id SERIAL PRIMARY KEY,
                    title VARCHAR(255) NOT NULL,
                    description TEXT,
                    price DECIMAL(10,2),
                    category VARCHAR(100),
                    active BOOLEAN DEFAULT true,
                    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
                )
            `);

            console.log('📊 Database tables initialized successfully');
        } catch (error) {
            console.error('❌ Error initializing tables:', error);
        }
    }
}

module.exports = new Database();