import DoorTypesCarousel from "./DoorTypesCarosul";

const DoorTypes = () => {
  return (
    <div className="container mx-auto my-12">
      <div className="flex flex-col gap-8 md:flex-row items-center justify-center p-8  bg-gray-300">
        <div className="w-full md:w-1/3 text-center md:text-start border-l-8 border-blue-900 pl-4 h-10">
          <h1 className="text-2xl text-start md:text-3xl font-bold text-gray-800 leading-tight mb-6">
            Browse by Door Type
          </h1>
        </div>
        <p className="text-gray-600 text-lg w-full md:w-2/3">
          Interior and exterior door designs with endless additional features
          such as decorative glass, beautiful hardware and premium exterior
          products.
        </p>
      </div>
      <div>
        <DoorTypesCarousel />
      </div>
    </div>
  );
};

export default DoorTypes;
