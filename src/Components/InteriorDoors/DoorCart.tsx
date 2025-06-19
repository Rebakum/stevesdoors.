"use client";

import Image from "next/image";
import Link from "next/link";

const DoorCart = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-100 p-8 rounded-md shadow-md max-w-6xl mx-auto my-10">
      {/* Image */}
      <div className="w-64 h-auto mb-6 md:mb-0 md:mr-8">
        <Image
          src="/molded-panel-door.png"
          alt="Molded Panel Door"
          width={256}
          height={512}
          className="shadow-sm"
        />
      </div>

      {/* Text Content */}
      <div className="text-center md:text-left">
        <h2 className="text-2xl font-semibold mb-4">Molded Panel Doors</h2>
        <p className="text-gray-700 mb-6 max-w-md">
          Molded panel doors resist shrinking, swelling, cracking and splitting.
          Available in a wide variety of sizes, they can be painted or stained
          to match any décor.
        </p>
        <Link
          href="/interior-doors"
          className="inline-block bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800 transition duration-300"
        >
          VIEW ALL
        </Link>
      </div>
    </div>
  );
};

export default DoorCart;
