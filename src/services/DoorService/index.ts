"use server";

import { DoorData, DoorResponse } from "@/types/Door";

//  GET ALL
export const getAllDoors = async (): Promise<DoorData[]> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/doors`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch doors: ${res.statusText}`);
    }

    const result = await res.json();

    return result?.data?.map((door: any) => ({
      id: door._id,
      title: door.title,
      description: door.description,
      coverImage: door.coverImage,
      images: door.images,
      category: door.category,
      doorType: door.doorType,
      model: door.model,
    })) || [];
  } catch (error: any) {
    console.error("Error fetching doors:", error);
    return [];
  }
};

//  GET BY ID (FIXED)
export const getDoorsById = async (
  id: string
): Promise<DoorData | null> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/doors/${id}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      console.error(`Door fetch failed: ${res.status} ${res.statusText}`);
      return null;
    }

    const result: DoorResponse = await res.json();
    const door = result?.data || result;

    if (!door) {
      return null;
    }

    return {
      id: door._id || door.id,
      title: door.title,
      description: door.description,
      coverImage: door.coverImage,
      images: door.images,
      category: door.category,
      doorType: door.doorType,
      model: door.model,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};

// CREATE
export const createDoor = async (formData: FormData) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/doors/create-door`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Failed to create door");
    }

    return await res.json();
  } catch (error: any) {
    console.error("Error creating door:", error);
    throw error;
  }
};

// DELETE
export const deleteDoorById = async (
  id: string
): Promise<{ message: string }> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/doors/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error(`Failed to delete door: ${res.statusText}`);
    }

    return await res.json();
  } catch (error: any) {
    console.error("Error deleting door:", error);
    throw error;
  }
};