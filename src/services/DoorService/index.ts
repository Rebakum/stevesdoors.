"use server";
import { DoorData } from "@/types/Door";

export const getAllDoors = async (): Promise<DoorData[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/doors`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data?.data || [];
};

export const getDoorsById = async (id: string): Promise<DoorData> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/doors/${id}`, {
    cache: "no-store",
  });

  return await res.json();
};

export const createDoor = async (formData: FormData) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/doors/create-door`,
    {
      method: "POST",
      body: formData,
    }
  );

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Failed to create door: ${errorText}`);
  }

  const data = await res.json();
  return data;
};

export const deleteDoorById = async (
  id: string
): Promise<{ message: string }> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/doors/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Failed to delete door: ${errorText}`);
  }

  const data = await res.json();
  return data;
};
