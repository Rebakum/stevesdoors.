"use client";

import AkabaImageUploader, {
  AkabaCoverImageUploader,
} from "@/Components/Ui/core/AkabaImageUploader";
import ImagePreviewer, {
  CoverImagePreviewer,
} from "@/Components/Ui/core/AkabaImageUploader/ImagePreviwer";
import { useUser } from "@/context/UserContext";
import { createDoor } from "@/services/DoorService";
import { useRouter } from "next/navigation";

import { useRef, useState } from "react";
import { toast } from "sonner";

type FormData = {
  title: string;
  images: File[] | null;
  coverImage?: File | null;
  description: string;
  category: string;
  doorType: string;
  model: string;
};

const AddDoorForm = () => {
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [imagePreview, setImagePreview] = useState<string[]>([]);
  const [coverImageFiles, setCoverImageFiles] = useState<File[]>([]);
  const [coverImagePreview, setCoverImagePreview] = useState<string[]>([]);
  const formRef = useRef<HTMLFormElement>(null);
  const { user, isLoading, setIsLoading } = useUser();
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    title: "",
    images: null,
    coverImage: null,
    description: "",
    category: "",
    doorType: "",
    model: "",
  });
  if (isLoading) {
    return <div className="text-center">Loading user...</div>;
  }
  if (!user) {
    return <div className="text-center">Please log in to add a door.</div>;
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    if (name === "doorType") {
      setFormData((prev) => ({ ...prev, doorType: value, category: "" }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const dataToSend = new FormData();
    dataToSend.append("data", JSON.stringify(formData));

    imageFiles.forEach((file) => dataToSend.append("images", file));
    if (coverImageFiles[0]) dataToSend.append("coverImage", coverImageFiles[0]);

    try {
      const result = await createDoor(dataToSend);
      console.log("Add door result:", result);
      if (result.stutas) {
        toast.success("Door added successfully!");
        setTimeout(() => {
          router.push("/all_doors");
        }, 500);
      }
    } catch (error) {
      console.error("Add door failed:", error);
    }
  };

  return (
    <div className="container mx-auto max-w-4xl mt-24 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        🛠️ Add New Door
      </h2>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-xl p-8 space-y-8"
      >
        {/* Basic Info */}
        <div className="space-y-4">
          <label className="block text-sm font-semibold text-gray-700">
            Door Title
          </label>
          <input
            type="text"
            name="title"
            placeholder="e.g. Classic Wooden Door"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 focus:border-black rounded-lg px-4 py-2 outline-none"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Door Type
              </label>
              <select
                name="doorType"
                value={formData.doorType}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 focus:border-black rounded-lg px-4 py-2"
              >
                <option value="">Select Door Type</option>
                <option value="interior">Interior</option>
                <option value="exterior">Exterior</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                disabled={!formData.doorType}
                className="w-full border border-gray-300 focus:border-black rounded-lg px-4 py-2"
              >
                <option value="">Select Category</option>
                {formData.doorType === "interior" && (
                  <>
                    <option value="molded">Molded Panel Doors</option>
                    <option value="glass">Glass Doors</option>
                    <option value="flush">Flush Doors</option>
                    <option value="bifold">Bifold Doors</option>
                  </>
                )}
                {formData.doorType === "exterior" && (
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
            <label className="block text-sm font-semibold text-gray-700">
              Model
            </label>
            <input
              type="text"
              name="model"
              placeholder="Model number or name"
              value={formData.model}
              onChange={handleChange}
              className="w-full border border-gray-300 focus:border-black rounded-lg px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              rows={4}
              placeholder="Enter details about the door..."
              value={formData.description}
              onChange={handleChange}
              className="w-full border border-gray-300 focus:border-black rounded-lg px-4 py-2"
            />
          </div>
        </div>

        {/* Door Images */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-gray-700 text-center">
            📷 Door Images
          </h4>
          <div className="flex flex-col md:flex-row items-start gap-6">
            <ImagePreviewer
              setImageFiles={setImageFiles}
              imagePreview={imagePreview}
              setImagePreview={setImagePreview}
              className="flex-1 w-full"
            />
            <AkabaImageUploader
              setImageFiles={setImageFiles}
              setImagePreview={setImagePreview}
              label="Upload Door Image"
              className="w-full md:w-1/4"
            />
          </div>
        </div>

        {/* Cover Image */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-gray-700 text-center">
            🖼️ Cover Image
          </h4>
          <div className="flex flex-col md:flex-row items-start gap-6">
            {coverImagePreview.length > 0 ? (
              <CoverImagePreviewer
                setCoverImageFiles={setCoverImageFiles}
                coverImagePreview={coverImagePreview}
                setCoverImagePreview={setCoverImagePreview}
                className="w-full md:w-3/4"
              />
            ) : (
              <AkabaCoverImageUploader
                setCoverImageFiles={setCoverImageFiles}
                setCoverImagePreview={setCoverImagePreview}
                label="Upload Cover Image"
                className="w-full md:w-1/4"
              />
            )}
          </div>
        </div>

        {/* Submit */}
        <div className="pt-6">
          <button
            type="submit"
            className="w-full bg-black text-white py-3 px-6 rounded-lg text-lg hover:bg-gray-900 transition"
          >
            ➕ Add Door
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddDoorForm;
