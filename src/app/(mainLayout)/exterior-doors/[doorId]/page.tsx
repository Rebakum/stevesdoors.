// app/exterior-doors/[doorid]/page.tsx

import ExteriorDoorsDetails from "@/Components/Pages/ExteriorDoors/ExteriorDoorsDetails";

const ExteriorDoorDetailsPage = async ({
  params,
}: {
  params: { doorId: string };
}) => {
  console.log(await params);
  const { doorId } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/doors?doorType=interior&id=${doorId}`,
    { cache: "no-store" }
  );

  const data = await res.json();
  console.log({ data });
  const door = Array.isArray(data) ? data[0] : data;
  console.log(door);

  return (
    <div className="container mx-auto  bg-gray-400 min-h-screen">
      <h1>Exterior Door Details</h1>

      <ExteriorDoorsDetails door={door} />
    </div>
  );
};

export default ExteriorDoorDetailsPage;
