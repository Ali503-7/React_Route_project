import { useLoaderData } from "react-router-dom";
import { getVans } from "../../../assets/Api";

// eslint-disable-next-line react-refresh/only-export-components
export function loader({ params }) {
  return getVans(params.id);
}

const HostVanPhotos = () => {
  const van = useLoaderData();

  return (
    <div className="w-1/5 overflow-hidden rounded-md">
      <img src={van.imageUrl} alt={van.name} />
    </div>
  );
};

export default HostVanPhotos;
