"use server";

import { redirect } from "next/navigation";
import InteriorDoorsDetails from "@/Components/Pages/InteriorDoors/InteriorDoorDetails";
import { getDoorsById } from "@/services/DoorService";

const InteriorDoorDetailsPage = async ({
  params,
}: {
  params: Promise<{ doorId: string }>;
}) => {
  const { doorId } = await params;

  const invalidCategories = new Set(["flushDoors", "bifoldDoors"]);
  if (invalidCategories.has(doorId)) {
    redirect("/interior-doors");
  }

  const door = await getDoorsById(doorId);

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