'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function Profile() {
  // Initial user data
  const [user, setUser] = useState({
    avatar: '/logo-ems.png', // Default avatar image
    name: 'Jane Doe',
    bio: 'This is a short bio about Jane Doe.',
    joinedAt: 'January 1, 2020',
  });

  // State for editable fields
  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleSave = () => {
    setUser(editData);
    setEditMode(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
          <h1 className="text-3xl font-semibold mb-6 text-center">Profile Page</h1>
          <div className="flex flex-col items-center space-y-4 mb-6">
            <Image src={user.avatar} alt="User Avatar" className="w-24 h-24 rounded-full border-4 border-secondary" width={96} height={96} />
            {editMode ? (
              <input
                type="text"
                name="name"
                value={editData.name}
                onChange={handleChange}
                className="border p-2 rounded w-full max-w-sm text-center"
              />
            ) : (
              <h2 className="text-2xl font-bold">{user.name}</h2>
            )}
          </div>
          <div className="mb-6">
            {editMode ? (
              <textarea
                name="bio"
                value={editData.bio}
                onChange={handleChange}
                className="border p-2 rounded w-full h-24 resize-none"
              />
            ) : (
              <p className="text-lg text-center">{user.bio}</p>
            )}
          </div>
          <div className="mb-6 text-center">
            <strong>Joined:</strong> {user.joinedAt}
          </div>
          {editMode ? (
            <div className="flex justify-center space-x-4">
              <button
                onClick={handleSave}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-secondary-dark"
              >
                Save
              </button>
              <button
                onClick={() => setEditMode(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          ) : (
            <div className="flex justify-center">
              <button
                onClick={() => setEditMode(true)}
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-secondary-dark"
              >
                Edit Profile
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
