const CarType = () => {
  return (
    <section className="flex gap-2">
      <div className="bg-green-500 rounded-md p-2 hover:bg-green-600 cursor-pointer">
        <span>Sedan</span>
      </div>
      <div className="bg-green-500 rounded-md p-2 hover:bg-green-600 cursor-pointer">
        <span>SUV</span>
      </div>
      <div className="bg-green-500 rounded-md p-2 hover:bg-green-600 cursor-pointer">
        <span>Hatchback</span>
      </div>
      <div className="bg-green-500 rounded-md p-2 hover:bg-green-600 cursor-pointer"> 
        <span>Sport Cars</span>
      </div>
    </section>
  );
};

export default CarType;
