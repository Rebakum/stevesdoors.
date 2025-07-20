"use client";
import { useState } from "react";

type FormData = {
  name: string;
  image: File | null;
  description: string;
  category: string;
  type: string;
  model: string;
};

const DoorUpdate = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    image: null,
    description: "",
    category: "",
    type: "",
    model: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    setFormData({ ...formData, [name]: val });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData({ ...formData, image: file });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit logic here
    console.log(formData);
  };

  return (
    <div className="container mx-auto py-12 px-6 space-y-6">
      <h2 className="text-2xl font-bold text-center mb-4">Update Door</h2>
      <form
        onSubmit={handleSubmit}
        className=" mx-auto bg-white p-6 rounded-md shadow-md space-y-4"
      >
        <div>
          <label className="block text-sm font-medium">Title</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Door name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <div className="flex gap-2">
          <div className="flex-1">
            <label className="block text-sm font-medium">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
            >
              <option value="">Select a Category</option>
              <option value="molded">Molded Panel Doors</option>
              <option value="glass">UGlass Doors</option>
              <option value="flush">Flush Doors</option>
              <option value="bifold">Bifold Doors</option>
            </select>
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium">Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
            >
              <option value="">Select a Type</option>
              <option value="interior">Interior</option>
              <option value="exterior">Exterior</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            name="description"
            placeholder="Enter description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Model</label>
          <input
            name="model"
            placeholder="Enter model"
            value={formData.model}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Door Image</label>
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            className="w-full"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
        >
          Update Door
        </button>
      </form>
    </div>
  );
};

export default DoorUpdate;
