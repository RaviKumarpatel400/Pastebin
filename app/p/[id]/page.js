'use client';

import { useEffect, useState } from 'react';
import { useParams, notFound } from 'next/navigation';

export default function ViewPastePage() {
  const { id } = useParams();
  const [paste, setPaste] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchPaste();
  }, [id]);

  const fetchPaste = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/pastes/${id}`);
      
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Paste not found or has expired');
        }
        throw new Error('Failed to load paste');
      }
      
      const data = await response.json();
      setPaste(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading paste...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center">
            <div className="text-5xl mb-4">⚠️</div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Paste Unavailable</h1>
            <p className="text-gray-600 mb-6">{error}</p>
            <a 
              href="/"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Create New Paste
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Paste #{id}</h1>
        <a 
          href="/"
          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors"
        >
          Create New
        </a>
      </div>

      {/* Paste Info */}
      <div className="mb-6 bg-white rounded-xl shadow-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* Views Info */}
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-700 font-medium">Views</p>
            <p className="text-2xl font-bold text-blue-900">
              {paste.remaining_views !== null ? 
                `Used: ${paste.max_views - paste.remaining_views} of ${paste.max_views}` : 
                'Unlimited'}
            </p>
          </div>

          {/* Expiry Info */}
          <div className="p-4 bg-green-50 rounded-lg">
            <p className="text-sm text-green-700 font-medium">Expires</p>
            <p className="text-2xl font-bold text-green-900">
              {paste.expires_at ? 
                new Date(paste.expires_at).toLocaleDateString() : 
                'Never'}
            </p>
          </div>

          {/* Copy URL */}
          <div className="p-4 bg-purple-50 rounded-lg">
            <p className="text-sm text-purple-700 font-medium">Share</p>
            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert('URL copied to clipboard!');
              }}
              className="mt-2 w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
            >
              Copy Link
            </button>
          </div>
        </div>

        {/* Content */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Paste Content
          </label>
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <pre className="whitespace-pre-wrap break-words font-mono text-gray-800">
              {paste.content}
            </pre>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="text-center text-gray-500 text-sm">
        <p>This paste may expire based on time or view limits</p>
      </div>
    </div>
  );
}