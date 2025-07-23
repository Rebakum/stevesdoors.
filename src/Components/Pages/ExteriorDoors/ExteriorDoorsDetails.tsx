// interface Door {
//   title: string;
//   description: string;
//   images: string[];
// }

// interface ExteriorDoorsDetailsProps {
//   door: Door;
// }

// const ExteriorDoorsDetails = ({ door }: ExteriorDoorsDetailsProps) => {
//   console.log(door);

//   return (
//     <div className="container mx-auto pb-12 pt-40 h-auto">
//       <h1>Details page</h1>
//       <div className="flex flex-col-reverse md:flex-row bg-gray-300 justify-center items-center gap-5">
//         {/* Text Content */}
//         <div className="w-full rounded-sm flex flex-col items-start p-6 md:p-20 md:w-1/2 text-center md:text-left">
//           <h1 className="md:text-6xl text-4xl font-bold text-gray-800 leading-tight mb-6">
//             {door.title}
//           </h1>
//           <p className="text-gray-600 text-justify text-lg mb-8">
//             {door.description}
//           </p>
//         </div>

//         {/* Hero Image */}
//         {/* <div className="w-full md:w-1/2 h-[500px] p-6 flex justify-center items-center">
//           {door.images?.[0] ? (
//             <Image
//               src={door.images[0]}
//               alt={door.title || "Exterior Door"}
//               className="rounded-sm shadow-md object-cover"
//               width={500}
//               height={500}
//               priority
//             />
//           ) : (
//             <p className="text-center text-red-600">Main image not found</p>
//           )}
//         </div> */}
//       </div>

//       {/* Additional Images Grid */}
//       <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {/* {door.images && door.images.length > 0 ? (
//           door.images.map((image, index) => (
//             <Image
//               key={index}
//               src={image}
//               alt={`${door.title} - image ${index + 1}`}
//               className="rounded-sm shadow-md object-cover"
//               width={500}
//               height={500}
//               priority={index === 0}
//             />
//           ))
//         ) : (
//           <p className="text-center col-span-full">No images available</p>
//         )} */}
//       </div>
//     </div>
//   );
// };

// export default ExteriorDoorsDetails;

const ExteriorDoorsDetails = ({ door }) => {
  console.log(door);
  return (
    <div className="container mx-auto  h-auto">
      <div className="flex flex-col-reverse py-12 md:flex-row bg-gray-300 justify-center items-center gap-5">
        {/* Text Content */}
        <div className="w-full rounded-sm flex flex-col items-start p-6 md:p-20 md:w-1/2 text-center md:text-left">
          <h1 className="md:text-6xl text-4xl font-bold  leading-tight mb-6">
            Exterior Details Pages
            {door.title}
          </h1>
          <p className="text-gray-600 text-justify text-lg mb-8">
            {door.description}
          </p>
        </div>

        {/* Hero Image */}
        {/* <div className="w-full md:w-1/2 h-[500px]  flex justify-center items-center">
          {door.images && door.images.length > 0 && (
            <Image
              src={door.images[0]}
              alt={door.title || "interior Door"}
              className="rounded-sm shadow-md object-cover"
              width={500}
              height={500}
              priority
            />
          )}
        </div> */}
      </div>

      <div>
        {/* <div className="mt-10 mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6   ">
          {door.images && door.images.length > 0 ? (
            door.images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={door.title || "Exterior Door"}
                className="rounded-sm shadow-md object-cover "
                fill={false}
                width={500}
                height={500}
                priority
              />
            ))
          ) : (
            <p className="text-center">Image not found</p>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default ExteriorDoorsDetails;
