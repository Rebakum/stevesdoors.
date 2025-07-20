"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Door = {
  _id: string;
  title: string;
  images: StaticImageData[] | string[];
  description: string;
  category: string;
};

type InteriorDoorCartProps = {
  door: Door;
};

const InteriorDoorCart = ({ door }: InteriorDoorCartProps) => {
  const { images, title, description } = door;
  return (
    <>
      <div className="flex flex-col md:flex-row items-center gap-3  ">
        {/* Image */}
        <div className="w-full h-[400px] flex justify-center">
          <Image
            src={images[0]}
            alt={title}
            width={256}
            height={512}
            className="rounded-md object-contain door-3d"
          />
        </div>

        {/* Text Content */}
        <div className="w-full text-center md:text-left space-y-4 h-[400px] p-10  bg-gray-100">
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          <p className="text-gray-700 text-justify">
            {description.slice(0, 200)}
          </p>
          <Link
            href={`/interior-doors/${door._id}`}
            className="inline-block bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
          >
            VIEW ALL
          </Link>
        </div>
      </div>
    </>
  );
};

export default InteriorDoorCart;
