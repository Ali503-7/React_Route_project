import { useLoaderData } from "react-router-dom";
import { getVans } from "../../../assets/Api";

// eslint-disable-next-line react-refresh/only-export-components
export function loader({ params }) {
  return getVans(params.id);
}

const HostDitails = () => {
  const van = useLoaderData();

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
