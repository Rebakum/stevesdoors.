import heroImg from "@/assest/images/INT_SPH_MLDD_5P_WHT_LHIS.jpg";
import Image from "next/image";

const StylishInteriorDoors = () => {
  return (
    <section className="container mx-auto py-12">
      <div className=" flex flex-col-reverse md:flex-row items-center px-6 md:px-12 gap-8">
        {/* Text Content */}
        <div className="w-full min-h-screen flex flex-col justify-center items-start opacity-80  p-20 bg-gray-800  md:w-1/2 text-center  md:text-left">
          <h1 className="text-9xl md:text-5xl font-bold text-gray-50 leading-tight mb-6">
            Stylish <br /> Interior Doors
          </h1>
          <p className="text-gray-50  text-lg mb-8">
            Steves & Sons offers everything from high density fiberwood to flush
            door for interiors. Molded panel doors is one of our most popular
            styles, ranging from one to six panel design, in smooth or textured
            finishes.
          </p>
        </div>

        {/* Hero Image */}
        <div className="w-full md:w-1/2 min-h-screen flex justify-center">
          <Image
            src={heroImg}
            alt="Interior Door"
            className="rounded-xl shadow-md"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default StylishInteriorDoors;
