"use client";
import Image from "next/image";
import Link from "next/link";
import { DropdownArrow, MenuIcon } from "../../../public/icons";
import { usePathname, useRouter } from "next/navigation";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { Fragment } from "react";
import { DXBLogo } from "../../../public/image";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <header className="w-full">
      <div className="2xl:max-w-[1440px] max-w-[90%] mx-auto flex justify-between items-center">
        <Link href="/">
          <Image
            src={DXBLogo}
            style={{ height: "auto" }}
            quality={100}
            className="w-[120px] lg:w-[200px] sm:w-[150px]"
          />
        </Link>
        <div className="lg:flex hidden gap-x-4">
          <Link
            href="/"
            className={`${
              pathname === "/" ? "underline" : ""
            } font-normal text-2xl`}
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className={`${
              pathname === "/about-us" ? "underline" : ""
            } font-normal text-2xl`}
          >
            About Us
          </Link>
          <Link
            href="/experiences"
            className={`${
              pathname === "/experiences" ? "underline" : ""
            } font-normal text-2xl`}
          >
            Experiences
          </Link>
          <Menu as="div" className="relative">
            <MenuButton
              as="button"
              className={`${
                pathname.includes("/membership") ? "underline" : ""
              } font-normal text-2xl`}
            >
              Membership
            </MenuButton>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <MenuItems
                as="div"
                className="w-[235px] z-20 flex flex-col gap-2 bg-[rgba(255,255,255,1)] rounded-3xl p-6 text-black absolute right-0 top-[115%]"
              >
                <MenuItem>
                  <Link
                    href="/membership/corporate-concierge"
                    className="text-base font-medium block w-full"
                  >
                    Corporate Membership
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    href="/membership/personal-concierge"
                    className="text-base font-medium block w-full"
                  >
                    Personal Membership
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    href="/membership/relocation-services"
                    className="text-base font-medium block w-full"
                  >
                    Relocation Services
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    href="/membership/elite-explorer"
                    className="text-base font-medium block w-full"
                  >
                    Elite Explorer
                  </Link>
                </MenuItem>
              </MenuItems>
            </Transition>
          </Menu>
        </div>
        <Menu as="div" className="lg:hidden flex justify-center items-center">
          <MenuButton>
            <Image
              src={MenuIcon}
              width={0}
              height={0}
              style={{ width: "auto", height: "auto" }}
            />
          </MenuButton>
          <MenuItems
            transition
            anchor="bottom end"
            className="w-[235px] z-20 flex flex-col gap-2 bg-[rgba(255,255,255,1)] rounded-3xl p-6 text-black"
          >
            <MenuItem as="div">
              {({ close }) => (
                <Link onClick={close} href="/" className="block w-full">
                  Home
                </Link>
              )}
            </MenuItem>
            <MenuItem as="div">
              {({ close }) => (
                <Link onClick={close} href="/about-us" className="block w-full">
                  About Us
                </Link>
              )}
            </MenuItem>
            <MenuItem as="div">
              {({ close }) => (
                <Link
                  onClick={close}
                  href="/experiences"
                  className="block w-full"
                >
                  Experience
                </Link>
              )}
            </MenuItem>
            <MenuItem>
              {({ close: menuClose }) => (
                <Popover>
                  <PopoverButton className="flex justify-between w-full items-center">
                    Membership
                    <Image
                      src={DropdownArrow}
                      width={0}
                      height={0}
                      style={{ width: "16px", height: "16px" }}
                    />
                  </PopoverButton>
                  <PopoverPanel>
                    {({ close }) => (
                      <div className="flex flex-col gap-2">
                        <button
                          onClick={() => {
                            router.push("/membership/corporate-concierge");
                            close();
                            menuClose();
                          }}
                          className="text-sm font-light text-left"
                        >
                          Corporate Membership
                        </button>
                        <button
                          onClick={() => {
                            router.push("/membership/personal-concierge");
                            close();
                            menuClose();
                          }}
                          className="text-sm font-light text-left"
                        >
                          Personal Membership
                        </button>
                        <button
                          onClick={() => {
                            router.push("/membership/relocation-services");
                            close();
                            menuClose();
                          }}
                          className="text-sm font-light text-left"
                        >
                          Relocation Membership
                        </button>
                        <button
                          onClick={() => {
                            router.push("/membership/elite-explorer");
                            close();
                            menuClose();
                          }}
                          className="text-sm font-light text-left"
                        >
                          Elite Explorer
                        </button>
                      </div>
                    )}
                  </PopoverPanel>
                </Popover>
              )}
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </header>
  );
}
