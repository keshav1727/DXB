import Image from "next/image";
import { DXBLogo } from "../../../public/image";
import { InstagramIcon, LinkedIn, XIcon } from "../../../public/icons";
import { silk_serif } from "@/fonts/fonts";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#434040] w-full">
      <div className="2xl:max-w-[1440px] max-w-[90%] mx-auto pt-6 pb-4 flex flex-col items-center gap-4">
        <div className="w-full flex md:flex-row flex-col md:justify-between justify-center items-center">
          <div className="flex flex-col gap-y-4 md:order-1 order-2 items-center">
            <Image
              src={DXBLogo}
              style={{ height: "auto" }}
              quality={100}
              className="md:w-[220px] lg:w-[250px] w-[155px]"
            />
            <div className="flex gap-x-6 items-center">
              <a href="https://www.instagram.com/dxbcare/" target="_blank">
                <Image
                  src={InstagramIcon}
                  width={0}
                  height={0}
                  style={{ width: "25px", height: "auto" }}
                  quality={100}
                />
              </a>
              <a
                href="https://x.com/dxbcare?s=21&t=0WntPFjIMpA5R_LM8Htgsg"
                target="_blank"
              >
                <Image
                  src={XIcon}
                  width={0}
                  height={0}
                  style={{ width: "25px", height: "auto" }}
                  quality={100}
                />
              </a>
              <a
                href="https://www.linkedin.com/company/dxb-care/about/"
                target="_blank"
              >
                <Image
                  src={LinkedIn}
                  width={0}
                  height={0}
                  style={{ width: "25px", height: "auto" }}
                  quality={100}
                />
              </a>
            </div>
            <a href="mailto:hello@dxb.care" target="_blank">
              hello@dxb.care
            </a>
          </div>
          <div className="flex md:flex-row flex-col md:order-2 order-1 gap-x-10 gap-y-4">
            <div className="flex flex-col md:items-start items-center">
              <h1
                className={`font-semibold text-[21px]  ${silk_serif.className}`}
              >
                Company
              </h1>
              <Link
                href={"/about-us"}
                className="text-white font-normal text-sm"
              >
                About Us
              </Link>
            </div>
            <div className="flex flex-col md:items-start items-center">
              <h1
                className={`font-semibold text-[21px]  ${silk_serif.className}`}
              >
                Contact Us
              </h1>
              <a
                href="mailto:hello@dxb.care"
                target="_blank"
                className="text-white font-normal text-sm"
              >
                Email Us
              </a>
              <a
                href="https://wa.me/919019555757?"
                target="_blank"
                className="text-white font-normal text-sm"
              >
                Whatsapp
              </a>
              <a
                href="https://telegram.me/DXB_care?"
                target="_blank"
                className="text-white font-normal text-sm"
              >
                Telegram
              </a>
              <a
                href="https://calendly.com/dxbcare/15min"
                target="_blank"
                className="text-white font-normal text-sm"
              >
                Schedule Call
              </a>
            </div>
            <div className="flex flex-col md:items-start items-center">
              <h1
                className={`font-semibold text-[21px]  ${silk_serif.className}`}
              >
                Information
              </h1>
              <p className="text-white font-normal text-sm">
                Terms & Conditions
              </p>
              <p className="text-white font-normal text-sm">Privacy Policy</p>
            </div>
          </div>
        </div>
        <p className="text-white text-center font-normal text-[12px] md:text-base">
          All copyrights reserve to DXB.Care
        </p>
      </div>
    </footer>
  );
}
