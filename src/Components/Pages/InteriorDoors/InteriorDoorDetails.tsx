import { DoorResponse } from "@/types/Door";
import Image from "next/image";

interface InteriorDoorsDetailsProps {
  door: DoorResponse;
}
const InteriorDoorsDetails = ({ door }: InteriorDoorsDetailsProps) => {
  const doorData = door?.data;

  return (
    <div>
      <div className="flex  md:flex-row py-12  justify-center items-center gap-5">
        {/* Text Content */}
        <div className="w-full rounded-sm flex flex-col items-start p-6 md:p-20 md:w-1/2 text-center md:text-left">
          <h1 className="md:text-6xl text-4xl font-bold leading-tight mb-6">
            {doorData.title}
          </h1>
          <p className="text-gray-600 text-justify text-lg mb-8">
            {doorData.description}
          </p>
        </div>

        {/* Cover Image */}
        <div className="w-full md:w-1/2 h-[500px]  flex justify-center items-center">
          {doorData.images && doorData.images.length > 0 && (
            <Image
              src={doorData.coverImage}
              alt={doorData.title || "interior doorData"}
              className="rounded-sm shadow-md object-cover"
              width={500}
              height={500}
              priority
            />
          )}
        </div>
        <div />
      </div>
      <div className="mt-10 mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6   ">
        {doorData.images && doorData.images.length > 0 ? (
          doorData.images.map((image: string, index: number) => (
            <Image
              key={index}
              src={image}
              alt={doorData.title || "Exterior doorData"}
              className="rounded-sm shadow-md object-cover "
              fill={false}
              width={500}
              height={500}
              priority
            />
          ))
        ) : (
          <p className="text-center">Image not found</p>
        )}
      </div>
    </div>
  );
};

export default InteriorDoorsDetails;
