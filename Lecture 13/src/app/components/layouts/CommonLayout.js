import React from 'react';

const CommonLayout = ({ children }) => {
  console.log('Rendering CommonLayout');
  return (
    <div>
      {/* Common Header */}
      <header className='bg-gray-800 text-white p-4'>
        <h1>My Application</h1>
      </header>

      {/* Page Content */}
      <main className='p-4'>{children}</main>

      {/* Common Footer */}
      <footer className='bg-gray-800 text-white p-4 text-center'>
        &copy; 2024 My Application. All rights reserved.
      </footer>
    </div>
  );
};

export default CommonLayout;
