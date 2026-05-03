// import door1 from "@/assets/images/InteriorDoors/id-1.png";
// import door2 from "@/assets/images/InteriorDoors/id-2.png";
import InteriorDoorCart from "./InteriorDoorCart";

import type { Door } from "@/types/Door";

// const doors: Door[] = [
//   {
//     id: 1,
//     title: "Molded Panel Doors",
//     images: [door1, door2],
//     description:
//       "Molded panel doors resist shrinking, swelling, cracking and splitting. Available in a wide variety of sizes, they can be painted or stained to match any décor. These doors are made with a durable core and high-density fiberboard (HDF) face, providing excellent sound insulation and energy efficiency. The molded design adds a touch of elegance to any interior space, making them perfect for both residential and commercial applications. Easy to install and maintain, these doors are a practical choice for modern interiors.",
//     category: "Molded Panel Doors",
//     type: "interior",
//     model: "G123-MOD",
//   },
//   {
//     id: 2,
//     title: "Ultra MDF Doors",
//     images: [door2, door1],
//     description:
//       "Primed doors are assembled by hand and manufactured to exact specifications. Made with a durable LVL core and HDF face, these doors offer sound reduction in multiple designs. They are ideal for high-traffic areas and provide a sleek, modern look. The primed finish allows for easy painting, making them versatile for any interior style. Perfect for residential or commercial use, these doors combine functionality with aesthetic appeal.",
//     category: "Ultra MDF Doors",
//     type: "interior",
//     model: "G123-ULTRA",
//   },
//   {
//     id: 3,
//     title: "Elegant Molded Panel Door",
//     images: [door1, door2],
//     description:
//       "An elegant molded panel door with classic design. Perfect for enhancing the interior aesthetics of your home. Made from high-quality materials, it offers durability and style. Ideal for living rooms, bedrooms, and more. Available in various sizes and finishes to suit your decor needs. Easy to install and maintain. Upgrade your space with this timeless piece.     ",
//     category: "Glass Doors",
//     type: "interior",
//     model: "M789-ELEG",
//   },
//   {
//     id: 4,
//     title: "Elegant Molded Panel Door",
//     images: [door2, door1],
//     description:
//       "Ideal for closets and tight spaces. This bifold door is designed to maximize space while providing easy access. Made from durable materials, it features a sleek design that complements any interior. Perfect for modern homes, it can be painted or stained to match your decor. Easy to install and operate, this door is a practical solution for small areas. Upgrade your home with this stylish and functional bifold door.",
//     category: "Flush Doors",
//     type: "interior",
//     model: "B101-SAVE",
//   },
//   {
//     id: 5,
//     title: "Space-Saving Bifold Door",
//     images: [door2, door1],
//     description:
//       "Ideal for closets and tight spaces. This bifold door is designed to maximize space while providing easy access. Made from durable materials, it features a sleek design that complements any interior. Perfect for modern homes, it can be painted or stained to match your decor. Easy to install and operate, this door is a practical solution for small areas. Upgrade your home with this stylish and functional bifold door.",
//     category: "Bifold Doors",
//     type: "interior",
//     model: "B101-SAVE",
//   },
//   {
//     id: 6,
//     title: "Space-Saving Bifold Door",
//     images: [door2, door1],
//     description:
//       "Ideal for closets and tight spaces. This bifold door is designed to maximize space while providing easy access. Made from durable materials, it features a sleek design that complements any interior. Perfect for modern homes, it can be painted or stained to match your decor. Easy to install and operate, this door is a practical solution for small areas. Upgrade your home with this stylish and functional bifold door.",
//     category: "Bifold Doors",
//     type: "interior",
//     model: "B101-SAVE",
//   },
// ];

const InteriorDoors = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/doors?doorType=interior`,
      {
        next: {
          revalidate: 30,
        },
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch interior doors: ${res.statusText}`);
    }

    const result = await res.json();
    const doors = result.data || [];

    return (
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {doors.map((door: Door) => (
            <InteriorDoorCart key={door._id} door={door} />
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error loading interior doors:", error);
    return (
      <div className="container mx-auto px-4 py-12">
        <p className="text-center text-red-500">Failed to load interior doors. Please try again later.</p>
      </div>
    );
  }
};

export default InteriorDoors;
