import React from "react";
import darkfantasy from "../assets/images/products/winkit/dark-fantasy.jpg";
export default function ProductCardCart() {
  return (
    <div className="h-36 border border-gray-300 flex items-center">
      <img src={darkfantasy} className="h-full" />
      <div>
        <h3>Sunfeast Dark Fantasy Desserts Choconut Dipped Cookies</h3>
        <h4>Rs 54</h4>
        <span className="isolate inline-flex rounded-md shadow-sm">
          <button
            type="button"
            className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          >
            <span className="sr-only">Previous</span>+
          </button>
          <button className="p-2">1</button>
          <button
            type="button"
            className="relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          >
            <span className="sr-only">Next</span>-
          </button>
        </span>
      </div>
    </div>
  );
}
