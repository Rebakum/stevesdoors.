// components/InfoSection.jsx
import Image2 from "@/assets/images/catalogue.png";
import Image1 from "@/assets/images/guarantee.png";
import Image3 from "@/assets/images/techincal.png";
import Image4 from "@/assets/images/Wrench-01-1.svg";
import Image from "next/image";

const InfoSection1 = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="  flex flex-col justify-center  items-center border-l-8 pl-4  gap-3 border-gray-100 "
          >
            <div className="flex items-center gap-3 justify-center">
              <Image
                src={item.icon}
                alt={item.title}
                className="w-12 h-12 object-contain "
              />
            </div>

            <h3 className="text-blue-900 font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
const items = [
  {
    icon: Image1,
    title: "Warranty Information",
    description:
      "Steves & Sons Products are designed and built to provide lasting value for your home. View or download product warranties for all Steves Doors products.",
  },
  {
    icon: Image2,
    title: "Downloadable Catalogs",
    description:
      "Browse and download our latest product catalogs to explore the full range of Steves & Sons doors and accessories.",
  },
  {
    icon: Image3,
    title: "Technical Information",
    description:
      "Steves & Sons also offers a large variety of door styles in many sizes. The technical manuals contain a matrix of the common sizes against the styles we offer.",
  },
  {
    icon: Image4,
    title: "How-To",
    description:
      "Welcome to our 'How-To' section! Here, you’ll find step-by-step instructions and helpful videos designed to guide you through the process of installing our products.",
  },
];

export default InfoSection1;
