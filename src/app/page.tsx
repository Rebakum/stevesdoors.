import BeautifulExteriorDoors from "@/Components/Home/BeautifulExteriorDoors";
import DoorTypes from "@/Components/Home/DoorTypes/DoorTypes";

import HeroBanner from "@/Components/Home/HeroBanner";
import Inspired from "@/Components/Home/Inspired/Inspired";
import StylishInteriorDoors from "@/Components/Home/StylishInteriorDoors";
import InfoSection from "@/Components/Sheared/InfoSection/InfoSection";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <StylishInteriorDoors />
      <BeautifulExteriorDoors />
      <DoorTypes />
      <Inspired />
      <InfoSection />
    </>
  );
}
