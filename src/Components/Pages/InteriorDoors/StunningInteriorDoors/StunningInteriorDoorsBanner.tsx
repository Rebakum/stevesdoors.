import StunningInteriorDoorsImage2 from "@/assets/images/interior-1.webp";
import StunningInteriorDoorsImage3 from "@/assets/images/interior-2.jpg";
import Image from "next/image";

const StunningInteriorDoorsBanner = () => {
  return (
    <div className="container mx-auto my-3  grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
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
  );
};

export default StunningInteriorDoorsBanner;
