import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const TopHeader = () => {
  return (
    <div className="w-full  hidden lg:block fixed px-10 top-0 z-50 bg-white shadow text-sm text-gray-700">
      <div className="max-w-screen-xl mx-auto px-6 py-2 flex justify-between items-center">
        {/* Left side: empty */}
        <div className="w-1/3"></div>

        {/* Right side: phone, links,  */}
        <div className="flex  gap-10  items-center justify-end  w-2/3">
          <div className="flex items-center space-x-4 text-lg">
            <span>1-800-617-8586</span>
            <Link href="/contact" className="hover:text-blue-500">
              Contact Us
            </Link>
            <Link href="/news" className="hover:text-blue-500">
              News
            </Link>
            <Link href="/awards" className="hover:text-blue-500">
              Awards
            </Link>
          </div>
          {/* social icons */}
          <div className="flex space-x-4 text-xl">
            <Link
              href="#"
              aria-label="Facebook"
              className="hover:text-blue-500"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="#"
              aria-label="Instagram"
              className="hover:text-pink-500"
            >
              <FaInstagram />
            </Link>
            <Link href="#" aria-label="Twitter" className="hover:text-blue-400">
              <FaTwitter />
            </Link>
            <Link
              href="#"
              aria-label="LinkedIn"
              className="hover:text-blue-600"
            >
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
