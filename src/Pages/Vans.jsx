import { getVans } from "../assets/Api";
import { Link, useSearchParams, useLoaderData } from "react-router-dom";

export function loader() {
  return getVans()
}

const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const vans = useLoaderData()

  const typeFilter = searchParams.get("type");

  const HandelFilter = (text) => {
    setSearchParams({ type: text.target.innerText });
  };

  const filledData =
    typeFilter && vans
      ? vans.filter((ob) => ob.type.toLowerCase() === typeFilter.toLowerCase())
      : vans;

  const cars = () => {
    if (filledData) {
      return filledData.map((car) => {
        const carTypeStyle = {
          background: "",
        };

        if (car.type == "simple") carTypeStyle.background = "#E17654";
        if (car.type == "rugged") carTypeStyle.background = "#115E59";
        if (car.type == "luxury") carTypeStyle.background = "black";

        return (
          <Link
            to={car.id}
            key={car.id}
            state={{ search: searchParams.toString(), type: typeFilter }}
          >
            <div>
              <div className=" rounded-xl overflow-hidden">
                <img src={car.imageUrl} alt={car.name} />
              </div>
              <div className="flex justify-between">
                <h3 className="text-Headers font-semibold text-[20px]">
                  {car.name}
                </h3>
                <div className="flex flex-col relative h-fit">
                  <span className="text-Headers font-semibold text-[20px]">
                    ${car.price}
                  </span>
                  <span className="text-sm text-Headers absolute -bottom-3">
                    /day
                  </span>
                </div>
              </div>
              <div
                style={{ background: carTypeStyle.background }}
                className="w-fit text-BG px-3 py-1 rounded-md capitalize"
              >
                {car.type}
              </div>
            </div>
          </Link>
        );
      });
    }
  };

  return (
    <div className="container my-auto">
      <h1
        className="font-bold text-Headers text-xl
      mt-5"
      >
        Explore our van options
      </h1>
      <div className="flex flex-row gap-5 items-center flex-wrap">
        <button
          className={`py-1 px-3 bg-[#FFEAD0] text-[#4D4D4D] rounded-md hover:bg-[#E17654] hover:text-[#ffffff] ${
            typeFilter === "Simple" ? "!bg-[#E17654] text-[#ffffff]" : ""
          }`}
          onClick={(text) => HandelFilter(text)}
        >
          Simple
        </button>
        <button
          className={`py-1 px-3 bg-[#FFEAD0] text-[#4D4D4D] rounded-md hover:bg-[#000000] hover:text-[#ffffff] ${
            typeFilter === "Luxury" ? "!bg-[#000000] text-[#ffffff]" : ""
          }`}
          onClick={(text) => HandelFilter(text)}
        >
          Luxury
        </button>
        <button
          className={`py-1 px-3 bg-[#FFEAD0] text-[#4D4D4D] rounded-md hover:bg-[#115E59] hover:text-[#ffffff] ${
            typeFilter === "Rugged" ? "!bg-[#115E59] text-[#ffffff]" : ""
          }`}
          onClick={(text) => HandelFilter(text)}
        >
          Rugged
        </button>
        {typeFilter ? (
          <button
            className="hover:underline"
            onClick={() => setSearchParams({})}
          >
            Clear filters
          </button>
        ) : null}
      </div>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 my-5">{cars()}</div>
    </div>
  );
};

export default Vans;
