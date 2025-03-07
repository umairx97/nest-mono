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
    <div className="flex flex-col justify-center h-full gap-10 p-4">
      <h1 className="heading">User Page</h1>
      <div>
        <h2 className="heading">Create User</h2>
        <div className="flex gap-4">
          <input
            className="input"
            type="text"
            placeholder="Name"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
          />
          <button className="btn" onClick={handleCreateUser}>
            Submit
          </button>
        </div>
      </div>
      <div>
        <h2 className="heading">All Users</h2>
        <ul className="p-4 list-disc">
          {users.length > 0 ? (
            users.map((user) => <li key={user.id}>{user.name}</li>)
          ) : (
            <p>No users found</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default UserPage;
