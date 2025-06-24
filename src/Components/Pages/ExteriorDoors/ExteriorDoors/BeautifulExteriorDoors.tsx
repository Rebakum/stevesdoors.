import StunningInteriorDoorsImage from "@/assets/images/Gallery/Image-gallery-ext1.jpg";
import StunningInteriorDoorsImage1 from "@/assets/images/Gallery/Image-gallery-ext2.jpg";
import StunningInteriorDoorsImage2 from "@/assets/images/Gallery/Image-gallery-ext3.jpg";
import StunningInteriorDoorsImage3 from "@/assets/images/Gallery/ex-0.jpg";
import Image from "next/image";

const BeautifulExterior = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
          {/* Text Section */}
          <div className="bg-gray-300 w-full h-[400px] flex flex-col justify-center p-6 md:p-10 rounded-t-md ">
            <div className="border-l-8 border-blue-900 pl-4 h-10"></div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Beautiful Exterior Doors
              </h1>
              <p className="text-gray-700 leading-relaxed">
                Boost your home’s curb appeal with an exterior door, with a wide
                selection of materials including fiberglass, steel and wood,
                you’re sure to find a design that compliments your exterior.
              </p>
            </div>
          </div>

          {/* Left Image */}
          <div className="flex justify-center w-full h-[400px]">
            <Image
              src={StunningInteriorDoorsImage}
              alt="Stunning Interior Doors"
              width={400}
              height={400}
              className="w-full h-auto rounded-t-sm shadow-lg object-cover"
            />
          </div>

          <div className="flex justify-center w-full h-[400px]">
            <Image
              src={StunningInteriorDoorsImage1}
              alt="Ultra MDF Door"
              width={400}
              height={500}
              className="w-full h-auto rounded-t-sm shadow-lg object-cover"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 py-3 md:grid-cols-2">
          <div className="flex justify-center w-full h-[400px]">
            <Image
              src={StunningInteriorDoorsImage2}
              alt="Stunning Interior Doors"
              width={400}
              height={400}
              className="w-full h-auto  shadow-lg object-cover"
            />
          </div>
          <div className="flex justify-center w-full h-[400px]">
            <Image
              src={StunningInteriorDoorsImage3}
              alt="Stunning Interior Doors"
              width={400}
              height={400}
              className="w-full h-auto  shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeautifulExterior;
