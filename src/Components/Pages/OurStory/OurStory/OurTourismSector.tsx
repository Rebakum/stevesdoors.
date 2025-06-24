import Image2 from "@/assets/images/Story/2.jpg";
import Image3 from "@/assets/images/Story/3.jpg";
import Image4 from "@/assets/images/Story/4.jpg";
import Image from "next/image";

const OurTourismSector = () => {
  return (
    <div className="mx-auto container py-12 px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 min-h-screen">
        {/* Text Section */}
        <div className="flex flex-col justify-center  h-[600px] p-6 border-2 rounded-sm">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">
            Akbar’s Role in Bangladesh’s Tourism Sector
          </h3>
          <p className="mb-4">
            Akbar Dore has played a key role in building and developing
            five-star hotels and resorts across Bangladesh’s tourism zones. Some
            notable establishments:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Le Meridien (Five-Star Hotel, Dhaka)</li>
            <li>The Palace Resort (Habiganj, Sylhet)</li>
            <li>Six Seasons (Gulshan)</li>
            <li>Royal Tulip (Banani)</li>
            <li>Hotel Marino</li>
            <li>Chittagong Boat Club (Navy)</li>
            <li>Best Western (Cox’s Bazar)</li>
            <li>Grand Sylhet</li>
            <li>Long Beach (Cox’s Bazar)</li>
          </ul>
        </div>

        {/* Image 1 */}
        <div className="relative w-full h-[600px]">
          <Image
            src={Image2}
            alt="Tourism 2"
            fill
            className="object-cover rounded-sm"
          />
        </div>

        {/* Image 2 */}
        <div className="relative w-full h-[600px]">
          <Image
            src={Image3}
            alt="Tourism 3"
            fill
            className="object-cover rounded-sm"
          />
        </div>

        {/* Image 3 */}
        <div className="relative w-full h-[600px]">
          <Image
            src={Image4}
            alt="Tourism 4"
            fill
            className="object-cover rounded-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default OurTourismSector;
