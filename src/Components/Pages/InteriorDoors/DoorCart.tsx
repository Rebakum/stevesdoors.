"use client";

import door1 from "@/assets/images/Interior Doors/M-SM-2P-ST-BC-2868.jpg";
import door2 from "@/assets/images/Interior Doors/UH-SM-2P-ST-SH-2868.jpg";
import Image from "next/image";
import Link from "next/link";

const DoorCart = () => {
  return (
    <>
      {/* 1st door */}
      <div className="flex flex-col md:flex-row gap-3 items-center   rounded-md  max-w-6xl mx-auto my-10">
        {/* Image */}
        <div className="w-64 h-auto mb-6 md:mb-0 md:mr-8 door-3d">
          <Image
            src={door1}
            alt="Molded Panel Door"
            width={256}
            height={512}
            className="shadow-md"
          />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left bg-gray-100 p-8 w-full h-[400px] ">
          <h2 className="text-2xl font-semibold mb-4">Molded Panel Doors</h2>
          <p className="text-gray-700 mb-6 max-w-md">
            Molded panel doors resist shrinking, swelling, cracking and
            splitting. Available in a wide variety of sizes, they can be painted
            or stained to match any décor. splitting. Available in a wide
            variety of sizes, they can be painted or stained to match any décor.
          </p>
          <Link
            href="/interior-doors"
            className="inline-block bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800 transition duration-300"
          >
            VIEW ALL
          </Link>
        </div>
      </div>
      {/* 2nd Door */}
      <div className="flex flex-col md:flex-row  gap-3 items-center  rounded-md  max-w-6xl mx-auto my-10">
        {/* Image */}
        <div className="w-64 h-auto mb-6 md:mb-0 md:mr-8 door-3d">
          <Image
            src={door2}
            alt="Molded Panel Door"
            width={256}
            height={512}
            className="shadow-md"
          />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left p-8 bg-gray-100 w-full h-[400px]  ">
          <h2 className="text-2xl font-semibold mb-4">Ultra MDF Doors</h2>
          <p className="text-gray-700 mb-6 max-w-md">
            Primed doors are assembled by hand and manufactured to exact
            specifications. Made with a durable LVL core and HDF face with true
            stile and rail construction, these doors offer sound reduction in
            multiple design options to match your home’s style.
          </p>
          <Link
            href="/interior-doors"
            className="inline-block bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800 transition duration-300"
          >
            VIEW ALL
          </Link>
        </div>
      </div>
    </>
  );
};

export default DoorCart;
