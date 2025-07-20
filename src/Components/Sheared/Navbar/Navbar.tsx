"use client";

import hoverImage5 from "@/assets/images/hover/bifold-hover.jpg";
import hoverImage6 from "@/assets/images/hover/ext-2.jpg";
import hoverImage7 from "@/assets/images/hover/ext-fiberglass-hover.jpg";
import hoverImage8 from "@/assets/images/hover/ext-regency-hover.jpg";
import hoverImage9 from "@/assets/images/hover/ext-wood-hires.jpg";
import hoverImage4 from "@/assets/images/hover/flush.webp";
import hoverImage3 from "@/assets/images/hover/glass-hover.jpg";
import hoverImage1 from "@/assets/images/hover/molded.jpg";
import hoverImage2 from "@/assets/images/hover/ultra-hover.jpg";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiMenu, FiSearch, FiX } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownStates, setDropdownStates] = useState<{
    [key: string]: boolean;
  }>({});
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [hoveredImage, setHoveredImage] = useState<StaticImageData | null>(
    null
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";

  type SubmenuItem = {
    name: string;
    href: string;
    image?: StaticImageData;
  };

  type NavLink = {
    name: string;
    href: string;
    submenu?: SubmenuItem[];
  };

  const navLinks: NavLink[] = [
    {
      name: "Interior Doors",
      href: "/interior-doors",
      submenu: [
        {
          name: "Molded Panel Doors",
          href: "/interior-doors",
          image: hoverImage1,
        },
        {
          name: "Ultra MDF Doors",
          href: "/interior-doors",
          image: hoverImage2,
        },
        {
          name: "Glass Doors",
          href: "/interior-doors",
          image: hoverImage3,
        },
        {
          name: "Flush Doors",
          href: "/interior-doors/flushDoors",
          image: hoverImage4,
        },
        {
          name: "Bifold Doors",
          href: "/interior-doors/bifoldDoors",
          image: hoverImage5,
        },
      ],
    },
    {
      name: "Exterior Doors",
      href: "/exterior-doors",
      submenu: [
        {
          name: "Steel Entry Doors",
          href: "/exterior-doors",
          image: hoverImage6,
        },
        {
          name: "Smooth Fiberglass Doors",
          href: "/exterior-doors",
          image: hoverImage7,
        },
        {
          name: "Textured Fiberglass Doors",
          href: "/exterior-doors",
          image: hoverImage8,
        },
        {
          name: "Glazed Patio Doors",
          href: "/exterior-doors/glazedPatioDoors",
          image: hoverImage9,
        },
      ],
    },
    {
      name: "Resources",
      href: "/resources",
      submenu: [
        { name: "Warranty Information", href: "/resources/Warrenty" },
        { name: "Installation Guide", href: "/resources/installation" },
        { name: "Maintenance Tips", href: "/resources/maintenance" },
      ],
    },
    { name: "Inspiration", href: "/inspiration" },
    { name: "Our Story", href: "/our-story" },
    { name: "Careers", href: "/careers" },
  ];

  const toggleDropdown = (name: string) => {
    setDropdownStates((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <nav
      className={`fixed lg:top-10 left-0 w-full z-50 transition-all duration-300 px-10 ${
        scrolled ? "bg-white shadow-md" : isHome ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 py-6 flex justify-between items-center">
        <div
          className={`text-2xl font-bold ${
            scrolled ? "text-gray-800" : isHome ? "text-blue-900" : "text-white"
          }`}
        >
          <Link href="/">LOGO</Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 relative">
          {navLinks.map((link, index) => (
            <div key={index} className="group relative">
              <Link
                href={link.href}
                className={`transition hover:text-blue-900 ${
                  pathname === link.href
                    ? "text-blue-900 font-semibold"
                    : scrolled
                    ? "text-gray-800"
                    : isHome
                    ? "text-blue-900"
                    : "text-white"
                }`}
              >
                {link.name}
              </Link>

              {link.submenu && (
                <div className="absolute  top-full left-0  hidden group-hover:flex shadow-lg rounded-md z-50">
                  <div className="flex">
                    {/* Text Menu */}
                    <div className="flex flex-col p-3 gap-3 w-64  bg-white rounded">
                      {link.submenu.map((sublink, subIndex) => (
                        <div
                          key={subIndex}
                          onMouseEnter={() =>
                            setHoveredImage(sublink.image ?? null)
                          }
                          onMouseLeave={() => setHoveredImage(null)}
                          className=""
                        >
                          <Link
                            href={sublink.href}
                            className={`px-4 py-3 hover:text-blue-900 hover:border-l-4 hover:border-l-gray-700 ${
                              pathname === sublink.href
                                ? "text-blue-900 font-semibold border-l-4 border-blue-900"
                                : "text-gray-700"
                            }`}
                          >
                            {sublink.name}
                          </Link>
                        </div>
                      ))}
                    </div>

                    {/* Image Preview */}
                    {hoveredImage && (
                      <div className="w-48 h-48 p-3 bg-gray-200 ml-4 rounded overflow-hidden shadow transition-opacity duration-300 ease-in-out">
                        <Image
                          src={hoveredImage}
                          alt="Preview"
                          className="object-cover w-full h-full"
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Search */}
          <input
            type="search"
            placeholder="Search"
            className={`border rounded-md py-1 px-2 bg-transparent placeholder:text-lg ${
              scrolled
                ? "border-gray-300 text-gray-800"
                : isHome
                ? "border-blue-400 text-blue-900"
                : "border-gray-400 text-white"
            }`}
          />
          <FiSearch
            className={`text-xl ${
              scrolled
                ? "text-gray-800"
                : isHome
                ? "text-blue-900"
                : "text-white"
            }`}
          />
        </div>

        {/* Mobile Toggle */}
        <div
          className={`md:hidden text-2xl cursor-pointer ${
            scrolled
              ? "text-gray-800"
              : isHome
              ? "text-blue-900"
              : "text-gray-400"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`md:hidden px-4 pb-4 ${
            scrolled || !isHome ? "bg-white text-gray-800" : "text-blue-700"
          }`}
        >
          {navLinks.map((link, index) => (
            <div key={index}>
              <div className="flex justify-between items-center">
                <Link
                  href={link.href}
                  className={`block py-2 hover:text-orange-500 ${
                    pathname === link.href
                      ? "text-orange-500 font-semibold"
                      : ""
                  }`}
                  onClick={() => !link.submenu && setIsOpen(false)}
                >
                  {link.name}
                </Link>
                {link.submenu && (
                  <button
                    onClick={() => toggleDropdown(link.name)}
                    className="text-xl font-bold px-2"
                  >
                    {dropdownStates[link.name] ? (
                      <IoIosArrowUp />
                    ) : (
                      <IoIosArrowDown />
                    )}
                  </button>
                )}
              </div>

              {/* Mobile Submenu */}
              {link.submenu && dropdownStates[link.name] && (
                <div className="pl-4">
                  {link.submenu.map((sublink, subIndex) => (
                    <Link
                      key={subIndex}
                      href={sublink.href}
                      className={`block py-1 hover:text-orange-500 ${
                        pathname === sublink.href
                          ? "text-orange-500 font-semibold"
                          : "text-gray-700"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {sublink.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Mobile Search */}
          <div className="flex items-center gap-3 pt-4 text-xl">
            <input
              type="search"
              placeholder="Search"
              className={`border rounded-md py-1 px-2 bg-transparent placeholder:text-lg ${
                scrolled
                  ? "border-gray-300 text-gray-800"
                  : isHome
                  ? "border-blue-400 text-blue-900"
                  : "border-gray-400 text-white"
              }`}
            />
            <FiSearch />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
