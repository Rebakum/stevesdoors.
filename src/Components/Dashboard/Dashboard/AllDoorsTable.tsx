"use client";
import { useUser } from "@/context/UserContext";

import { deleteDoorById } from "@/services/DoorService";
import { DoorData } from "@/types/Door";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

interface AllDoorsTableProps {
  doors: DoorData[];
}

const AllDoorsTable = ({ doors }: AllDoorsTableProps) => {
  const { user } = useUser();
  const [doorList, setDoorList] = useState<DoorData[]>(doors);

  if (!user) {
    return <div className="text-center">Please log in to view the doors.</div>;
  }

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this door?"
    );
    if (!confirmDelete) return;
    const toastId = toast.loading("Deleting Door ....");

    try {
      await deleteDoorById(id);
      const updatedList = doorList.filter((door) => door.id !== id);
      setDoorList(updatedList);
      toast.success("Door deleted successfully!", {
        id: toastId,
      });
    } catch (error) {
      console.error("Failed to delete door:", error);
      toast.error("Failed to delete. Try again.", {
        id: toastId,
      });
    }
  };

  return (
    <div className="max-w-6xl mx-auto mt-24 p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">All Doors Data</h2>
        <div className="flex gap-3">
          <input
            type="search"
            placeholder="Search Doors..."
            className="px-2 py-2"
          />
          <Link href="/doors/add_door">
            <button className="px-4 py-2 bg-blue-500 text-white rounded">
              Add Door
            </button>
          </Link>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border text-sm text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border">Image</th>
              <th className="p-2 border">Title</th>
              <th className="p-2 border">Category</th>
              <th className="p-2 border">Door Type</th>
              <th className="p-2 border">Model</th>
              <th className="p-2 border text-center">Delete</th>
              <th className="p-2 border text-center">Edit</th>
            </tr>
          </thead>
          <tbody>
            {doorList.map((door) => (
              <tr key={door.id}>
                <td className="p-2 border">
                  <Image
                    src={door.images?.[0] || "/placeholder.jpg"}
                    alt={door.title}
                    width={60}
                    height={40}
                  />
                </td>
                <td className="p-2 border">{door.title}</td>
                <td className="p-2 border">{door.category}</td>
                <td className="p-2 border">{door.doorType}</td>
                <td className="p-2 border">{door.model}</td>
                <td className="p-2 border text-center">
                  <button
                    onClick={() => handleDelete(door.id)}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
                <td className="p-2 border text-center">
                  <Link href={`/doors/doors_update/${door.id}`}>
                    <span className="text-blue-500 hover:underline">Edit</span>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllDoorsTable;
