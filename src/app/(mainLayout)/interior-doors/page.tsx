import Banner1 from "@/Components/Banner/Banner1";
import InteriorDoors from "@/Components/Pages/InteriorDoors/InteriorDoors";
import StunningInteriorDoors from "@/Components/Pages/InteriorDoors/StunningInteriorDoors/StunningInteriorDoors";
import InfoSection from "@/Components/Sheared/InfoSection/InfoSection";
import { getCurrentUser } from "@/services/AuthService";

const interiorDoors = async () => {
  const user = getCurrentUser();
  console.log(user);
  return (
    <div>
      <Banner1 />
      <InteriorDoors />
      <StunningInteriorDoors />

      <InfoSection />
    </div>
  );
};

export default interiorDoors;
