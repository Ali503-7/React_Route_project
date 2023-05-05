import { Link } from "react-router-dom";
import "../assets/Server";
import { useEffect, useState } from "react";

const VanDetails = () => {
  const [van, setVan] = useState({});

  const theID = window.location.href.slice(-1);

  useEffect(() => {
    const fetchVans = async () => {
      try {
        const response = await fetch("/api/vans");
        const data = await response.json();
        setVan(data.vans.find((v) => v.id === theID));
      } catch (error) {
        console.error(error);
      }
    };
    fetchVans();
  }, [theID]);

  const carTypeStyle = {
    background: "",
    color: "white"
  };

  if (van.type == "simple") carTypeStyle.background = "#E17654";
  if (van.type == "rugged") carTypeStyle.background = "#115E59";
  if (van.type == "luxury") carTypeStyle.background = "black";

  return van ? (
    <div className="container my-auto">
      <div className="mb-10 mt-5">
        <Link to="/vans">{`<-`} Back to all vans</Link>
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
  ) : (
    <div>Loading</div>
  );
};

export default VanDetails;