import Image from "next/image";
import React from "react";
import CorporateSlider from "./components/CorporateSlider";
import Link from "next/link";
import { NewPersonlBanner } from "../../../../../public/image";
import { silk_serif } from "@/fonts/fonts";

const PersonalConcierge = () => {
  return (
    <div className="flex flex-col">
      <section className="-mx-[5.5%] relative">
        <Image
          src={NewPersonlBanner}
          alt="banner"
          className="aspect-[5/2] object-cover w-full"
        />
      </section>
      <section className="py-4 md:py-8 flex flex-col md:gap-6 gap-3">
        <h4
          className={`${silk_serif.className} md:text-6xl text-2xl font-medium md:font-semibold text-center`}
        >
          Personal Concierge
        </h4>
        <p className="md:text-2xl text-xs font-light text-center">
          You prefer a tailor-made suit because it fits you and you alone. At
          DXB Care, our concierge services are just as personalized. Whether
          it's planning a getaway, managing daily tasks, or arranging for
          health, legal, or luxury needs, we're here to cater to your
          preferences. Just a text away, let us simplify your life with DXB
          Care.
        </p>
        <p className="md:text-3xl text-xs font-bold italic text-center font-sans mb-4 mt-2">
          We’ll always remember your name and which pillow, floor, or view you
          prefer.
        </p>
        <CorporateSlider />
      </section>

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

export default PersonalConcierge;
