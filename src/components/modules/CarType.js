import Link from "next/link";
// Icons
import Hatchback from "../icons/Hatchback";
import Sedan from "../icons/Sedan";
import Sport from "../icons/Sport";
import Suv from "../icons/Suv";

const CarType = () => {
  return (
    <section className="flex md:flex-row flex-col gap-2">
      <Link
        href="/sedan"
        className="flex flex-col items-center bg-green-500 rounded-md p-2 hover:bg-green-600 cursor-pointer w-32"
      >
        <span>Sedan</span>
        <Sedan />
      </Link>
      <Link
        href="/suv"
        className="flex flex-col items-center bg-green-500 rounded-md p-2 hover:bg-green-600 cursor-pointer w-32"
      >
        <span>SUV</span>
        <Suv />
      </Link>
      <Link
        href="/hatchback"
        className="flex flex-col items-center bg-green-500 rounded-md p-2 hover:bg-green-600 cursor-pointer w-32"
      >
        <span>Hatchback</span>
        <Hatchback />
      </Link>
      <Link
        href="/sport"
        className="flex flex-col items-center bg-green-500 rounded-md p-2 hover:bg-green-600 cursor-pointer w-32"
      >
        <span>Sport Cars</span>
        <Sport />
      </Link>
    </section>
  );
};

export default CarType;
