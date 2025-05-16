"use client";

// Data
import carsData from "@/data/carData";
// Path
import { usePathname } from "next/navigation";
// Modules
import Card from "../modules/Card";

const SuvPage = () => {
  const path = usePathname();
  const [, suv] = path.split("/");
  const categoryData = carsData.filter((car) => car.category === suv);

  return (
    <div className="grid grid-cols-4 gap-5">
      {categoryData.map((car) => (
        <Card key={car.id} {...car} />
      ))}
    </div>
  );
};

export default SuvPage;
