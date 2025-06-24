import Image6 from "@/assets/images/Story/6.jpg";
import Image7 from "@/assets/images/Story/7.jpg";
import Image8 from "@/assets/images/Story/8.jpg";
import Image from "next/image";

const OurRole = () => {
  return (
    <div className="mx-auto container py-12 px-8">
      <div className="flex flex-col md:flex-row  justify-between items-center gap-3">
        <div className="relative w-full md:w-1/2 h-[400px]">
          <Image
            src={Image6}
            alt="Tourism 3"
            fill
            className="object-cover rounded-sm"
          />
        </div>
        <div className="w-full flex-col md:w-1/2 p-20 flex justify-center items-center bg-gray-300 h-[400px]">
          <h1 className="text-3xl md:text-6xl mb-4  font-semibold text-gray-800">
            Akbar’s Role Abroad
          </h1>
          <p>
            Akbar’s Role Abroad Since 2010, Akbar Dore has expanded its
            operations internationally, completing projects in countries such as
            Saudi Arabia, UAE, Malaysia, and the USA with dis
          </p>
        </div>
      </div>
      <div className="flex justify-baseline items-center py-3 gap-3">
        <div className="relative w-full md:w-1/2 h-[400px]">
          <Image
            src={Image7}
            alt="Tourism 3"
            fill
            className="object-cover rounded-sm"
          />
        </div>
        <div className="relative w-full md:w-1/2 h-[400px]">
          <Image
            src={Image8}
            alt="Tourism 3"
            fill
            className="object-cover rounded-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default OurRole;
