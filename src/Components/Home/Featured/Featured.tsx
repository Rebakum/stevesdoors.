import Image2 from "@/assets/images/Gallery/Image-gallery-int1.jpg";
import Image3 from "@/assets/images/Gallery/Image-gallery-int2.jpg";
import Image1 from "@/assets/images/Gallery/Image-gallery-int3.jpg";
import { Button } from "@/Components/Ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const Featured = () => {
  const Images = [Image1, Image2, Image3];
  return (
    <div className="container mx-auto my-12">
      {/* Header */}
      <div className="flex flex-col gap-8 md:flex-row items-center justify-center p-8 bg-gray-300">
        <div className="w-full text-left md:w-1/3  md:text-start border-l-8 border-blue-900 pl-4 h-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight mb-6">
            Featured
          </h1>
        </div>
        <p className="text-gray-600 text-lg w-full md:w-2/3">
          Take a look at some of our latest styles.
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-8">
        {Images.map((img, index) => (
          <div
            key={index}
            className="w-[400px] h-[600px] relative mx-auto rounded-sm shadow-lg overflow-hidden"
          >
            <Image
              src={img}
              alt={`Featured ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <Link href="interior-doors">
          <Button className="py-6 px-10 bg-blue-900 hover:bg-blue-800 rounded-sm ">
            Views Doors {""}
            <FaArrowRight />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Featured;
