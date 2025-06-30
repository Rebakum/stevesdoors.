"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/Components/Ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image3 from "../../../assets/images/Gallery//Image-gallery-ext2.jpg";
import Image4 from "../../../assets/images/Gallery//Image-gallery-ext3.jpg";
import Image1 from "../../../assets/images/Gallery/Image-gallery-ext-int.jpg";
import Image2 from "../../../assets/images/Gallery/Image-gallery-ext1.jpg";
import Image5 from "../../../assets/images/Gallery/Image-gallery-int1.jpg";
import Image6 from "../../../assets/images/Gallery/Image-gallery-int2.jpg";
import Image7 from "../../../assets/images/Gallery/Image-gallery-int3.jpg";

import Image from "next/image";

const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7];

const InspiredCarousel = () => {
  return (
    <Carousel
      plugins={[Autoplay({ delay: 3000 })]}
      opts={{
        align: "center",
        loop: true,
      }}
    >
      <CarouselContent>
        {images.map((img, index) => (
          <CarouselItem key={index} className="relative h-[400px]">
            <Image
              src={img}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default InspiredCarousel;
