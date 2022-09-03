import React from 'react'

export default function BillDetails() {
  return (
    <div className='fixed bottom-0 w-full px-8'>
        <h3 className='font-bold'>Bill Details</h3>
        <div className='text-xs text-gray-600 flex justify-between w-full'>
            <h3>MRP</h3>
            <h3>Rs 1009</h3>
        </div>

        <div className='text-xs text-gray-600 flex justify-between w-full'>
            <h3>Product Discount</h3>
            <h3>Rs 100</h3>
        </div>

        <div className='text-xs text-gray-600 flex justify-between w-full'>
            <h3>Delivery Charges</h3>
            <h3>Rs 0</h3>
        </div>

        <button
        type="button"
        className="inline-flex w-full justify-center my-8 items-center rounded-md border border-transparent bg-winkit-green px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-winkit-yellow focus:ring-offset-2"
      >
        Proceed To Checkout
      </button>

        
    </div>
  )
}
