import Banner1 from "@/Components/Banner/Banner1";
import Doors from "@/Components/Pages/InteriorDoors/Doors";
import StunningInteriorDoors from "@/Components/Pages/InteriorDoors/StunningInteriorDoors/StunningInteriorDoors";
import InfoSection from "@/Components/Sheared/InfoSection/InfoSection";

const page = () => {
  return (
    <div>
      <Banner1 />
      <Doors />
      <StunningInteriorDoors />

      <InfoSection />
    </div>
  );
};

export default page;
