"use client";
import Image from "next/image";
import React from "react";
import { silk_serif } from "@/fonts/fonts";
import {
  NewhomeCarImage,
  NewhomeDivingImage,
  NewhomeJetImage,
  NewhomeYatchImage,
} from "../../../../public/image";

import { Swiper, SwiperSlide } from "swiper/react";

const Experiences = () => {
  const cardsData = [
    {
      img: NewhomeCarImage,
      heading: "Sports Car",
      text: "Name your dream car—Mustang, Ferrari, McLaren, Lamborghini, or Porsche—and it will be delivered promptly, offering high-performance concierge services that save you valuable time by eliminating long waits in the booking process.",
    },
    {
      img: NewhomeJetImage,
      heading: "Private Jet",
      text: "Unlock the freedom to fly on your terms. With the private jets, you’re not just traveling; you’re making a statement of refined taste and discerning choice, all while saving valuable time.",
    },
    {
      img: NewhomeYatchImage,
      heading: "Yacht",
      text: "Sail with elegance, power, and strength. Enjoy smooth voyages while chasing sunsets, hosting parties, or exploring peaceful coves. Our rental yacht service is tailored to meet your unique preferences, offering customizable experiences for every occasion, ensuring your maritime adventures are exactly as you envision.",
    },
    {
      img: NewhomeDivingImage,
      heading: "Sky Dive",
      text: "Take the leap from the plane, embrace the weightlessness, feel the adrenaline rush through your veins, and dance in the air with breathtaking views. Life's too short to handle mundane tasks - we've got you covered.",
    },
  ];
  return (
    <>
      <div className="grid-cols-2 gap-8 hidden md:grid">
        {cardsData.map((card) => (
          <div
            key={card.heading}
            className="col-span-1 relative rounded-xl overflow-hidden group"
          >
            <Image src={card.img} alt={card.heading} />
            <div className="group-hover:bg-opacity-50 bg-black bg-opacity-40 absolute h-full w-full inset-0 duration-500" />
            <span
              className={`text-3xl absolute duration-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-0 opacity-100 font-light ${silk_serif.className}`}
            >
              {card.heading}
            </span>
            <p className="max-w-[90%] text-center group-hover:opacity-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-5 opacity-0 duration-500 lg:text-base md:text-xs">
              {card.text}
            </p>
          </div>
        ))}
      </div>
      <div className="-mx-6 md:hidden">
        <Swiper
          slidesPerView={1.4}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[]}
          className="home-exp-slide"
        >
          {cardsData.map((card) => (
            <SwiperSlide key={card.heading}>
              <div className="px-1">
                <div className="col-span-2 relative rounded-xl overflow-hidden ">
                  <Image src={card.img} alt={card.heading} />
                  <div className="absolute w-full h-full inset-0 bg-black bg-opacity-40 hover:bg-opacity-50 duration-300 flex justify-center items-center">
                    <span className="text-2xl font-light">{card.heading}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Experiences;
