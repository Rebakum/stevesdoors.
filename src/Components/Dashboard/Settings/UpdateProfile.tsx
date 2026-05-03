"use client";

import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/Ui/avatar";
import { Save } from "lucide-react";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import axios from "axios";

const UpdateProfile = () => {
  const { user, isLoading, setUser } = useUser();
  const router = useRouter();


  const [name, setName] = useState<string>("");
  const [imageFile, setImageFile] = useState<File | null>(null);

  // Initialize name when user data is loaded
  useEffect(() => {
    if (user?.name) {
      setName(user.name);
    }
  }, [user?.name]);

  if (isLoading) return <div>Loading...</div>;
  if (!user) return <div>Please login</div>;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user?._id) {
      alert("User ID not found");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", name);

      if (imageFile) {
        formData.append("image", imageFile);
      }

      const { data } = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/users/${user._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setUser(data.data);

      alert("Profile updated successfully");
      router.push("/profile");
    } catch (error) {
      console.log(error);
      alert("Update failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-xl bg-white p-6 rounded-xl shadow-lg">

        {/* Avatar */}
        <div className="flex flex-col items-center mb-6">
          <Avatar className="w-24 h-24">
            <AvatarImage
              src={
                imageFile
                  ? URL.createObjectURL(imageFile)
                  : user?.image || "https://github.com/shadcn.png"
              }
            />
            <AvatarFallback>
              {name?.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Name */}
          <div>
            <label>Name</label>
            <input
              className="w-full border p-2 rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* File */}
          <div>
            <label>Profile Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setImageFile(e.target.files?.[0] || null)
              }
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded flex items-center justify-center gap-2"
          >
            <Save className="w-4 h-4" />
            Update Profile
          </button>

        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;