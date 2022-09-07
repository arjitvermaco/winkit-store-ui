import React from "react";
import { Link } from "react-router-dom";
import darkfantasy from "../assets/images/products/winkit/dark-fantasy.jpg";

export default function ProductCard() {
  return (
    <Link to={"/product/someproduct"}>
    <div className="w-36 md:w-48 border border-gray-100 rounded-md hover:border-winkit-green hover:shadow-sm hover:cursor-pointer ">
      <img src={darkfantasy} />
      <h3 className="text-sm font-thin p-2">Sunfeast Dark Fantasy Desserts Choconut Dipped Cookies</h3>
        <div className="flex justify-between items-center p-2">
            <h3 className="text-sm font-thin">Rs 53</h3>
            <button className="border border-winkit-green rounded text-winkit-green px-4 py-1">Add</button>
        </div>
    </div>
    </Link>
  );
}
