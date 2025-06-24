import galleryImage from "@/assets/images/Exterior Doors/Direct_Glazed_Fiberglass_Doors.png";
import Image from "next/image";

const RegencyFiberglassDoorsGallery = () => {
  return (
    <div className="container mx-auto pt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-4">
        <div>
          <Image
            src={galleryImage}
            alt="Interior Door"
            className="shadow-md"
            priority
          />
        </div>
        <div>
          <Image
            src={galleryImage}
            alt="Interior Door"
            className="shadow-md"
            priority
          />
        </div>
        <div>
          <Image
            src={galleryImage}
            alt="Interior Door"
            className="shadow-md"
            priority
          />
        </div>
        <div>
          <Image
            src={galleryImage}
            alt="Interior Door"
            className="shadow-md"
            priority
          />
        </div>
        <div>
          <Image
            src={galleryImage}
            alt="Interior Door"
            className="shadow-md"
            priority
          />
        </div>
        <div>
          <Image
            src={galleryImage}
            alt="Interior Door"
            className="shadow-md"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default RegencyFiberglassDoorsGallery;
