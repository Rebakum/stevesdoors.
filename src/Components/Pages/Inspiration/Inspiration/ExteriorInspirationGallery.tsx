"use client";
import Image10 from "@/assets/images/Gallery/ex-0.jpg";
import Image11 from "@/assets/images/Gallery/ex-1.jpg";
import Image12 from "@/assets/images/Gallery/ex-2.jpg";
import Image13 from "@/assets/images/Gallery/ex-3.jpg";
import Image14 from "@/assets/images/Gallery/ext-1.jpg";
import Image15 from "@/assets/images/Gallery/ext-2.jpg";
import Image16 from "@/assets/images/Gallery/ext-3.jpg";
import Image17 from "@/assets/images/Gallery/ext-4.jpg";
import Image18 from "@/assets/images/Gallery/Image-gallery-ext-int.jpg";
import Image19 from "@/assets/images/Gallery/Image-gallery-ext1.jpg";
import Image20 from "@/assets/images/Gallery/Image-gallery-ext2.jpg";
import Image from "next/image";

const exnteriorInspirationImages = [
  { id: "01", img: Image10 },
  { id: "02", img: Image11 },
  { id: "03", img: Image12 },
  { id: "04", img: Image13 },
  { id: "05", img: Image14 },
  { id: "06", img: Image15 },
  { id: "07", img: Image16 },
  { id: "08", img: Image17 },
  { id: "09", img: Image18 },
  { id: "10", img: Image19 },
  { id: "11", img: Image20 },
];

const ExteriorInspirationGallery = () => {
  return (
    <div className="px-4 py-12 container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {exnteriorInspirationImages.map((image) => (
          <div
            key={image.id}
            className="w-[300px] h-[300px] relative overflow-hidden "
          >
            <Image
              src={image.img}
              alt={`Inspiration ${image.id}`}
              layout="fill"
              objectFit="cover"
              className="rounded "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExteriorInspirationGallery;
