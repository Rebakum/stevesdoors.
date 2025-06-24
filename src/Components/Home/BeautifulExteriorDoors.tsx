import heroImg from "@/assets/images/Regency-Fir-3-Lite-Top-Lite-Hickory-shutterstock.jpg";
import Image from "next/image";

const BeautifulExteriorDoors = () => {
  return (
    <section className="container mx-auto py-12">
      <div className=" flex flex-col-reverse md:flex-row-reverse items-center px-6 md:px-12 gap-8">
        {/* Text Content */}
        <div className="w-full text-left min-h-screen rounded-sm flex flex-col justify-center items-start  p-20 bg-gray-300  md:w-1/2   md:text-left">
          <h1 className=" md:text-6xl text-4xl font-bold text-gray-800 leading-tight mb-6">
            Beautiful Exterior <br /> Doors
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Boost your home’s curb appeal with an exterior door from Steves &
            Sons. With wide selection of materials including fiberglass, steel
            and wood, you’re sure to find a design that compliments your
            exterior.
          </p>
        </div>

        {/* Hero Image */}
        <div className="w-full md:w-1/2 min-h-screen flex justify-center">
          <Image
            src={heroImg}
            alt="Interior Door"
            className="rounded-sm shadow-md"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default BeautifulExteriorDoors;
