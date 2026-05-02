"use server";
import AllDoorsTable from "@/Components/Dashboard/Dashboard/AllDoorsTable";
import { getAllDoors } from "@/services/DoorService";
import { Door } from "@/types/Door";

const AllDoorsPage = async () => {
  const doorData = await getAllDoors();

  const doors: Door[] = doorData.map((item) => ({
    id: item._id,
    title: item.title,
    images: item.images,
    description: item.description,
    coverImage: item.coverImage,
    category: item.category,
    doorType: item.doorType,
    model: item.model,
  }));

  return (
    <div className="overflow-x-auto">
      <AllDoorsTable doors={doors} />
    </div>
  );
};

export default AllDoorsPage;
