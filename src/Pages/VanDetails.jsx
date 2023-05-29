import { Link, useLocation, useLoaderData } from "react-router-dom";
import { getVans } from "../Api";

// eslint-disable-next-line react-refresh/only-export-components
export function loader({ params }) {
  return getVans(params.id)
}

const VanDetails = () => {
  const van = useLoaderData();

  const state = useLocation();

  const carTypeStyle = {
    background: "",
    color: "white",
  };

  if (van.type == "simple") carTypeStyle.background = "#E17654";
  if (van.type == "rugged") carTypeStyle.background = "#115E59";
  if (van.type == "luxury") carTypeStyle.background = "black";

  const search = state.state?.search || "";
  const searchName = state.state?.type || "";

  return (
    <div className="container my-auto">
      <div className="mb-10 mt-5 hover:underline">
        <Link to={`..?${search}`}>
          {`<-`} Back to {state.state?.type ? `${searchName} vans` : "all vans"}
        </Link>
      </div>
      <div className="flex flex-col md:flex-row gap-2">
        <div className="lg:w-1/2">
          <img src={van.imageUrl} alt={van.name} className="rounded-md mb-4 " />
        </div>
        <div className="flex flex-col justify-evenly">
          <div
            style={carTypeStyle}
            className=" font-semibold w-fit py-1 px-2 rounded-md"
          >
            {van.type}
          </div>
          <h1 className="font-bold text-xl text-Headers">{van.name}</h1>
          <div className="font-bold text-[20px]">
            ${van.price}
            <span className="font-semibold text-[14px]">/day</span>
          </div>
          <div className="font-medium text-[13px] text-Headers">
            {van.description}
          </div>
          <button className="w-full bg-btn text-[white] py-2 font-bold rounded-md lg:w-1/4 mb-4">
            Rent this van
          </button>
        </div>
      </div>
    </div>
  );
};

export default VanDetails;
