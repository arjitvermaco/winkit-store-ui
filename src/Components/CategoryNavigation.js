import React from 'react';
import category1 from "../assets/images/products/winkit/atta_rice_dal.png";
import category2 from "../assets/images/products/winkit/baby.png";
import category3 from "../assets/images/products/winkit/bakery_biscuits.png";
import category4 from "../assets/images/products/winkit/chicken_meat.png";
import category5 from "../assets/images/products/winkit/cleaning_essentials.png";
import category6 from "../assets/images/products/winkit/cold_drinks_juices.png";
import category7 from "../assets/images/products/winkit/dairy_bread.png";
import category8 from "../assets/images/products/winkit/fruits_veggies.png";
import category9 from "../assets/images/products/winkit/home_office.png";
import category10 from "../assets/images/products/winkit/masala_oil.png";

export default function CategoryNavigation() {
  return (
    <div className='sm:w-28 md:w-full'>
        <nav>
            <ul className='border border-gray-300 border-t-0'>
                <li>
                    <div className='flex w-28 md:w-full items-center px-4 border-b border-gray-300 '>
                        <img src={category1} className="h-32 md:h-24"/>
                        <h3 className='text-sm font-thin hidden md:block'>Atta, Dal and Rice</h3>
                    </div>
                </li>

                <li>
                    <div className='flex w-28 md:w-full items-center px-4 border-b border-gray-300 '>
                        <img src={category2} className="h-32 md:h-24"/>
                        <h3 className='text-sm font-thin hidden md:block'>Baby Care</h3>
                    </div>
                </li>

                <li>
                    <div className='flex w-28 md:w-full items-center px-4 border-b border-gray-300 '>
                        <img src={category3} className="h-32 md:h-24"/>
                        <h3 className='text-sm font-thin hidden md:block'>Bakery & Biscuits</h3>
                    </div>
                </li>

                <li>
                    <div className='flex w-28 md:w-full items-center px-4 border-b border-gray-300 '>
                        <img src={category4} className="h-32 md:h-24"/>
                        <h3 className='text-sm font-thin hidden md:block'>Chicken and Meat</h3>
                    </div>
                </li>
                <li>
                    <div className='flex w-28 md:w-full items-center px-4 border-b border-gray-300 '>
                        <img src={category5} className="h-32 md:h-24"/>
                        <h3 className='text-sm font-thin hidden md:block'>Cleaning Essentials</h3>
                    </div>
                </li>
                <li>
                    <div className='flex w-28 md:w-full items-center px-4 border-b border-gray-300 '>
                        <img src={category6} className="h-32 md:h-24"/>
                        <h3 className='text-sm font-thin hidden md:block'>Cold Drinks and Juices</h3>
                    </div>
                </li>
            </ul>
        </nav>
    </div>
  )
}
