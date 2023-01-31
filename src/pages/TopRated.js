import React from "react";
import ProductCard from "../components/ProductCard";

const TopRated = () => {

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      <ProductCard />
    </div>
  );
};

export default TopRated;
