import Link from "next/link";

const Card = (props) => {
  const {
    id,
    name,
    model,
    year,
    distance,
    location,
    price,
    description,
    image,
    category,
  } = props;

  return (
    <Link href="">
      <div className="border p-2 rounded-md border-gray-300 flex flex-col gap-4 shadow-2xl">
        <img className="w-72 rounded-md" src={image} alt={name} />
        <h1 className="font-bold">
          {name} {model}
        </h1>
        <section className="text-gray-400">
          <span>{year}</span> . <span>{distance} km</span>
        </section>

        <section className="flex justify-between">
          <span className="bg-green-500 p-1 rounded-md">$ {price}</span>
          <span>{location}</span>
        </section>
      </div>
    </Link>
  );
};

export default Card;
