"use client";
import BeautifulExteriorDoors from "@/Components/Home/BeautifulExteriorDoors";
import DoorTypes from "@/Components/Home/DoorTypes/DoorTypes";
import Featured from "@/Components/Home/Featured/Featured";
import HeroBanner from "@/Components/Home/HeroBanner";
import Inspired from "@/Components/Home/Inspired/Inspired";
import StylishInteriorDoors from "@/Components/Home/StylishInteriorDoors";
import InfoSection from "@/Components/Sheared/InfoSection/InfoSection";
import { useUser } from "@/context/UserContext";

const HomePage = () => {
  const user = useUser();
  console.log(user);

  return (
    <>
      <HeroBanner />
      <StylishInteriorDoors />
      <BeautifulExteriorDoors />
      <DoorTypes />
      <Inspired />
      <Featured />
      <InfoSection />
    </>
  );
};

export default HomePage;
