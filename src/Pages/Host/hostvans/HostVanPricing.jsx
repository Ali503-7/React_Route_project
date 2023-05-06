import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../../assets/Server";

const HostVanPricing = () => {
  const ID = useParams();

  const [van, setVan] = useState();

  useEffect(() => {
    const fetchVans = async () => {
      try {
        const response = await fetch("/api/vans");
        const data = await response.json();

        setVan(data.vans.find(({ id }) => id == ID.id));
      } catch (error) {
        console.error(error);
      }
    };
    fetchVans();
  }, []);
  return van ? (
    <div className=" font-medium text-xl">
      ${van.price}
      <span className="text-[25px] font-normal">/day</span>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default HostVanPricing;
