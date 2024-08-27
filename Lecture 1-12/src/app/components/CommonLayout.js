// src/components/CommonLayout.js
import React from 'react';

const CommonLayout = ({ children }) => {
  return (
    <div className='min-h-screen flex flex-col'>
      {/* Common Header */}
      <header className='bg-gray-800 text-white p-4'>
        <div className='container mx-auto'>
          <h1 className='text-2xl'>My Application</h1>
          <nav>
            <a href='/' className='mr-4'>
              Home
            </a>
            <a href='/about' className='mr-4'>
              About
            </a>
            <a href='/contact'>Contact</a>
          </nav>
        </div>
      </header>

      {/* Main Content with Conditional Layouts */}
      <main className='flex-grow'>{children}</main>

      {/* Common Footer */}
      <footer className='bg-gray-800 text-white p-4 mt-auto'>
        <div className='container mx-auto'>
          <p>&copy; 2024 My Application. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default CommonLayout;
