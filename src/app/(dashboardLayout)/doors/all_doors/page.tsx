import AllDoorsTable from "@/Components/Dashboard/Dashboard/AllDoorsTable";

const allDoors = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">All Doors</h1>
      <div className="overflow-x-auto">
        <AllDoorsTable />
      </div>
    </div>
  );
};

export default allDoors;
