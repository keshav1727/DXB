import Image from "next/image";
import React from "react";
import CorporateSlider from "./components/CorporateSlider";
import Link from "next/link";
import { silk_serif } from "@/fonts/fonts";
import { RelocateBanner } from "../../../../../public/image";

const Relocationservices = () => {
  return (
    <div className="flex flex-col">
      <section className="-mx-[5.5%] relative">
        <Image
          src={RelocateBanner}
          alt="banner"
          className="aspect-[5/2] object-cover w-full"
        />
       
      </section>
      <section className="py-4 md:py-8 flex flex-col md:gap-6 gap-3">
        <h4
          className={`${silk_serif.className} md:text-6xl text-2xl font-medium md:font-semibold text-center`}
        >
          Relocation Services
        </h4>
        <p className="md:text-2xl text-xs font-light text-center">
          From helping you with real estate advice, handling all your moving and
          logistics, travel-leisure activities to ensuring your health and
          wellness needs are met and even finding the perfect car for you - DXB
          Care provides a seamless, stress-free relocation experience. With our
          comprehensive support, moving to Dubai becomes an exciting journey.
          Access all our services conveniently through a single text, ensuring
          efficiency at every step.
        </p>
        <CorporateSlider />
      </section>
      <p className="md:text-3xl text-xs font-light text-center">
        Let&apos;s turn your move to Dubai into an exciting adventure!
        Let&apos;s start planning your journey today.
      </p>

      <section className="flex flex-col gap-6 md:py-10 py-4">
        <Link
          href="/contact-us"
          className="bg-white text-black py-1 px-2 sm:py-3 sm:px-4 text-xs sm:text-xl font-semibold rounded-full self-center"
        >
          Contact us
        </Link>
      </section>
    </div>
  );
};

export default Relocationservices;
