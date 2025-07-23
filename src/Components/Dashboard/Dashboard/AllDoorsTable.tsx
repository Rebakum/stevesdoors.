"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Door = {
  id: number;
  name: string;
  coverImage: string | null;
  image: File | null;
  description: string;
  category: string;
  type: string;
  model: string;
};

const AllDoorsTable = () => {
  const [Doors, setDoors] = useState<Door[]>([
    {
      id: 1,
      name: "Glass Panel Door",
      coverImage: null,
      image: null,
      description: "A high-quality glass panel door for modern interiors.",
      category: "UGlass Doors",
      type: "interior",
      model: "GPD-123",
    },
    {
      id: 2,
      name: "Flush Exterior Door",
      image: null,
      coverImage: null,
      description: "Durable flush door ideal for exterior use.",
      category: "Flush Exterior Doors",
      type: "exterior",
      model: "FEX-321",
    },
  ]);

  const handleDelete = (id: number) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this Door?"
    );
    if (confirm) {
      const updatedDoors = Doors.filter((Door) => Door.id !== id);
      setDoors(updatedDoors);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">All Doors</h2>
        <div className="flex gap-3 ">
          <input
            type="search"
            placeholder="Search Doors..."
            className="px-2 py-2"
          />
          <Link href="/dashboard/doors/add_door">
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
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Category</th>
              <th className="p-2 border">Type</th>
              <th className="p-2 border">Model</th>
              <th className="p-2 border text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Doors.map((Door) => (
              <tr key={Door.id} className="border-t hover:bg-gray-50">
                <td className="p-2 border">
                  {Door.image ? (
                    <Image
                      src={URL.createObjectURL(Door.image)}
                      alt={Door.name}
                      width={48}
                      height={48}
                      className="h-12 w-12 object-cover rounded"
                    />
                  ) : (
                    <span className="text-gray-400 italic">No image</span>
                  )}
                </td>
                <td className="p-2 border">{Door.name}</td>
                <td className="p-2 border">{Door.category}</td>
                <td className="p-2 border">{Door.type}</td>
                <td className="p-2 border">{Door.model}</td>
                <td className="p-2 border text-center space-x-2">
                  <Link href="/dashboard/doors/doors_update">
                    <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                      Edit
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(Door.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {Doors.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center text-gray-500 py-4">
                  No Doors found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllDoorsTable;
