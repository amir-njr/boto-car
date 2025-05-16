// Data
import carsData from "@/data/carData";
// Modules
import CarType from "../modules/CarType";
import SearchBox from "../modules/SearchBox";
import Card from "../modules/Card";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <SearchBox />
      <CarType />

      <section className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
        {carsData.map((car) => (
          <Card key={car.id} {...car} />
        ))}
      </section>
    </div>
  );
};

export default HomePage;
