"use client";
import addDoor from "@/action/addDoor";
import { useRef, useState } from "react";

type FormData = {
  title: string;
  image: string | File | null;
  description: string;
  category: string;
  type: string;
  model: string;
};

const AddDoorFrom = () => {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    image: null,
    description: "",
    category: "",
    type: "",
    model: "",
  });

  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    if (name === "type") {
      setFormData({ ...formData, type: value, category: "" });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData({ ...formData, image: file });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="container mx-auto py-12 px-6 space-y-6">
      <h2 className="text-2xl font-bold text-center mb-4">Add Doors</h2>
      <form
        action={addDoor}
        ref={formRef}
        method="POST"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
        className="mx-auto bg-white p-6 rounded-md shadow-md space-y-4"
      >
        <div>
          <label className="block text-sm font-medium">Door Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter Door title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <div className="flex flex-col md:flex-row gap-2">
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

          <div className="flex-1">
            <label className="block text-sm font-medium">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
              disabled={!formData.type}
            >
              <option value="">Select a Category</option>

              {formData.type === "interior" && (
                <>
                  <option value="molded">Molded Panel Doors</option>
                  <option value="glass">Glass Doors</option>
                  <option value="flush">Flush Doors</option>
                  <option value="bifold">Bifold Doors</option>
                </>
              )}

              {formData.type === "exterior" && (
                <>
                  <option value="molded">Element Steel Doors</option>
                  <option value="glass">Reliant Fiberglass Doors</option>
                  <option value="flush">Regency Fiberglass Doors</option>
                  <option value="bifold">Legacy Fiberglass Doors</option>
                </>
              )}
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
          <div>
            <label className="block text-sm font-medium">Cover Image</label>
            <input
              type="file"
              name="image"
              onChange={handleImageChange}
              className="w-full"
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
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
        >
          Add Door
        </button>
      </form>
    </div>
  );
};

export default AddDoorFrom;
