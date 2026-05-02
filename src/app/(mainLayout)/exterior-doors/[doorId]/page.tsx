// app/exterior-doors/[doorid]/page.tsx

import ExteriorDoorsDetails from "@/Components/Pages/ExteriorDoors/ExteriorDoorsDetails";
import { getDoorsById } from "@/services/DoorService";

const ExteriorDoorDetailsPage = async ({
  params,
}: {
  params: { doorId: string };
}) => {
  const { doorId } = await params;
  const door = await getDoorsById(doorId);

  if (!door?.status) {
    return <p className="pt-32 text-center">Failed to load door data</p>;
  }

  return (
    <div className="container mx-auto  bg-gray-400 min-h-screen">
      <h1>Exterior Door Details</h1>

      <ExteriorDoorsDetails door={door} />
    </div>
  );
};

export default ExteriorDoorDetailsPage;
