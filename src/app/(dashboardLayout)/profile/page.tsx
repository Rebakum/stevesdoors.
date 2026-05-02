import MyProfile from "@/Components/Dashboard/MyProfile/MyProfile";

const ProfilePage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">My Profile</h1>
      {/* Uncomment the line below to include the MyProfile component */}
      <MyProfile />
    </div>
  );
};

export default ProfilePage;
