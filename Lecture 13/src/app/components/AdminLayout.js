// src/components/layouts/AdminLayout.js
import React from 'react';

const AdminLayout = ({ children }) => {
  return (
    <div>
      <header>Admin Dashboard Header</header>
      <main>{children}</main>
      <footer>Admin Dashboard Footer</footer>
    </div>
  );
};

export default AdminLayout;
