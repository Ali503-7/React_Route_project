import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../../assets/Server";


const HostVanPhotos = () => {
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
    <div className="w-1/5 overflow-hidden rounded-md">
      <img src={van.imageUrl} alt="" />
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default HostVanPhotos