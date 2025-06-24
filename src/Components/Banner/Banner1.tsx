import backgroungImage from "@/assets/images/Gallery/in-8.jpg";
import Image from "next/image";

const Banner1 = () => {
  return (
    <section className="relative w-full h-[80vh] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black bg-opacity-30">
        <Image
          src={backgroungImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-4 h-full items-center flex flex-col justify-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
          Interior Doors
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-1/2 text-center leading-relaxed">
          Steves &amp; Sons offers everything from high density fiberwood to
          flush door for interiors. Molded panel doors are one of our most
          popular styles, ranging from a one panel to a six panel design, in
          smooth or textured finishes.
        </p>
      </div>
    </section>
  );
};

export default Banner1;
