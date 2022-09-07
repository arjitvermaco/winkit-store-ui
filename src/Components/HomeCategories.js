import React from "react";
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
import category11 from "../assets/images/products/winkit/organic_healthy.png";
import category12 from "../assets/images/products/winkit/paan_corner.png";
import category13 from "../assets/images/products/winkit/personal_care.png";
import category14 from "../assets/images/products/winkit/pet_care.png";
import category15 from "../assets/images/products/winkit/pharma_wellness.png";
import category16 from "../assets/images/products/winkit/sauces_spreads.png";
import category17 from "../assets/images/products/winkit/snacks_munchies.png";
import category18 from "../assets/images/products/winkit/sweet_tooth.png";
import category19 from "../assets/images/products/winkit/tea_coffee.png";
import category20 from "../assets/images/products/winkit/breakfast_instant.png";
import {Link} from 'react-router-dom';
export default function HomeCategories() {
  return (
    <div className="max-w-7xl justify-between mx-auto flex flex-wrap align-baseline mt-12">
     <Link to="/category/text"> <img className="w-32" src={category1} /></Link>
     <Link to="/category/text"> <img className="w-32" src={category2} /></Link>
     <Link to="/category/text"> <img className="w-32" src={category3} /></Link>
     <Link to="/category/text"> <img className="w-32" src={category4} /></Link>
     <Link to="/category/text"> <img className="w-32" src={category5} /></Link>
     <Link to="/category/text"> <img className="w-32" src={category6} /></Link>
     <Link to="/category/text"> <img className="w-32" src={category7} /></Link>
     <Link to="/category/text"> <img className="w-32" src={category8} /></Link>
     <Link to="/category/text"> <img className="w-32" src={category9} /></Link>
     <Link to="/category/text"> <img className="w-32" src={category10} /></Link>
     <Link to="/category/text"> <img className="w-32" src={category11} /></Link>
     <Link to="/category/text"> <img className="w-32" src={category12} /></Link>
     <Link to="/category/text"> <img className="w-32" src={category13} /></Link>
     <Link to="/category/text"> <img className="w-32" src={category14} /></Link>
     <Link to="/category/text"> <img className="w-32" src={category15} /></Link>
     <Link to="/category/text"> <img className="w-32" src={category16} /></Link>
     <Link to="/category/text"> <img className="w-32" src={category17} /></Link>
     <Link to="/category/text"> <img className="w-32" src={category18} /></Link>
     <Link to="/category/text"> <img className="w-32" src={category19} /></Link>
     <Link to="/category/text"> <img className="w-32" src={category20} /></Link>
    </div>
  );
}
