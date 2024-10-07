import { MdOutlineArrowRightAlt } from "react-icons/md";
import Membership from "./components/Membership";
import Experiences from "./components/Experiences";
import ContactUs from "@/components/contactUs/ContactUs";
import Link from "next/link";
import { silk_serif } from "@/fonts/fonts";

export default function Home() {
  return (
    <div>
      <section className="relative">
        <div className="absolute h-full w-full z-[5] bg-[rgba(0,0,0,.5)]" />
        <video
          className="w-[100vw] sm:aspect-video"
          width="320"
          height="240"
          muted
          autoPlay
          loop
          preload="auto"
          playsInline
        >
          <source src="/videos/banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="z-10 absolute left-1/2 -translate-x-[50%] md:bottom-28 bottom-10 w-full flex flex-col sm:gap-10 gap-6">
          <p
            className={`md:text-3xl sm:text-2xl text-lg font-medium sm:px-40 px-7 text-center ${silk_serif.className}`}
          >
            Our Concierge Magic: Turning 'I wish' into 'I did'.
          </p>
          <Link
            href="/contact-us"
            className="flex items-center gap-2 self-center border-2 border-white rounded-full text-sm md:text-2xl font-medium py-1 px-4 md:py-3 md:px-5"
          >
            <span className="">Contact us</span>
            <MdOutlineArrowRightAlt className="md:block hidden" />
          </Link>
        </div>
      </section>
      <section className="text-center flex flex-col gap-3 sm:gap-6 py-6 sm:py-10">
        <h3
          className={`text-sm sm:text-5xl font-bold ${silk_serif.className}`}
        >
          Reclaim Your Time with DXB Care
        </h3>
        <p className="text-xs sm:text-2xl font-light px-5">
          In our fast-paced world, time is the ultimate luxury. At DXB Care,
          we&apos;re here to help you make the most of every moment. Founded to
          transform how you manage your time, we offer exceptional concierge
          services that let you focus on what matters most—creating memories,
          achieving goals, and enjoying life.
        </p>
        <Link
          href="/about-us"
          className="bg-white text-black py-1 px-2 sm:py-3 sm:px-4 text-xs sm:text-xl font-semibold rounded-full self-center"
        >
          Know More
        </Link>
      </section>
      <section className="max-w-[90%] mx-auto flex flex-col gap-4 sm:gap-8 py-6 sm:py-10">
        <h3
          className={`${silk_serif.className} text-2xl sm:text-5xl font-bold text-center`}
        >
          Experiences
        </h3>
        <Experiences />
        <Link
          href="/experiences"
          className="bg-white text-black py-1 px-2 sm:py-3 sm:px-4 text-xs sm:text-xl font-semibold rounded-full self-center"
        >
          Discover More
        </Link>
      </section>
      <section className="max-w-[90%] mx-auto flex flex-col gap-4 sm:gap-8 py-6 sm:py-10">
        <h3
          className={`${silk_serif.className} text-2xl sm:text-5xl font-bold text-center`}
        >
          Membership
        </h3>
        <Membership />
        <p
          className={`${silk_serif.className} text-base sm:text-3xl font-semibold text-center sm:-mt-4`}
        >
          *We also accept <span className="italic">Crypto</span> payments
        </p>
      </section>
      <section className="max-w-[90%] mx-auto flex-col gap-8 py-6 sm:py-10 flex items-center">
        <div className="max-w-[275px] sm:max-w-[530px]">
          <h4
            className={`${silk_serif.className} italic text-xl sm:text-4xl font-medium text-center`}
          >
            &quot;Time stays long enough for anyone who will use it.&quot;
          </h4>
          <p className="sm:text-base text-xs text-right">~ Leonardo da Vinci</p>
        </div>
      </section>
      <ContactUs />
    </div>
  );
}
