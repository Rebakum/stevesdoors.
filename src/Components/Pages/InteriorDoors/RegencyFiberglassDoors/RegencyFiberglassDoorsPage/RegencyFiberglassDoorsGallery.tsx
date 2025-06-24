import galleryImage1 from "@/assets/images/ExteriorDoors/ed-1.png";
import galleryImage2 from "@/assets/images/ExteriorDoors/ed-2.png";
import galleryImage3 from "@/assets/images/ExteriorDoors/ed-3.png";
import galleryImage4 from "@/assets/images/ExteriorDoors/ed-4.png";
import Image from "next/image";

const RegencyFiberglassDoorsGallery = () => {
  return (
    <div className="container mx-auto pt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-4">
        <div>
          <Image
            src={galleryImage1}
            alt="Interior Door"
            className="door-3d"
            priority
          />
        </div>
        <div>
          <Image
            src={galleryImage2}
            alt="Interior Door"
            className="door-3d"
            priority
          />
        </div>
        <div>
          <Image
            src={galleryImage3}
            alt="Interior Door"
            className="door-3d"
            priority
          />
        </div>
        <div>
          <Image
            src={galleryImage4}
            alt="Interior Door"
            className="door-3d"
            priority
          />
        </div>
        <div>
          <Image
            src={galleryImage1}
            alt="Interior Door"
            className="door-3d"
            priority
          />
        </div>
        <div>
          <Image
            src={galleryImage2}
            alt="Interior Door"
            className="door-3d"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default RegencyFiberglassDoorsGallery;
