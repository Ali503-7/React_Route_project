import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../../assets/Server";

const HostDitails = () => {
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
    <div className="flex flex-col gap-2">
      <div>
        <b>Name</b>:{van.name}
      </div>
      <div>
        <b>Category</b>:{van.type}
      </div>
      <div>
        <b>Description</b>:{van.description}
      </div>
      <div>
        <b>Visibility</b>:Public
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default HostDitails;
