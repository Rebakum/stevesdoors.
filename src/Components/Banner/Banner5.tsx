import backgroungImage from "@/assets/images/Gallery/careers.jpg";
import Image from "next/image";
import Link from "next/link";

const Banner5 = () => {
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
          careers
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-1/2 text-center leading-relaxed">
          Open the door to your purpose working with us here at Akaba
        </p>
        <div className="flex justify-center items-center gap-4">
          <Link href="/" passHref>
            <button className="px-12 py-4 bg-blue-900 text-white rounded hover:bg-blue-800 transition duration-300 flex items-center gap-2">
              VIEW OPENINGS
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner5;
