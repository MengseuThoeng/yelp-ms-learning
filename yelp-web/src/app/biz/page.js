'use client';

import { useState } from 'react';

export default function CategoryPage() {
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch category using async/await
  const loadCategory = async () => {
    setLoading(true);
    setError(null);
    try {
      // Adjusted fetch URL to match your BFF endpoint
      const response = await fetch('/business/api/v1/business/mengseu');
      if (!response.ok) throw new Error('Failed to load category');
      const data = await response.json();
      console.log(data);
      setCategory(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto text-center">
      <h1 className="text-2xl font-bold mb-4">Category</h1>
      <button 
        onClick={loadCategory} 
        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded mb-6"
      >
        {loading ? 'Loading...' : 'Load Category'}
      </button>
      <hr className="my-4" />

      {error && <p className="text-red-500 mb-4">{error}</p>}

      {/* Display the category */}
      {category ? (
        <div className="p-4 border rounded bg-black shadow-sm">
          <h2 className="text-lg font-semibold">Category Name: {category.name}</h2>
        </div>
      ) : (
        !loading && <p>No category loaded yet.</p>
      )}
    </div>
  );
}
