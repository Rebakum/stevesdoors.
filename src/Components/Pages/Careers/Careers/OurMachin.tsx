import machinImage from "@/assets/images/Story/akaba-machin-min.jpg";
import Image from "next/image";

const OurMachin = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
        <div className="lg:w-1/2 p-4 space-y-4">
          <h1 className="text-2xl font-semibold">Our Purpose</h1>
          <p>
            A family company welcoming families home with style, craftsmanship,
            and value for generations.
          </p>

          <h1 className="text-2xl font-semibold">Our Values</h1>
          <ul className="list-disc list-inside space-y-1">
            <li>Provide a clean safe work environment</li>
            <li>Treat others with dignity and respect</li>
            <li>
              Constantly improve our business practices (Total Systems approach)
            </li>
          </ul>

          <h1 className="text-2xl font-semibold">Our Goals</h1>
          <p>
            Provide our customer with a quality, cost competitive,
            environmentally friendly product in a safe and timely manner.
          </p>
        </div>

        <div className="lg:w-1/2 p-4 space-y-4">
          <h1 className="text-2xl font-semibold">Equal Opportunity Employer</h1>
          <p>
            Akaba is an Equal Opportunity Employer. Akaba does not discriminate
            on the basis of race, religion, color, sex, gender identity, sexual
            orientation, age, non-disqualifying physical or mental disability,
            national origin, veteran status or any other basis covered by
            appropriate law. All employment is decided on the basis of
            qualifications, merit, and business need.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative w-full h-[500px] mt-10">
        <Image
          src={machinImage}
          alt="Machin Image"
          fill
          className="object-cover rounded-sm"
          priority
        />
      </div>
    </div>
  );
};

export default OurMachin;
