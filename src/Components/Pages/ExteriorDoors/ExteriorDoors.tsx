import door1 from "@/assets/images/ExteriorDoors/Direct_Glazed_Fiberglass_Doors.png";
import door2 from "@/assets/images/ExteriorDoors/Element-steel-door.png";
import ExteriorDoorCart from "./Exterior Doors/ExteriorDoorsCart";

const ExteriorDoors = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {doors.map((door, idx) => (
          <ExteriorDoorCart key={idx} door={door} />
        ))}
      </div>
    </div>
  );
};
const doors = [
  {
    img: door1.src,
    title: "Element Steel Doors",
    description:
      "Steel doors stand up to harsh environmental conditions and resist warping and moisture. These low-maintenance doors are primed for easy painting and are available in a variety of high-definition panel designs.",
  },
  {
    img: door2.src,
    title: "Reliant Smooth Fiberglass Doors",
    description:
      "Smooth fiberglass doors are easy to paint to match any décor, and feature an insulating core for energy efficiency. These low-maintenance doors won’t crack, split or warp, offering years of trouble-free performance.",
  },
];

export default ExteriorDoors;
