import { useLoaderData } from "react-router-dom";
import { getVans } from "../../../assets/Api";

// eslint-disable-next-line react-refresh/only-export-components
export function loader({ params }) {
  return getVans(params.id);
}

const HostVanPricing = () => {
  const van = useLoaderData();

  return (
    <div className=" font-medium text-xl">
      ${van.price}
      <span className="text-[25px] font-normal">/day</span>
    </div>
  );
};

export default HostVanPricing;
