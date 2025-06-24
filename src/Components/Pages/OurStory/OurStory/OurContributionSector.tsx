import Image5 from "@/assets/images/Story/5.jpg";
import Image from "next/image";

const OurContributionSector = () => {
  return (
    <div className="mx-auto container py-12 px-8">
      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-3">
        <div className="relative w-full md:w-1/2 h-[550px]">
          <Image
            src={Image5}
            alt="Tourism 3"
            fill
            className="object-cover rounded-sm"
          />
        </div>

        <div className="w-full flex-col md:w-1/2 p-20 flex justify-center items-center bg-gray-300 h-[550px]">
          <h1 className="text-3xl md:text-6xl mb-4  font-semibold text-gray-800">
            Akbar’s Contribution to <br />
            the Housing Sector
          </h1>
          <p className="text-justify">
            Akbar’s Contribution to the Housing Sector Akbar Dore, in
            collaboration with Advance Development Ltd, SPL Builders Ltd,
            Oriental Builders Ltd, and other renowned firms, has contributed
            significantly to housing development. Projects include high-rise
            buildings, commercial spaces, shopping malls, schools, and colleges
            in Dhaka, Chattogram, and other major cities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurContributionSector;
