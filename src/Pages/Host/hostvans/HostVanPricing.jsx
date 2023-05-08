import { useOutletContext } from "react-router-dom";

const HostVanPricing = () => {
  const  van  = useOutletContext();

  return (
    <div className=" font-medium text-xl">
      ${van.price}
      <span className="text-[25px] font-normal">/day</span>
    </div>
  );
};

export default HostVanPricing;
