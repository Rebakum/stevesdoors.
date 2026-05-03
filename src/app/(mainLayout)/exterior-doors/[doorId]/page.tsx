import ExteriorDoorsDetails from "@/Components/Pages/ExteriorDoors/ExteriorDoorsDetails";
import { getDoorsById } from "@/services/DoorService";

const ExteriorDoorDetailsPage = async ({
  params,
}: {
  params: { doorId: string };
}) => {
  const door = await getDoorsById(params.doorId);


  if (!door) {
    return (
      <p className="pt-32 text-center text-red-500">
        Failed to load door data
      </p>
    );
  }

  return (
    <div className="container mx-auto bg-gray-400 min-h-screen">
      <h1 className="text-2xl font-bold text-center py-6">
        Exterior Door Details
      </h1>

      <ExteriorDoorsDetails door={door} />
    </div>
  );
};

export default ExteriorDoorDetailsPage;