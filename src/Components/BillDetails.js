import React from "react";

export default function BillDetails() {
  return (
    <div className="fixed bottom-16 w-full px-8">
      <h3 className="font-bold">Bill Details</h3>

      <div className="text-xs mt-3 text-gray-500 flex justify-between">
        <h3>MRP</h3>
        <h3>Rs 100</h3>
      </div>
      <div className="text-xs mt-3 text-gray-500 flex justify-between">
        <h3>Product Discount</h3>
        <h3>Rs 10</h3>
      </div>
      <div className="text-xs mt-3 text-gray-500 flex justify-between">
        <h3>Delivery Charges</h3>
        <h3>Rs 0</h3>
      </div>
      <button className="bg-winkit-green mt-8 inline-flex w-full text-white justify-center py-2 rounded-md shadow-md">
        Proceed To Checkout
      </button>
    </div>
  );
}
