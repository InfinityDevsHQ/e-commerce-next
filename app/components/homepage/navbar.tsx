"use client";
import { useState } from "react";
import NavLogo from "../svg/logos/logo-svg";
import CloseSvg from "../svg/icons/close-svg";
import MenuSvg from "../svg/icons/menu-svg";
import HeartSvg from "../svg/icons/heart-svg";
import ProfileSvg from "../svg/icons/profile-svg";
import CartSvg from "../svg/icons/cart-svg";
import Link from "next/link";

const NavLinks = ["Home", "Shop", "Services", "Contact Us"];
const NavIcons = [
  {
    id: 1,
    icon: <HeartSvg />,
  },
  {
    id: 2,
    icon: <CartSvg />,
  },
  {
    id: 3,
    icon: <ProfileSvg />,
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="text-primary bg-backgroundPrimary overflow-hidden">
      <div className="px-4 py-4 md:px-14 md:py-6">
        <div className="mx-auto flex justify-between items-center">
          {/* logo  */}
          <div className="text-2xl font-bold">
            <NavLogo />
          </div>
          {/* Desktop */}
          <nav>
            <ul className="hidden md:flex gap-2.5">
              {NavLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="hover:text-white pb-1 md:p-2.5 flex hover:border-b transition-all duration-150 ease-in-out items-center justify-center gap-3 font-bold text-xs uppercase"
                  >
                    <span>{link}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <button
              className="mt-5 md:mt-0 md:hidden"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
            >
              {!isOpen && <MenuSvg className="size-5" />}
            </button>
          </nav>

          <ul className="hidden md:flex gap-2.5">
            {NavIcons.map((link) => (
              <li key={link.id}>
                <Link
                  href="#"
                  className="hover:text-white transition duration-300 ease-in-out"
                >
                  <span>{link.icon}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Mobile Nav */}
      <div
        className={`w-full pt-6 py-8 bg-black/80 h-dvh z-10 -mt-20 md:hidden ${
          isOpen ? "fixed" : "hidden"
        }`}
      >
        <div className="flex justify-between items-start px-8">
          <ul className="flex flex-col pt-20 gap-16 justify-between">
            {NavLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href="#"
                  className="mb-1.5 hover:underline pb-1 font-semibold uppercase hover:text-inverted transition duration-300 ease-in-out"
                >
                  {link}
                </Link>
              </li>
            ))}
            <div className="flex gap-4">
              {NavIcons.map((link) => (
                <li key={link.id}>
                  <Link
                    href="#"
                    className="hover:text-primary  transition duration-300 ease-in-out"
                  >
                    {link.icon}
                  </Link>
                </li>
              ))}
            </div>
          </ul>
          <button
            className="mt-5 md:mt-0 md:hidden"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <CloseSvg className="size-5" />
            ) : (
              <MenuSvg className="size-5" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
