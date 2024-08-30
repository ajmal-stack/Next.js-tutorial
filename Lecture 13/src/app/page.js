// src/pages/index.js

import PublicLayout from './components/PublicLayout';

const HomePage = () => {
  return (
    <div>
      <h2>Welcome to Our Store</h2>
      <p>Browse our latest products below!</p>
    </div>
  );
};

HomePage.getLayout = function getLayout(page) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default HomePage;
