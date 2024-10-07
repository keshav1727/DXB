"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import { silk_serif } from "@/fonts/fonts";
import {
  NewCompanyMembershipImage,
  NewEliteCardImage,
  NewPersonalCardImage,
  NewRelocationCardImage,
} from "../../../../public/image";

import { Swiper, SwiperSlide } from "swiper/react";

const Membership = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          // initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2.4,
          slidesToScroll: 2,
          initialSlide: 0,
          arrows: false,
          infinite: false,
          variableWidth: true,
        },
      },
    ],
  };

  const slideData = [
    {
      image: NewCompanyMembershipImage,
      heading: "Corporate",
      text: "We share a common goal: SUCCESS in our endeavors.",
      to: "/membership/corporate-concierge",
    },
    {
      image: NewPersonalCardImage,
      heading: "Personal",
      text: "We'll handle it. Just name it, and consider it done.",
      to: "/membership/personal-concierge",
    },
    {
      image: NewRelocationCardImage,
      heading: "Relocation",
      text: "Get oriented with cultural insights and local expertise.",
      to: "/membership/relocation-services",
    },
    {
      image: NewEliteCardImage,
      heading: "Elite Explorer",
      text: "Get customized travel plans to maximize your entire trip.",
      to: "/membership/elite-explorer",
    },
  ];

  return (
    <div className="landing-page-slider -mx-6 sm:-mx-0">
      <Swiper
        slidesPerView={2.3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[]}
        breakpoints={{
          640: {
            slidesPerView: 2.4,
            // spaceBetween: 20,
          },
          768: {
            slidesPerView: 2.8,
            // spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            // spaceBetween: 50,
          },
        }}
        className="home-mem-slide"
      >
        {slideData.map((card) => (
          <SwiperSlide className="flex h-[unset]" key={card.heading}>
            <div className="px-1.5 sm:px-2 md:px-3 text-center text-black h-full flex ">
              <div className="p-3 bg-white rounded-3xl flex flex-col">
                <div>
                  <Image
                    className="rounded-2xl overflow-hidden"
                    src={card.image}
                    alt={card.heading}
                  />
                </div>
                <div className="flex flex-col grow pt-2 gap-2 -mx-2 sm:-mx-0">
                  <h5
                    className={`${silk_serif.className} text-xl sm:text-3xl font-medium sm:font-semibold text-ellipsis whitespace-nowrap overflow-hidden`}
                  >
                    {card.heading}
                  </h5>
                  <p className="text-[9px] font-light sm:text-base -mx-1 grow sm:-mx-0 px-2">
                    {card.text}
                  </p>
                  <Link
                    href={card.to}
                    className="hover:bg-black duration-300 md:px-4 border md:border-2 border-black justify-center self-center hover:text-white md:w-[unset] px-2 rounded-xl flex items-center md:gap-2 gap-1.5 sm:rounded-2xl text-xs sm:text-base  font-medium "
                  >
                    <span className="py-1.5 sm:py-3 block">Explore More</span>
                    <svg
                      className="md:w-5 w-3"
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      version="1.1"
                      viewBox="0 0 16 16"
                      // height="15px"
                      // width="15px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3.707 13.707l8.293-8.293v3.586c0 0.552 0.448 1 1 1s1-0.448 1-1v-6c0-0.404-0.244-0.769-0.617-0.924-0.124-0.051-0.254-0.076-0.383-0.076v-0.001h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1h3.586l-8.293 8.293c-0.195 0.195-0.293 0.451-0.293 0.707s0.098 0.512 0.293 0.707c0.39 0.391 1.024 0.391 1.414 0z"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Membership;
