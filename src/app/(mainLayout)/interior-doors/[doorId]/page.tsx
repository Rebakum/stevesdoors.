"use server";

import InteriorDoorsDetails from "@/Components/Pages/InteriorDoors/InteriorDoorDetails";
import { getDoorsById } from "@/services/DoorService";

const InteriorDoorDetailsPage = async ({
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
    <div className="container mx-auto bg-gray-400">
      <InteriorDoorsDetails door={door} />
    </div>
  );
};

export default InteriorDoorDetailsPage;