import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { MdOutlineDoorSliding } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-800 z-50 text-gray-200 px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo & Address */}
        <div>
          {/* <Image
            src="/logo.png" // replace with your logo path
            alt="Steves & Sons"
            width={80}
            height={80}
          /> */}
          <h2 className="font-bold text-xl mt-4 mb-2">Steves & Sons</h2>
          <p>
            203 Humble Ave.
            <br />
            San Antonio, TX 78225
          </p>
          <p className="mt-2">Phone us: +1-800-617-8586</p>
        </div>

        {/* Interior Doors */}
        <div>
          <h3 className="font-bold text-lg mb-3">Interior Doors</h3>
          <ul className="space-y-1">
            <li>Molded Panel Doors</li>
            <li>Ultra MDF Doors</li>
            <li>Wood Panel Doors</li>
            <li>Glass Panel Doors</li>
            <li>Flush Doors</li>
            <li>Bifold Doors</li>
          </ul>
        </div>

        {/* Exterior Doors */}
        <div>
          <h3 className="font-bold text-lg mb-3">Exterior Doors</h3>
          <ul className="space-y-1">
            <li>Element Steel Doors</li>
            <li>Reliant Fiberglass Doors</li>
            <li>Regency Fiberglass Doors</li>
            <li>Legacy Fiberglass Doors</li>
            <li>Premium Wood Doors</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-bold text-lg mb-3">Company</h3>
          <ul className="space-y-1">
            <li>Careers</li>
            <li>FAQs</li>
            <li>News</li>
            <li>Our Story</li>
            <li>Awards</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-bold text-lg mb-3">Follow Us Online</h3>
          <div className="flex space-x-4 mt-2 text-xl">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedinIn />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>© Copyright 2021, All Rights Reserved, Akaba Doors</p>
        <span className="flex items-center justify-center space-x-2">
          <Link
            href="
            /dashboard"
            className="text-gray-400 hover:text-white"
          >
            <MdOutlineDoorSliding />
          </Link>
          <p>Website by Primo Motif</p>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
