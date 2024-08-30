// src/components/layouts/PublicLayout.js
import React from 'react';

const PublicLayout = ({ children }) => {
  return (
    <div>
      <header>Public Site Header</header>
      <main>{children}</main>
      <footer>Public Site Footer</footer>
    </div>
  );
};

export default PublicLayout;
