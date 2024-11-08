'use client'

import { useState } from 'react';

export default function Page() {
  const [profile, setProfile] = useState(null); // Initialize as null
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to load the profile
  const loadProfile = () => {
    setLoading(true);
    setError(null); // Reset any previous error messages
    fetch('/profile')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load profile');
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setProfile(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="p-6 max-w-xl mx-auto text-center">
      <h1 className="text-2xl font-bold mb-4">My Profile</h1>

      <button
        onClick={loadProfile}
        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded mb-6"
      >
        {loading ? 'Loading...' : 'Load Profile'}
      </button>
      <hr className="my-4" />

      {/* Display error message if there is one */}
      {error && <p className="text-red-500 mb-4">{error}</p>}

      {/* Display profile data if available */}
      {profile ? (
        <div className="p-4 border rounded bg-black shadow-sm">
          <h2 className="text-lg font-semibold">Username: {profile.username}</h2>
          <p>Email: {profile.email}</p>
          <p>Gender: {profile.gender}</p>
        </div>
      ) : (
        !loading && <p>No profile loaded yet.</p>
      )}
    </div>
  );
}
