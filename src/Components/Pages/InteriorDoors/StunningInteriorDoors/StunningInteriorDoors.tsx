import StunningInteriorDoorsImage from "@/assets/images/interior-cat-768x826.webp";
import StunningInteriorDoorsImage2 from "@/assets/images/interior_flus.jpg";
import Image from "next/image";
import StunningInteriorDoorsImageBanner from "./StunningInteriorDoorsBanner";

const StunningInteriorDoors = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
        {/* Text Section */}
        <div className="bg-gray-300 w-full h-[400px] flex flex-col justify-center p-6 md:p-10 rounded-t-md ">
          <div className="border-l-8 border-blue-900 pl-4 h-10"></div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Stunning Interior Doors
            </h1>
            <p className="text-gray-700 leading-relaxed">
              Steves & Sons offers everything from high density fiberwood to
              flush doors for interiors. Molded panel doors are one of our most
              popular styles, ranging from one to six panel designs, in smooth
              or textured finishes.
            </p>
          </div>
        </div>

        {/* Left Image */}
        <div className="flex justify-center w-full h-[400px]">
          <Image
            src={StunningInteriorDoorsImage}
            alt="Stunning Interior Doors"
            width={400}
            height={400}
            className="w-full h-auto rounded-t-sm shadow-lg object-cover"
          />
        </div>

        {/* Right Image */}
        <div className="flex justify-center w-full h-[400px]">
          <Image
            src={StunningInteriorDoorsImage2}
            alt="Ultra MDF Door"
            width={400}
            height={500}
            className="w-full h-auto rounded-t-sm shadow-lg object-cover"
          />
        </div>
      </div>
      <StunningInteriorDoorsImageBanner />
    </div>
  );
};

export default StunningInteriorDoors;
