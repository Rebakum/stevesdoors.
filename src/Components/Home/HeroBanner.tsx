import heroImg from "@/assest/images/regency-cat-1.jpg";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <section className="container mx-auto py-12">
      <div className=" flex flex-col-reverse md:flex-row items-center px-6 md:px-12 gap-8">
        {/* Text Content */}
        <div className="w-full min-h-screen flex flex-col justify-center items-start  p-20 bg-gray-100  md:w-1/2 text-center  md:text-left">
          <h1 className="text-9xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
            The Envy of <br /> the Block
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            The Envy of the Block Say goodbye to plastic rims and hello to a
            flawless finish that goes all the way up to the glass edge.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <button className=" px-6 py-3  inline-block bg-blue-900 text-white rounded hover:bg-blue-800 transition duration-300">
              Click Here
            </button>
          </div>
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

export default HeroBanner;
