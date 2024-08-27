// src/components/AdminLayout.js
import React from 'react';

const AdminLayout = ({ children }) => {
  return (
    <div className='flex h-screen'>
      {/* Sidebar */}
      <aside className='w-64 bg-gray-800 text-white flex-shrink-0 p-6'>
        <ul>
          <li className='mb-4 p-2 rounded-md hover:bg-gray-700 transition duration-300 cursor-pointer'>
            User Management
          </li>
          <li className='mb-4 p-2 rounded-md hover:bg-gray-700 transition duration-300 cursor-pointer'>
            Reports
          </li>
          <li className='mb-4 p-2 rounded-md hover:bg-gray-700 transition duration-300 cursor-pointer'>
            Settings
          </li>
        </ul>
      </aside>
      {/* Main Content */}
      <main className='flex-grow bg-gray-100 text-black p-8'>{children}</main>
    </div>
  );
};

export default AdminLayout;
