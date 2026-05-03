import { DoorData } from "@/types/Door";
import Image from "next/image";

interface ExteriorDoorsDetailsProps {
  door: DoorData; // ✅ FIXED
}

const ExteriorDoorsDetails = ({ door }: ExteriorDoorsDetailsProps) => {
  return (
    <div className="container mx-auto h-auto">
      <div className="flex flex-col-reverse py-12 md:flex-row bg-gray-300 justify-center items-center gap-5">
        
        {/* TEXT */}
        <div className="w-full flex flex-col p-6 md:p-20 md:w-1/2">
          <h1 className="md:text-6xl text-4xl font-bold mb-6">
            {door.title}
          </h1>
          <p className="text-gray-600 text-lg">
            {door.description}
          </p>
        </div>

        {/* IMAGE */}
        <div className="w-full md:w-1/2 h-[500px] flex justify-center items-center">
          <Image
            src={door.coverImage}
            alt={door.title}
            width={500}
            height={500}
            className="rounded shadow-md object-cover"
          />
        </div>
      </div>

      {/* GALLERY */}
      <div className="mt-10 mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {door.images?.length > 0 ? (
          door.images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={door.title}
              width={500}
              height={500}
              className="rounded shadow-md object-cover"
            />
          ))
        ) : (
          <p className="text-center">Image not found</p>
        )}
      </div>
    </div>
  );
};

export default ExteriorDoorsDetails;