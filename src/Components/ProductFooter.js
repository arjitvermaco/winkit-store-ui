import React from 'react'

export default function ProductFooter() {
  return (
    <div className='h-16 fixed w-full bottom-0 z-50 bg-winkit-green flex items-center justify-between px-6'>
        <div>
            <h3>Rs 80</h3>
        </div>
        <div>
            <button className='bg-winkit-yellow px-4 py-2 rounded-md'>Add To Cart</button>
        </div>
    </div>
  )
}
