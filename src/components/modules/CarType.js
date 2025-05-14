import Hatchback from "../icons/Hatchback";
import Sedan from "../icons/Sedan";
import Sport from "../icons/Sport";
import Suv from "../icons/Suv";

const CarType = () => {
  return (
    <section className="flex gap-2">
      <div className="flex flex-col items-center bg-green-500 rounded-md p-2 hover:bg-green-600 cursor-pointer w-32">
        <span>Sedan</span>
        <Sedan/>
      </div>
      <div className="flex flex-col items-center bg-green-500 rounded-md p-2 hover:bg-green-600 cursor-pointer w-32">
        <span>SUV</span>
        <Suv/>
      </div>
      <div className="flex flex-col items-center bg-green-500 rounded-md p-2 hover:bg-green-600 cursor-pointer w-32">
        <span>Hatchback</span>
        <Hatchback/>
      </div>
      <div className="flex flex-col items-center bg-green-500 rounded-md p-2 hover:bg-green-600 cursor-pointer w-32"> 
        <span>Sport Cars</span>
        <Sport/>
      </div>
    </section>
  );
};

export default CarType;
