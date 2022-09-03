import React from 'react'
import ProductCard from './ProductCard'

export default function HomeProductsRow() {
  return (
    <>
    <div className='max-w-7xl mx-auto flex justify-between items-center mt-12'>
        <h3 className='text-xl font-bold'>Category Name</h3>
        <h4>see all</h4>
    </div>
    <div className='max-w-7xl mx-auto flex flex-wrap justify-center space-x-4'>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
  
    </div>

    </>
  )
}
