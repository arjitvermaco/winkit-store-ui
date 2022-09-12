import React from "react";

export default function AddressCard() {
  return (
    <div className="bg-white shadow-sm p-6 font-thin flex align-top space-x-6 border border-gray-200  ">
     <div>
     <p className="rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
        Home
      </p>
     </div>
      <div>
        <h3>405 - Some Apartment</h3>
        <p>Indira Nagar, Lucknow</p>
        <p>226611</p>
        <p>+91-9876543210</p>
      </div>
    </div>
  );
}
