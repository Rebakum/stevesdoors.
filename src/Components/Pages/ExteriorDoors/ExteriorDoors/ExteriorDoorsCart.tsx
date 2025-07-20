"use client";

import Image from "next/image";
import Link from "next/link";

interface Door {
  _id: string;
  images: string[];
  title: string;
  description: string;
}

interface ExteriorDoorCartProps {
  door: Door;
}

const ExteriorDoorCart: React.FC<ExteriorDoorCartProps> = ({ door }) => {
  const { images, title, description } = door;

  return (
    <div className="flex flex-col md:flex-row items-center gap-3  ">
      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src={images[0]}
          alt={title}
          width={256}
          height={512}
          className="rounded-md object-contain door-3d"
        />
      </div>

      {/* Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left   bg-gray-100 p-10 space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <p className="text-gray-700 text-justify">
          {description.slice(0, 200)}
        </p>
        <Link
          href={`/exterior-doors/${door._id}`}
          className="inline-block bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
        >
          VIEW ALL
        </Link>
      </div>
    </div>
  );
};

export default ExteriorDoorCart;
