// pages/index.js

import ProductList from '../components/ProductList';

export async function getStaticProps() {
  // Fetch product data from an API or database
  const res = await fetch('https://api.example.com/products');
  const products = await res.json();

  return {
    props: {
      products,
    },
    revalidate: 60, // Optional: Re-generate the page every 60 seconds
  };
}

export default function HomePage({ products }) {
  return (
    <div>
      <h1>Featured Products</h1>
      <ProductList products={products} />
    </div>
  );
}
