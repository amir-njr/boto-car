// Modules
import Card from "../modules/Card";

const FilterPage = ({ filteredCar }) => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
      {filteredCar.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
};

export default FilterPage;
