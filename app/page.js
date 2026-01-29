'use client';

import { useState } from 'react';

export default function Home() {
  const [content, setContent] = useState('');
  const [ttlSeconds, setTtlSeconds] = useState('');
  const [maxViews, setMaxViews] = useState('');
  const [createdPaste, setCreatedPaste] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setCreatedPaste(null);

    try {
      const payload = {
        content: content.trim(),
      };

      if (ttlSeconds) {
        payload.ttl_seconds = parseInt(ttlSeconds);
      }

      if (maxViews) {
        payload.max_views = parseInt(maxViews);
      }

      const response = await fetch('/api/pastes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create paste');
      }

      setCreatedPaste(data);
      setContent('');
      setTtlSeconds('');
      setMaxViews('');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(createdPaste.url);
    alert('URL copied to clipboard!');
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Pastebin Lite
        </h1>
        <p className="text-gray-600">
          Share text quickly. Set expiry time or view limits. Simple and free.
        </p>
      </header>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column: Form */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-6">Create New Paste</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Content Textarea */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Paste Content *
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Enter your text here..."
                required
                rows="10"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
              />
            </div>

            {/* Options */}
            <div className="space-y-4">
              {/* TTL Options */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expires After (Optional)
                </label>
                <select
                  value={ttlSeconds}
                  onChange={(e) => setTtlSeconds(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Never expire</option>
                  <option value="300">5 minutes</option>
                  <option value="1800">30 minutes</option>
                  <option value="3600">1 hour</option>
                  <option value="86400">1 day</option>
                  <option value="604800">1 week</option>
                </select>
              </div>

              {/* Max Views Options */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Maximum Views (Optional)
                </label>
                <select
                  value={maxViews}
                  onChange={(e) => setMaxViews(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Unlimited views</option>
                  <option value="1">1 view</option>
                  <option value="5">5 views</option>
                  <option value="10">10 views</option>
                  <option value="25">25 views</option>
                  <option value="50">50 views</option>
                </select>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading || !content.trim()}
              className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium rounded-lg transition-colors"
            >
              {loading ? 'Creating...' : 'Create Paste'}
            </button>
          </form>
        </div>

        {/* Right Column: Result */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-6">Your Paste</h2>
          
          {createdPaste ? (
            <div className="space-y-4">
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-700 font-medium">✓ Paste created successfully!</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Share this URL:
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    readOnly
                    value={createdPaste.url}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
                  />
                  <button
                    onClick={copyToClipboard}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors"
                  >
                    Copy
                  </button>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-600 mb-2">Quick actions:</p>
                <div className="flex gap-2">
                  <a
                    href={createdPaste.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 font-medium rounded-lg transition-colors"
                  >
                    View Paste
                  </a>
                  <button
                    onClick={() => {
                      setCreatedPaste(null);
                      setError('');
                    }}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors"
                  >
                    Create Another
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500">
              <div className="mb-4 text-4xl">📋</div>
              <p className="text-lg">Your paste will appear here</p>
              <p className="text-sm mt-2">Create a paste to get a shareable link</p>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600 text-sm">
        <p>
          Pastebin Lite • Text expires based on time or view limits • No account required
        </p>
        <p className="mt-2">
          <a 
            href="https://github.com/yourusername/pastebin-lite" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            View on GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}