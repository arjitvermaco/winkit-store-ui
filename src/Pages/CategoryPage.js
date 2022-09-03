import React from 'react'
import { Outlet } from 'react-router-dom'
import CategoryNavigation from '../Components/CategoryNavigation'

export default function CategoryPage() {
  return (
    <div className='max-w-7xl mx-auto flex mt-12'>
     
        <CategoryNavigation/>
        <Outlet/>
    </div>
  )
}
