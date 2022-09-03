import React from "react";
import ProductCard from "./ProductCard";
import Slider from "react-slick";

export default function HomeProductsRow() {
  return (
    <>
      <div className="flex justify-between max-w-7xl mx-auto my-8">
        <h3 className="text-xl font-bold">Category Name</h3>
        <h4 className="text-winkit-green font-bold">see all</h4>
      </div>
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center space-x-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </>
  );
}
