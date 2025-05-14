const SearchBox = () => {
  return (
    <section className="flex items-center gap-2">
      <div className="flex flex-col gap-1.5">
        <input
          className="border-2 border-green-500 rounded-md focus:outline-0 px-1.5"
          placeholder="Inter min price ..."
          type="text"
          name="min"
        />
        <input
          className="border-2 border-green-500 rounded-md focus:outline-0 px-1.5"
          placeholder="Inter max price ..."
          type="text"
          name="max"
        />
      </div>
      <button className="bg-green-500 py-4 px-1 rounded-md cursor-pointer hover:bg-green-600">
        Search
      </button>
    </section>
  );
};

export default SearchBox;
