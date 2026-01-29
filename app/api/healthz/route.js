import { query } from '@/lib/database';

export async function GET() {
  try {
    // Try to query database to check connection
    await query('SELECT 1');
    
    return Response.json(
      { ok: true },
      { 
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );
  } catch (error) {
    return Response.json(
      { ok: false, error: 'Database connection failed' },
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );
  }
}