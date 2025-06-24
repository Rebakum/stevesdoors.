import backgroungImage from "@/assets/images/Gallery/inspiration.jpg";
import Image from "next/image";

const Banner4 = () => {
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
          Inspiration
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-1/2 text-center leading-relaxed">
          A Steves & Sons door makes an impression — from lasting curb appeal
          outside to elegance and warmth inside. It’s a statement of personal
          style and a mark of quality craftsmanship that sets a home apart.
        </p>
      </div>
    </section>
  );
};

export default Banner4;
