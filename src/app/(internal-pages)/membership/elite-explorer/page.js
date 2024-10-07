import Image from "next/image";
import React from "react";
import CorporateSlider from "./components/CorporateSlider";
import Link from "next/link";
import { silk_serif } from "@/fonts/fonts";
import { NewEliteBanner } from "../../../../../public/image";

const EliteExplorer = () => {
  return (
    <div className="flex flex-col">
      <section className="-mx-[5.5%] relative">
        <Image
          src={NewEliteBanner}
          alt="banner"
          className="aspect-[5/2] object-cover w-full"
        />
      </section>
      <section className="py-4 md:py-8 flex flex-col md:gap-6 gap-3">
        <h4
          className={`${silk_serif.className} md:text-6xl text-2xl font-medium md:font-semibold text-center`}
        >
          Elite Explorer
        </h4>
        <p className="md:text-2xl text-xs font-light text-center">
          Let us handle every detail of your journey, from currency exchange to
          arranging personalized experiences and capturing your special moments
          with expert photography services. At DXB Care, we&apos;re not just
          about convenience; we&apos;re here to ensure your time in Dubai is
          filled with joy, relaxation, and unforgettable memories. Imagine
          arriving in Dubai to a warm personal greeting at the airport, followed
          by seamless transfers and a meticulously planned itinerary just for
          you. Whether you&apos;re exploring Dubai&apos;s vibrant culture,
          indulging in luxury car rentals for self-driven adventures, or gaining
          VIP access to top attractions, every moment is designed to exceed your
          expectations.
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

export default EliteExplorer;
