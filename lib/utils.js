// Generate short random ID
export function generateShortId() {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// Check if paste is still valid
export function isPasteValid(paste, testNow = null) {
  const now = testNow ? new Date(testNow) : new Date();
  
  // Check if paste exists and is active
  if (!paste || !paste.is_active) {
    return false;
  }
  
  // Check time expiry
  if (paste.expires_at && now > new Date(paste.expires_at)) {
    return false;
  }
  
  // Check view limit
  if (paste.max_views && paste.view_count >= paste.max_views) {
    return false;
  }
  
  return true;
}

// Escape HTML to prevent XSS
export function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}