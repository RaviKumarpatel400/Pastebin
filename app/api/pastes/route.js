import { query } from '@/lib/database';
import { generateShortId } from '@/lib/utils';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { content, ttl_seconds, max_views } = body;

    // Validation
    if (!content || typeof content !== 'string' || content.trim() === '') {
      return NextResponse.json(
        { error: 'Content is required and must be a non-empty string' },
        { status: 400 }
      );
    }

    if (ttl_seconds && (typeof ttl_seconds !== 'number' || ttl_seconds < 1)) {
      return NextResponse.json(
        { error: 'ttl_seconds must be an integer ≥ 1' },
        { status: 400 }
      );
    }

    if (max_views && (typeof max_views !== 'number' || max_views < 1)) {
      return NextResponse.json(
        { error: 'max_views must be an integer ≥ 1' },
        { status: 400 }
      );
    }

    // Generate ID and calculate expiry
    const id = generateShortId();
    let expires_at = null;

    // ✅ FIX: Keep Date object (do NOT convert to string)
    if (ttl_seconds) {
      expires_at = new Date(Date.now() + ttl_seconds * 1000);
    }

    // Save to database
    await query(
      `INSERT INTO pastes (id, content, expires_at, max_views, view_count, is_active)
       VALUES ($1, $2, $3, $4, 0, true)`,
      [id, content.trim(), expires_at, max_views || null]
    );

    // Build base URL
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL ||
      (process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : 'http://localhost:3000');

    // Return success response
    return NextResponse.json(
      {
        id,
        url: `${baseUrl}/p/${id}`,
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Create paste error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
