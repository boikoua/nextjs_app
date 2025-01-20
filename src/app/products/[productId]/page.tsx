'use client';
import { useParams } from 'next/navigation';

const ProductPage = () => {
  const { productId } = useParams();

  console.log(productId);

  return <h1>ProductPage {productId}</h1>;
};

export default ProductPage;
