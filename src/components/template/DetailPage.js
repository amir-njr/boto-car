"use client";

// Data
import carsData from "@/data/carData";
// Path
import { usePathname } from "next/navigation";
// Icons
import Company from "../icons/Company";
import Model from "../icons/Model";
import Calender from "../icons/Calender";
import Road from "../icons/Road";
import Location from "../icons/Location";
import Money from "../icons/Money";

const DetailPage = () => {
  const path = usePathname();
  const [, , id] = path.split("/");
  const detailData = carsData.filter((car) => car.id === +id);
  const [car] = detailData;
  const {
    name,
    model,
    year,
    distance,
    location,
    price,
    description,
    image,
  } = car;

  return (
    <div className="flex flex-col gap-8">
      <section className="border border-gray-200 rounded-md p-1">
        <img className="w-[600px] mx-auto rounded-md" src={image} alt={name} />
      </section>
      <h1 className="font-bold">
        {name} {model}
      </h1>
      <section className="bg-gray-50 p-2 flex flex-col gap-3 shadow-2xl border border-gray-200 rounded-md">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <Company />
            <span className="font-bold">Company</span>
          </div>
          <span className="text-gray-400">{name}</span>
        </div>

        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <Model />
            <span className="font-bold">Model</span>
          </div>
          <span className="text-gray-400">{model}</span>
        </div>

        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <Calender />
            <span className="font-bold">First Registration</span>
          </div>
          <span className="text-gray-400">{year}</span>
        </div>

        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <Road />
            <span className="font-bold">Kms Driven</span>
          </div>
          <span className="text-gray-400">{distance}</span>
        </div>
      </section>

      <section className="flex justify-between bg-gray-50 p-2 shadow-2xl border border-gray-200 rounded-md">
        <div className="flex items-center gap-2">
          <Location />
          <span className="font-bold">Location</span>
        </div>
        <span className="text-gray-400">{location}</span>
      </section>

      <section className="flex flex-col gap-2 text-justify bg-gray-50 p-2 shadow-2xl border border-gray-200 rounded-md">
        <span className="font-bold">Extra Information</span>
        <span className="text-gray-400">{description}</span>
      </section>

      <section className="flex justify-between bg-gray-50 p-2 shadow-2xl border border-gray-200 rounded-md">
        <div className="flex items-center gap-2">
          <Money />
          <span className="font-bold">Price</span>
        </div>
        <span className="text-gray-400">$ {price}</span>
      </section>

      <button className="bg-green-500 rounded-md p-2 hover:bg-green-600 cursor-pointer">
        Buy
      </button>
    </div>
  );
};

export default DetailPage;
