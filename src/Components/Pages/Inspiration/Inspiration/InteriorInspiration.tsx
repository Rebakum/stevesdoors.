"use client";
import InteriorInspirationGalery from "./InteriorInspirationGalery";

const InteriorInspiration = () => {
  return (
    <div className="mx-auto container py-12">
      <div className="p-8">
        <h1 className=" w-full text-left text-gray-800  md:text-start border-l-6 border-blue-900 pl-4 h-10text-3xl md:text-5xl font-semibold leading-tight mb-6">
          Interior Door Inspiration
        </h1>
      </div>
      <InteriorInspirationGalery />
    </div>
  );
};

export default InteriorInspiration;
