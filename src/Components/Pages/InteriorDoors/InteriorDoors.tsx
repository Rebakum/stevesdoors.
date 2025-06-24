import door1 from "@/assets/images/InteriorDoors/id-1.png";
import door2 from "@/assets/images/InteriorDoors/id-2.png";
import InteriorDoorCart from "./InteriorDoorCart";

const InteriorDoors = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {interiorDoors.map((door, idx) => (
          <InteriorDoorCart key={idx} door={door} />
        ))}
      </div>
    </div>
  );
};
const interiorDoors = [
  {
    title: "Molded Panel Doors",
    img: door1.src,
    description:
      "Molded panel doors resist shrinking, swelling, cracking and splitting. Available in a wide variety of sizes, they can be painted or stained to match any décor. Splitting. Available in a wide variety of sizes, they can be painted or stained to match any décor.",
  },
  {
    title: "Ultra MDF Doors",
    img: door2.src,
    description:
      "Primed doors are assembled by hand and manufactured to exact specifications. Made with a durable LVL core and HDF face with true stile and rail construction, these doors offer sound reduction in multiple design options to match your home’s style.",
  },
];

export default InteriorDoors;
