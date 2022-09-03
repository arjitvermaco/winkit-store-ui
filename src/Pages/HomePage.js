import React from "react";
import HomeBanner from '../Components/HomeBanner';
import HomeCategories from '../Components/HomeCategories';
import HomeProductsRow from '../Components/HomeProductsRow'
export default function HomePage() {
  return (
    <div>
     
      <HomeBanner/>
      <HomeCategories/>
      <HomeProductsRow />
      <HomeProductsRow />
      <HomeProductsRow />
    </div>
  );
}
