import heroImg from "@/assets/images/Gallery/ex-1.jpg";
import Image from "next/image";

const RegencyFiberglassDoorsBanner = () => {
  return (
    <section className="container mx-auto py-12">
      <div className=" flex flex-col-reverse md:flex-row items-center  gap-5  bg-gray-300">
        {/* Text Content */}
        <div className="w-full min-h-screen flex rounded-sm flex-col  justify-center items-start  p-20  md:w-1/2 text-center  md:text-left">
          <h1 className=" text-4xl md:text-6xl  font-bold text-gray-800 leading-tight mb-6">
            Regency Fiberglass Doors
          </h1>
          <p className="text-gray-600 text-lg mb-8 text-justify">
            Add elegance and durability to your entryway with the Regency
            fiberglass doors. It features various woodgrains and decorative
            glass options. This rot-free fiberglass unit simulates the resonance
            of real wood while being protected from the elements.
          </p>
        </div>

        {/* Hero Image */}
        <div className="w-full md:w-1/2 min-h-screen flex justify-center">
          <Image
            src={heroImg}
            alt="Interior Door"
            className="shadow-md"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default RegencyFiberglassDoorsBanner;
