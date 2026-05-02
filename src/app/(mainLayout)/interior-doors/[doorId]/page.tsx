"use server";

import InteriorDoorsDetails from "@/Components/Pages/InteriorDoors/InteriorDoorDetails";
import { getDoorsById } from "@/services/DoorService";

const InteriorDoorDetailsPage = async ({
  params,
}: {
  params: { doorId: string };
}) => {
  const { doorId } = params;
  const door = await getDoorsById(doorId);

  if (!door?.status) {
    return <p className="pt-32 text-center">Failed to load door data</p>;
  }

  return (
    <div className="container mx-auto bg-gray-400">
      <InteriorDoorsDetails door={door} />
    </div>
  );
};

export default InteriorDoorDetailsPage;
