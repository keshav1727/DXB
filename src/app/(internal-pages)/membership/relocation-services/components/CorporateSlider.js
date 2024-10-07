"use client";

import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import {
  NewLogisticImage,
  NewRealEstateImage,
  NewSettleingImage,
  NewYogaImage,
} from "../../../../../../public/image";

const CorporateSlider = () => {
  const slideData = [
    { image: NewYogaImage, label: "Health & wellness" },
    { image: NewRealEstateImage, label: "Real estate advisory " },
    { image: NewLogisticImage, label: "Moving & Logistics" },
    { image: NewSettleingImage, label: "Seamless Settling Solution" },
  ];

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2.8,
          slidesToScroll: 2,
          initialSlide: 0,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {slideData.map((card, i) => {
        return (
          <div key={i} className="p-1.5 sm:p-3">
            <div className="card-1 duration-300 relative rounded-2xl overflow-hidden">
              <Image src={card.image} alt={card.label} loading="lazy" />
              <div className="absolute w-full h-full flex inset-0 justify-center items-center bg-black bg-opacity-30">
                <span className="lg:text-3xl md:text-xl sm:text-lg text-base italic text-center inline-block">
                  {card.label}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default CorporateSlider;
