import React from "react";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/ProductProvider";

const Home = () => {
  const { state: { products, loading, error } } = useProducts();

  let content;

  if (loading) {
    content = <p>Loading</p>
  }

  if (error) {
    content = <p>Sorry, Something went wrong!</p>
  }

  if (!loading && !error && products.length === 0) {
    content = <p>No Products Found!</p>
  }

  if (!loading && !error && products.length) {
    content = products.map(product => <ProductCard key={product.id} product={product} />)
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {content}
    </div>
  );
};

export default Home;
