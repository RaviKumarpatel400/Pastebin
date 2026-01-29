import { Pool } from 'pg';

let pool;

function createPool() {
  return new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
  });
}

// For serverless environments (Vercel)
if (process.env.NODE_ENV === 'production') {
  if (!global.pool) {
    global.pool = createPool();
  }
  pool = global.pool;
} else {
  // Development
  pool = createPool();
}

export async function query(text, params) {
  try {
    const result = await pool.query(text, params);
    return result;
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
}

// Initialize database table
export async function initDB() {
  try {
    await query(`
      CREATE TABLE IF NOT EXISTS pastes (
        id VARCHAR(10) PRIMARY KEY,
        content TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT NOW(),
        expires_at TIMESTAMP,
        max_views INTEGER,
        view_count INTEGER DEFAULT 0,
        is_active BOOLEAN DEFAULT TRUE
      );
    `);
    console.log('Database table initialized');
  } catch (error) {
    console.error('Failed to initialize database:', error);
  }
}