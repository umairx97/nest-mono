import { useState, useEffect } from 'react';
import axios from 'axios';
import { User } from '@nest-mono/shared-types';

const UserPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [newUserName, setNewUserName] = useState('');

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/user');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleCreateUser = async () => {
    try {
      if (newUserName) {
        await axios.post('http://localhost:4000/api/user', {
          name: newUserName,
        });
        setNewUserName('');
        fetchUsers();
      }
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-8 p-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <h1 className="text-4xl font-semibold text-white">User Page</h1>
      <div className="w-full max-w-md p-6 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-700">Create User</h2>
        <div className="flex gap-4">
          <input
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            type="text"
            placeholder="Enter user name"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
          />
          <button
            className="px-6 py-3 font-semibold text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            onClick={handleCreateUser}
          >
            Submit
          </button>
        </div>
      </div>

      <div className="w-full max-w-md p-6 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-700">All Users</h2>
        <ul className="space-y-2">
          {users.length > 0 ? (
            users.map((user) => (
              <li
                key={user.id}
                className="p-3 transition-colors bg-gray-100 rounded-md shadow-sm hover:bg-gray-200"
              >
                {user.name}
              </li>
            ))
          ) : (
            <p className="text-gray-500">No users found</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default UserPage;
