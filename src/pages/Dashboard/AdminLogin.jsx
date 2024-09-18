import React from 'react';

const AdminLogin = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
        <form className="space-y-4">
          <div className="form-group">
            <label htmlFor="admin-id" className="block font-medium text-gray-700">Admin ID:</label>
            <input
              type="text"
              id="admin-id"
              name="admin-id"
              placeholder="Enter Admin ID"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="form-group">
            <label htmlFor="admin-password" className="block font-medium text-gray-700">Password:</label>
            <input
              type="password"
              id="admin-password"
              name="admin-password"
              placeholder="Enter Password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
