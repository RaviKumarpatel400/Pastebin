import { query } from '@/lib/database';
import { isPasteValid } from '@/lib/utils';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  try {
    const { id } = params;
    const testNow = request.headers.get('x-test-now-ms');
    
    // Get paste from database
    const result = await query(
      'SELECT * FROM pastes WHERE id = $1',
      [id]
    );

    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: 'Paste not found' },
        { status: 404 }
      );
    }

    const paste = result.rows[0];
    
    // Check if paste is valid
    const valid = isPasteValid(paste, testNow);
    
    if (!valid) {
      // Mark as inactive if expired
      await query(
        'UPDATE pastes SET is_active = false WHERE id = $1',
        [id]
      );
      
      return NextResponse.json(
        { error: 'Paste not available' },
        { status: 404 }
      );
    }

    // Increment view count
    const newViewCount = paste.view_count + 1;
    await query(
      'UPDATE pastes SET view_count = $1 WHERE id = $2',
      [newViewCount, id]
    );

    // Check if we just exceeded max views
    if (paste.max_views && newViewCount >= paste.max_views) {
      await query(
        'UPDATE pastes SET is_active = false WHERE id = $1',
        [id]
      );
    }

    // Prepare response
    const response = {
      content: paste.content,
      remaining_views: paste.max_views ? 
        Math.max(0, paste.max_views - newViewCount) : null,
      expires_at: paste.expires_at
    };

    return NextResponse.json(response, { status: 200 });

  } catch (error) {
    console.error('Get paste error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}