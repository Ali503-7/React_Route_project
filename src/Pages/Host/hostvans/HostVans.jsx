import { useState, useEffect } from "react";
import "../../../assets/Server";
import { Link } from "react-router-dom";

const HostVans = () => {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    const fetchVans = async () => {
      try {
        const response = await fetch("/api/vans");
        const data = await response.json();
        setVans(data.vans);
      } catch (error) {
        console.error(error);
      }
    };

    fetchVans();
  }, []);

  const vanList = () => {
    if (vans && vans.length > 0) {
      return vans.slice(0, 3).map((van) => (
        <Link to={van.id} key={van.id}>
          <div className="bg-[#ffffff] p-5 w-full rounded-xl">
            <div className="flex flex-row gap-5 items-center">
              <div className="w-[67px] h-fit rounded-xl overflow-hidden">
                <img src={van.imageUrl} className="w-fit h-fit" alt="" />
              </div>
              <div>
                <h3 className="text-[20px] font-semibold text-Headers">
                  {van.name}
                </h3>
                <span className="text-[#4D4D4D] font-medium text-md">
                  ${van.price}/day
                </span>
              </div>
            </div>
          </div>
        </Link>
      ));
    }

    return null;
  };

  return (
    <div>
      <h1 className="text-xl font-bold text-Headers my-10">Your listed vans</h1>
      <div className="flex flex-col gap-5">{vanList()}</div>
    </div>
  );
};

export default HostVans;
