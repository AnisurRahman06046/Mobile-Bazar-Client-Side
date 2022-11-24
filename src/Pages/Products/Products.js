import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";
const Products = () => {
  const products = useLoaderData();
  console.log(products);
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3 ml-8 mt-10 mb-10 p-10">
      {products.map((product) => (
        <ProductCard key={product._id} product={product}></ProductCard>
      ))}
    </div>
  );
};

export default Products;
