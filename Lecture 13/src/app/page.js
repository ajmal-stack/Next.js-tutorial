import React from 'react';

const HomePage = () => {
  return (
    <div>
      {/* Main Content Section */}
      <h1>Welcome to Our Store</h1>
      <p>Browse our latest products below!</p>

      <p>Product 1: A great product that you’ll love.</p>
      <p>Product 2: Another amazing product that’s perfect for you.</p>
      <p>Product 3: This product is a must-have in your collection.</p>
      {/* Add more products here if needed */}

      <p>&copy; {new Date().getFullYear()} Our Store. All rights reserved.</p>
    </div>
  );
};

export default HomePage;
