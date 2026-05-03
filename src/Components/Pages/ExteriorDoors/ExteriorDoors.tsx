import type { Door } from "@/types/Door";
import ExteriorDoorCart from "./ExteriorDoors/ExteriorDoorsCart";

const ExteriorDoors = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/doors?doorType=exterior`,
      {
        next: {
          revalidate: 30,
        },
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch exterior doors: ${res.statusText}`);
    }

    const result = await res.json();
    const doors = result.data || [];
    console.log(doors);

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
              <ExteriorDoorCart key={door._id} door={door} />
            ))}
          </div>
        )}
      </div>
    );
  } catch (error) {
    console.error("Error loading exterior doors:", error);
    return (
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Exterior Doors
        </h2>
        <p className="text-center text-red-500">Failed to load exterior doors. Please try again later.</p>
      </div>
    );
  }
};

export default ExteriorDoors;
