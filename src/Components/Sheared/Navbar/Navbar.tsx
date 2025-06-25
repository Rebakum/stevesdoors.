"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; // ← Import this
import { useEffect, useState } from "react";
import { FiMenu, FiSearch, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname(); // ← Current path

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/"; // ← Check if on homepage

  const navLinks = [
    { name: "Interior Doors", href: "/interior-doors" },
    { name: "Exterior Doors", href: "/exterior-doors" },
    { name: "Resources", href: "/resources" },
    { name: "Inspiration", href: "/inspiration" },
    { name: "Our Story", href: "/our-story" },
    { name: "Careers", href: "/careers" },
  ];

  return (
    <nav
      className={`fixed lg:top-10 left-0 w-full z-50 transition-all duration-300 px-10 ${
        scrolled ? "bg-white shadow-md" : isHome ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div
          className={`text-2xl font-bold ${
            scrolled ? "text-gray-800" : isHome ? "text-blue-900" : "text-white"
          }`}
        >
          <Link href="/">LOGO</Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`transition hover:text-blue-900 ${
                scrolled
                  ? "text-gray-800"
                  : isHome
                  ? "text-blue-900"
                  : "text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <input
            type="search"
            placeholder="Search"
            className={`border rounded-md py-1  px-2 bg-transparent placeholder:text-lg ${
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
            scrolled || !isHome
              ? "bg-white text-gray-800"
              : "bg-blue-100 text-blue-900"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block py-2 hover:text-blue-900"
            >
              {link.name}
            </Link>
          ))}
          <div className=" flex items-center pt-2 text-xl">
            <input
              type="search"
              placeholder="Search"
              className={`border rounded-md py-1  px-2 bg-transparent placeholder:text-lg ${
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
