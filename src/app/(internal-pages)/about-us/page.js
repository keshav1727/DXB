import { silk_serif } from "@/fonts/fonts";
import Image from "next/image";
import {
  ClientCentric,
  Support,
  TailoredExperience,
  TimeEffeciency,
} from "../../../../public/icons";
import {
  NewAboutBannerImage,
  NewAboutUsImgImage,
} from "../../../../public/image";

export default function Page() {
  return (
    <div className="w-full h-full flex flex-col gap-6 justify-center items-center">
      <h1
        className={`${silk_serif.className} text-center lg:text-7xl md:text-6xl sm:text-5xl text-3xl mt-3 md:-mb-4 -mb-8`}
      >
        About Us
      </h1>
      <div className="md:w-full md:mt-0 mt-4 w-dvw flex flex-col justify-center items-center gap-y-6">
        <section className="-mx-[5.5%] relative">
          <Image
            src={NewAboutBannerImage}
            alt="banner"
            className="aspect-[5/2] object-cover w-full"
          />
        </section>
      </div>
      <div className="w-full flex flex-col gap-y-4 items-center">
        <p className="md:text-xl sm:text-base text-xs font-light text-center  text-white">
          We’re dedicated to helping you maximize your time. Our unparalleled
          concierge services make routine tasks simple and stress-free, allowing
          you to reach your professional and personal goals effortlessly. We
          believe convenience should be accessible to those who truly value it.
        </p>
        <p className="md:text-xl sm:text-base text-xs font-light text-center text-white mt-6">
          Our commitment to making everything achievable means we provide
          unparalleled availability and a tailored lifestyle that extends well
          into the future. From arriving in Dubai until the day you bid
          farewell, we ensure every detail is managed with care and precision.
        </p>
      </div>
      <div className="flex flex-col w-full gap-6">
        <Image
          src={NewAboutUsImgImage}
          alt="About DXB Care"
          style={{ width: "100%", height: "auto" }}
          className="md:rounded-[40px] rounded-2xl"
        />
        <p className="md:text-xl sm:text-base text-xs font-light text-center text-white">
          With DXB Care, you gain access to a dedicated network of consultants
          and specialists in Dubai who can fulfill all your desires, requests,
          and necessities. Whether it&apos;s car rentals, yacht rentals,
          exclusive restaurant reservations, private shopping, fun activities,
          or event planning, DXB Care has you covered.
        </p>
      </div>
      <div className="flex flex-col gap-8 w-full items-center">
        <h1
          className={`text-2xl my-4 md:text-4xl text-white font-bold ${silk_serif.className}`}
        >
          Why Choose DXB
        </h1>
        <div className="grid grid-cols-2 md:gap-x-2 lg:gap-x-6 gap-y-8">
          <div className="md:col-span-1 col-span-2 grid grid-cols-10">
            <div className="flex items-center justify-center col-span-2">
              <Image
                src={TimeEffeciency}
                alt=""
                width={0}
                height={0}
                style={{ width: "auto", height: "auto" }}
              />
            </div>
            <div className="col-span-8 flex flex-col items-start justify-center gap-2 border-l-[2px] border-solid border-white pl-4">
              <h1
                className={`md:text-2xl text-base font-medium text-white ${silk_serif.className}`}
              >
                Time Efficiency
              </h1>
              <p className="font-light text-xs lg:text-sm">
                Your time is precious, and we ensure you make the most of it by
                handling your tasks efficiently.
              </p>
            </div>
          </div>{" "}
          <div className="md:col-span-1 col-span-2 grid grid-cols-10">
            <div className="p-4 flex items-center col-span-2 justify-center">
              <Image
                src={TailoredExperience}
                alt=""
                width={0}
                height={0}
                style={{ width: "auto", height: "auto" }}
              />
            </div>
            <div className="flex flex-col items-start justify-center col-span-8 gap-2 border-l-[2px] border-solid border-white pl-4">
              <h1
                className={`md:text-2xl text-base font-medium text-white ${silk_serif.className}`}
              >
                Tailored Experiences
              </h1>
              <p className="font-light text-xs lg:text-sm">
                We create personalized experiences that fit your unique
                lifestyle, anticipating your needs and offering services that
                enhance your daily life.
              </p>
            </div>
          </div>
          <div className="md:col-span-1 col-span-2 grid grid-cols-10">
            <div className="p-4 flex items-center justify-center col-span-2">
              <Image
                src={ClientCentric}
                alt=""
                width={0}
                height={0}
                style={{ width: "auto", height: "auto" }}
              />
            </div>
            <div className="flex flex-col col-span-8 items-start justify-center gap-2 border-l-[2px] border-solid border-white pl-4">
              <h1
                className={`md:text-2xl text-base font-medium text-white ${silk_serif.className}`}
              >
                Client Centric
              </h1>
              <p className="font-light text-xs lg:text-sm">
                With us as your partner, pursue your dreams with unwavering
                support. We anticipate your needs proactively, cultivating deep,
                client-centric relationships.
              </p>
            </div>
          </div>
          <div className="md:col-span-1 col-span-2 grid grid-cols-10">
            <div className="p-4 flex items-center justify-center col-span-2">
              <Image
                src={Support}
                alt=""
                width={0}
                height={0}
                style={{ width: "auto", height: "auto" }}
              />
            </div>
            <div className="flex flex-col items-start justify-center col-span-8 gap-2 border-l-[2px] border-solid border-white pl-4">
              <h1
                className={`md:text-2xl text-base font-medium text-white ${silk_serif.className}`}
              >
                Comprehensive Support
              </h1>
              <p className="font-light text-xs lg:text-sm">
                From exclusive restaurant reservations to event planning and
                everything in between, our broad range of services ensures all
                your needs are met with ease and efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
      <p
        className={`mb-6 text-xs sm:text-base md:text-lg lg:text-xl font-light text-center text-white ${silk_serif.className}`}
      >
        Join us and let DXB Care simplify your daily routine, giving you the
        time to focus on what truly matters. Together, we can make every moment
        count.
      </p>
    </div>
  );
}
