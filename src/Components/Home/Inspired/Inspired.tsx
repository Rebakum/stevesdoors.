import InspiredCarosul from "./InspiredCarosul";

const Inspired = () => {
  return (
    <div className=" c0ntainer mx-auto my-12">
      <div className="flex flex-col gap-8 md:flex-row items-center justify-center p-8  bg-gray-100">
        <div className="w-full md:w-1/3 text-center md:text-start border-l-8 border-blue-900 pl-4 h-10">
          <h1 className="text-2xl text-start md:text-3xl font-bold text-gray-800 leading-tight mb-6">
            Get Inspired
          </h1>
        </div>
        <p className="text-gray-600 text-lg w-full md:w-2/3">
          Browse the gallery of interior and exterior door designs.
        </p>
      </div>
      <InspiredCarosul />
    </div>
  );
};

export default Inspired;
