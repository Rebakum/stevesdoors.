import DoorCart from "./DoorCart";

const Doors = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <DoorCart />
      </div>
    </div>
  );
};

export default Doors;
