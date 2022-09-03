import React from 'react'

export default function ProductFooter() {
  return (
    <div className='h-16 text-white fixed bottom-0 bg-winkit-green w-full flex items-center justify-between px-6'>
        <div>
            <h3>Rs 80</h3>
        </div>
        <div>
            <button className='bg-winkit-yellow text-black px-4 py-2 rounded-md '>Add To Cart</button>
        </div>
    </div>
  )
}
