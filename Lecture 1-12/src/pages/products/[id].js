import { useRouter } from 'next/router';

export async function getStaticPaths() {
  const paths = [
    { params: { id: '1' } },
    { params: { id: '2' } },
    { params: { id: '3' } },
  ];

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = await fetchProductById(params.id);
  return {
    props: {
      product,
    },
  };
}

const ProductPage = ({ product }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Product ID: {id}</h1>
      <p>Product Name: {product.name}</p>
      <p>Product Description: {product.description}</p>
    </div>
  );
};

export default ProductPage;

async function fetchProductById(id) {
  const products = {
    1: { name: 'Product 1', description: 'Description for Product 1' },
    2: { name: 'Product 2', description: 'Description for Product 2' },
    3: { name: 'Product 3', description: 'Description for Product 3' },
  };
  return products[id];
}
