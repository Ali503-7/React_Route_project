import { useOutletContext } from "react-router-dom";

const HostDitails = () => {
  const van = useOutletContext();

  return (
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
  );
};

export default HostDitails;
