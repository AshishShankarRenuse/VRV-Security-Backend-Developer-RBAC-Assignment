import React, { useEffect, useState } from "react";

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:5000/users", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setUsers(data);
        } else {
          console.error("Failed to fetch users");
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Panel</h1>
      <p className="text-center mb-4">Only accessible to Admins.</p>

      <div className="bg-gray-800 p-4 rounded shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Admin Permissions</h2>
        <ul className="list-disc list-inside">
          <li>View and manage all users</li>
          <li>Assign or modify user roles</li>
          <li>Access system-wide settings</li>
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">User List</h2>

        {loading ? (
          <p>Loading users...</p>
        ) : (
          <table className="table-auto w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b-2 border-gray-700 py-2">ID</th>
                <th className="border-b-2 border-gray-700 py-2">Email</th>
                <th className="border-b-2 border-gray-700 py-2">Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="border-b border-gray-700 py-2">{user.id}</td>
                  <td className="border-b border-gray-700 py-2">{user.email}</td>
                  <td className="border-b border-gray-700 py-2">{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
