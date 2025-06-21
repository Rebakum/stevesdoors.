import { Card, CardContent } from "@/Components/Ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/Ui/carousel";
import interiorDoor3 from "@/assets/images/Interior Doors/Bifold_Doors.png";

import interiorDoor2 from "@/assets/images/Interior Doors/glass-doors.png";
import interiorDoor4 from "@/assets/images/Interior Doors/wood-panel-doors.png";
import Image from "next/image";

const DoorTypesCarousel = () => {
  return (
    <div>
      <Carousel
        opts={{
          align: "center",
        }}
        className="w-3/4 mx-auto my-8"
      >
        <CarouselContent>
          {doorTypes.map((door) => (
            <CarouselItem key={door.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="flex items-center justify-center">
                <Card className="w-full max-w-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="flex flex-col border-none items-center justify-center">
                    <div className=" w-full flex items-center justify-center">
                      <Image
                        src={door.image}
                        alt="Molded Panel Door"
                        width={300}
                        height={600}
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-center">
                      {door.title}
                    </h3>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

const doorTypes = [
  {
    id: 1,
    title: "Interior Door",
    image: interiorDoor2,
  },
  {
    id: 2,
    title: "Exterior Door",
    image: interiorDoor3,
  },
  {
    id: 3,
    title: "French Door",
    image: interiorDoor2,
  },
  {
    id: 4,
    title: "Sliding Door",
    image: interiorDoor3,
  },
  {
    id: 5,
    title: "Barn Door",
    image: interiorDoor4,
  },
];

export default DoorTypesCarousel;
