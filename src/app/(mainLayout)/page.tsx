import { getCurrentUser } from "@/services/AuthService";

const HomePage = async () => {
  const user = await getCurrentUser();
  console.log(user);

  return (
    <>
      <h1>my home page</h1>
      {/* <HeroBanner />
      <StylishInteriorDoors />
      <BeautifulExteriorDoors />
      <DoorTypes />
      <Inspired />
      <Featured />
      <InfoSection /> */}
    </>
  );
};

export default HomePage;
