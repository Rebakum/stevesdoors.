import InteriorDoor1 from "@/assets/images/Gallery/Image-gallery-ext1.jpg";
import InteriorDoor from "@/assets/images/Gallery/Image-gallery-int1.jpg";
import Image from "next/image";
import RegencyFiberglassDoorsBanner from "./RegencyFiberglassDoorsPage/RegencyFiberglassDoorsBanner";
import RegencyFiberglassDoorsGallery from "./RegencyFiberglassDoorsPage/RegencyFiberglassDoorsGallery";

const RegencyFiberglassDoors = () => {
  return (
    <div className="container mx-auto min-h-screen  lg:pb-72">
      <RegencyFiberglassDoorsBanner />
      <RegencyFiberglassDoorsGallery />

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <div className="relative  flex flex-col items-center">
          <div className="w-full h-[600px] flex justify-center items-center relative">
            <Image
              src={InteriorDoor}
              alt="Interior Door"
              width={600}
              height={600}
              className="rounded-sm shadow-md hidden lg:block"
              priority
            />

            {/* Overlay Text Content */}
            <div className="absolute lg:-bottom-48 lg:left-8 z-10 rounded-sm flex flex-col justify-center items-center opacity-90 p-8 md:p-12 bg-gray-800 text-center max-w-[90%] h-[400px] ">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-50 leading-tight mb-4">
                Interior Doors
              </h1>
              <p className="text-gray-50 text-base md:text-lg">
                Steves & Sons offers everything from high density fiberwood to
                flush door for interiors. Molded panel doors are one of our most
                popular styles, ranging from one to six panel design, in smooth
                or textured finishes.
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col items-center ">
          <div className="w-full h-[600px] flex justify-center items-center relative">
            <Image
              src={InteriorDoor1}
              alt="Interior Door"
              width={600}
              height={600}
              className="rounded-sm shadow-md hidden lg:block"
              priority
            />

            {/* Overlay Text Content */}
            <div className="absolute lg:-bottom-48 lg:left-8 z-10 rounded-sm flex flex-col justify-center items-center opacity-90 p-8 md:p-12 bg-gray-300 text-center max-w-[90%]  h-[400px]">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
                Exterior Doors
              </h1>
              <p className="text-gray-800 text-base md:text-lg">
                Boost your home&apos;s curb appeal with an exterior door from
                Steves &amp; Sons. With wide selection of materials including
                fiberglass, steel and wood, you&apos;re sure to find a design
                that compliments your exterior.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegencyFiberglassDoors;
