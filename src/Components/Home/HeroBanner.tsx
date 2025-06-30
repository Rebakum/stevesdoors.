import heroImg from "@/assets/images/Gallery/Image-gallery-ext1.jpg";
import Image from "next/image";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <section className="container mx-auto pb-12 pt-40 h-[80%]">
      <div className=" flex flex-col-reverse md:flex-row justify-center items-center px-6 md:px-12 gap-5 md:gap-8">
        {/* Text Content */}
        <div className="w-full min-h-screen rounded-sm flex flex-col items-start  p-20 bg-gray-300  md:w-1/2 text-center  md:text-left">
          <h1 className=" md:text-6xl text-4xl font-bold text-gray-800 leading-tight mb-6">
            The Envy of <br /> the Block
          </h1>
          <p className="text-gray-600 text-justify text-lg mb-8">
            The Envy of the Block Say goodbye to plastic rims and hello to a
            flawless finish that goes all the way up to the glass edge. a
            flawless finish that goes all the way up to the glass edge.
          </p>
          <div className="flex justify-start gap-4">
            <Link href="RegencyFiberglassDoors">
              <button className=" px-6 py-3  inline-block bg-blue-900 text-white rounded hover:bg-blue-800 transition duration-300">
                Click Here
              </button>{" "}
            </Link>
          </div>
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

export default HeroBanner;
