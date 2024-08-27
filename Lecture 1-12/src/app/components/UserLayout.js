// src/components/UserLayout.js

import Link from 'next/link';
import React from 'react';

const UserLayout = ({ children }) => {
  return (
    <div className='flex h-screen'>
      {/* Sidebar */}
      <aside className='w-64 bg-blue-600 text-white flex-shrink-0 p-6'>
        <ul>
          <li className='mb-4 p-2 rounded-md hover:bg-blue-500 transition duration-300 cursor-pointer'>
            Profile
          </li>
          <li className='mb-4 p-2 rounded-md hover:bg-blue-500 transition duration-300 cursor-pointer'>
            My Orders
          </li>
          <li className='mb-4 p-2 rounded-md hover:bg-blue-500 transition duration-300 cursor-pointer'>
            Settings
          </li>
          <Link href=''>
            <li className='mb-4 p-2 rounded-md hover:bg-blue-500 transition duration-300 cursor-pointer'>
              PageWithMultipleLayouts
            </li>
          </Link>
        </ul>
      </aside>
      {/* Main Content */}
      <main className='flex-grow bg-gray-100 text-black p-8'>{children}</main>
    </div>
  );
};

export default UserLayout;
