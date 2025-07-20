import Banner1 from "@/Components/Banner/Banner1";
import InteriorDoors from "@/Components/Pages/InteriorDoors/InteriorDoors";
import StunningInteriorDoors from "@/Components/Pages/InteriorDoors/StunningInteriorDoors/StunningInteriorDoors";
import InfoSection from "@/Components/Sheared/InfoSection/InfoSection";

const interiorDoors = () => {
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
