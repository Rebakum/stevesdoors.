"use client";
import Image from "next/image";

const Profile = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-4">Profile</h2>

      {/* Add more profile related content here */}
      <div className="max-w-6xl mx-auto p-6 bg-white rounded-md shadow-md space-y-4">
        <Image
          src="/path/to/image.jpg"
          alt="Profile Picture"
          width={150}
          height={150}
          className="rounded-full mx-auto"
        />
        <p> John Doe</p>
        <p> john.doe@example.com</p>
        <p>Admin</p>
      </div>
    </div>
  );
};

export default Profile;
