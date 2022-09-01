import React from "react";
import Slider from "react-slick";
import slider1 from "../assets/images/products/winkit/winkit02.jpg";
import slider2 from "../assets/images/products/winkit/winkit03.jpg";
import slider3 from "../assets/images/products/winkit/winkit04.jpg";
import slider4 from "../assets/images/products/winkit/winkit05.jpeg";

export default function HomeBanner() {
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <Slider
        slidesToShow={3}
        autoplay={true}
        autoplaySpeed={2000}
        nextArrow={<NextArrow />}
        prevArrow={<PreviousArrow />}
        responsive={[
            {
              breakpoint: 480,
              settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true }
            },
            {
              breakpoint: 768,
              settings: { slidesToShow: 2, slidesToScroll: 1, infinite: true }
            }]}
      >
        <img className="h-48 pl-8 pr-4 " src={slider1} />
        <img className="h-48 pl-8 pr-4 " src={slider2} />
        <img className="h-48 pl-8 pr-4" src={slider3} />
        <img className="h-48 pl-8 pr-4" src={slider4} />
      </Slider>
    </div>
  );
}

function NextArrow(props) {
  return (
    <div className="bg-white rounded-full absolute p-2 top-1/2 right-0 z-40">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 "
        onClick={props.onClick}
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </div>
  );
}

function PreviousArrow(props) {
  return (
    <div className="bg-white rounded-full absolute p-2 top-1/2 left-0 z-40">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 rotate-180 "
        onClick={props.onClick}
       
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </div>
  );
}
