import type { Door } from "@/app/types/Door";
import ExteriorDoorCart from "./ExteriorDoors/ExteriorDoorsCart";

const ExteriorDoors = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/doors?doorType=exterior`,
    {
      next: {
        revalidate: 30,
      },
    }
  );

  const result = await res.json();
  const doors = result.data;

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold text-center mb-8">
        Exterior Doors
      </h2>

      {doors.length === 0 ? (
        <p className="text-center text-gray-500">No exterior doors found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {doors.map((door: Door) => (
            <ExteriorDoorCart
              key={door.id}
              door={{ ...door, id: String(door.id) }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ExteriorDoors;
