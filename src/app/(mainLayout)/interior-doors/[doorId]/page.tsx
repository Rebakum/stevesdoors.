"use server";
import InteriorDoorsDetails from "@/Components/Pages/InteriorDoors/InteriorDoorDetails";

const InteriorDoorDetailsPage = async ({
  params,
}: {
  params: { doorId: string };
}) => {
  console.log("InteriorDoorDetailsPage params:", params);

  const { doorId } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/doors?doorType=interior&id=${doorId}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    return <p className="pt-32 text-center">Failed to load door data</p>;
  }

  const data = await res.json();
  const door = Array.isArray(data) ? data[0] : data;
  console.log(door);

  return (
    <div className="container mx-auto  bg-gray-400 min-h-screen">
      <InteriorDoorsDetails door={door} />
    </div>
  );
};

export default InteriorDoorDetailsPage;
