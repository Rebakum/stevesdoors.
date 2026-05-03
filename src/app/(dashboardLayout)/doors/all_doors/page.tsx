"use server";
import AllDoorsTable from "@/Components/Dashboard/Dashboard/AllDoorsTable";
import { getAllDoors } from "@/services/DoorService";

const AllDoorsPage = async () => {
  const doorData = await getAllDoors();

  return (
    <div className="overflow-x-auto">
      <AllDoorsTable doors={doorData} />
    </div>
  );
};

export default AllDoorsPage;
