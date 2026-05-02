"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/Components/Ui/avatar";
import { useUser } from "@/context/UserContext";
import { Mail, ShieldCheck, UserCircle } from "lucide-react";
import Link from "next/link";

const MyProfile = () => {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-lg font-semibold">
        Loading...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex justify-center items-center text-center text-lg">
        Please log in to view your profile.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-indigo-100 flex justify-center items-center px-4 py-10">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-8 text-center border border-white/30">
        
        {/* Profile Header */}
        <div className="flex flex-col items-center">
          <div className="relative">
            <Avatar className="w-28 h-28 border-4 border-white shadow-lg">
              <AvatarImage
                src={user?.image || "https://github.com/shadcn.png"}
                alt={user?.name || "User"}
              />
              <AvatarFallback className="text-xl font-bold">
                {user?.name?.slice(0, 2).toUpperCase() || "U"}
              </AvatarFallback>
            </Avatar>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mt-4">
            {user?.name}
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Welcome to your profile dashboard
          </p>
        </div>

        {/* Profile Info */}
        <div className="mt-8 space-y-4">
          
          {/* Name */}
          <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl shadow-sm">
            <UserCircle className="text-purple-500 w-6 h-6" />
            <div className="text-left">
              <p className="text-sm text-gray-500">Full Name</p>
              <p className="font-medium text-gray-800">{user?.name}</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl shadow-sm">
            <Mail className="text-pink-500 w-6 h-6" />
            <div className="text-left">
              <p className="text-sm text-gray-500">Email Address</p>
              <p className="font-medium text-gray-800">{user?.email}</p>
            </div>
          </div>

          {/* Role */}
          <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl shadow-sm">
            <ShieldCheck className="text-indigo-500 w-6 h-6" />
            <div className="text-left">
              <p className="text-sm text-gray-500">Role</p>
              <p className="font-medium text-gray-800 capitalize">
                {user?.role}
              </p>
            </div>
          </div>
        </div>

   <Link href="/settings/update-profile">
     <button className="mt-8 w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl font-semibold shadow-md hover:scale-105 transition-transform duration-300">
       Edit Profile
     </button>
   </Link>
      </div>
    </div>
  );
};

export default MyProfile;