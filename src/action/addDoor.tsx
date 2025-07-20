"use server";

import { redirect } from "next/navigation";

const addDoor = async (data: FormData) => {
  console.log("FormData received on server:", data);

  const res = await fetch("http://localhost:5000/doors", {
    method: "POST",
    body: data,
  });

  if (!res.ok) {
    throw new Error("Failed to add door");
  }

  const doorInfo = await res.json();

  if (doorInfo?.id) {
    redirect(`/doors/${doorInfo.id}`);
  }

  return doorInfo;
};

export default addDoor;
