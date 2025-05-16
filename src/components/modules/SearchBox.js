"use client";

// data
import carsData from "@/data/carData";
// /Router
import { useRouter } from "next/navigation";
// State
import { useState } from "react";

const SearchBox = () => {
  const [price, setPrice] = useState({
    min: "",
    max: "",
  });
  const router = useRouter();

  const changeHndler = (e) => {
    setPrice({ ...price, [e.target.name]: e.target.value });
  };
  const clickHandler = (e) => {
    const { min, max } = price;
    router.push(`filter/${min}/${max}`);
  };
  return (
    <section className="flex items-center gap-2">
      <div className="flex flex-col gap-1.5">
        <input
          onChange={changeHndler}
          className="border-2 border-green-500 rounded-md focus:outline-0 px-1.5"
          placeholder="Inter min price ..."
          type="text"
          name="min"
        />
        <input
          onChange={changeHndler}
          className="border-2 border-green-500 rounded-md focus:outline-0 px-1.5"
          placeholder="Inter max price ..."
          type="text"
          name="max"
        />
      </div>
      <button
        onClick={clickHandler}
        className="bg-green-500 py-4 px-1 rounded-md cursor-pointer hover:bg-green-600"
      >
        Search
      </button>
    </section>
  );
};

export default SearchBox;
