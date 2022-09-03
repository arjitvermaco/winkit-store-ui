import React from "react";
import move from "./../assets/images/products/winkit/move.jpg";

export default function ProductCard() {
  return (
    <div className="w-32 md:w-48 shadow-sm border border-gray-100 rounded-md hover:border-winkit-green hover:cursor-pointer ">
      {/* image */}
      {/* product title */}
      {/* price and Add To Cart Button */}
      <img src={move} />
      <h3 className="text-sm p-2">Moov Instant Pain Relieving Spray</h3>
      <div className="flex items-center justify-between p-2">
        <h3 className="text-sm">Rs 252</h3>
        <button className="border border-winkit-green rounded text-winkit-green px-4 py-1">
          Add
        </button>
      </div>
    </div>
  );
}
