import { useOutletContext } from "react-router-dom";

const HostVanPhotos = () => {
  const {van} = useOutletContext();

  return (
    <div className="w-1/5 overflow-hidden rounded-md">
      <img src={van.imageUrl} alt={van.name} />
    </div>
  );
};

export default HostVanPhotos;
