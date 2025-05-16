// Data
import carsData from "@/data/carData";
// Module
import FilterPage from "@/components/template/FilterPage";

const Filter = ({ params }) => {
  const [min, max] = params.slug;
  const filteredCar = carsData.filter((car) => {
    if (car.price >= +min && car.price <= +max) return car;
  });
  return <FilterPage filteredCar={filteredCar} />;
};

export default Filter;
