import { useRouteError } from "react-router-dom"

const Anni = () => {
  const data = useRouteError()
  return (
    <h1 className=" container font-bold text-xl text-red-500">
      Where was an Error: {data.message}
    </h1>
  );
}

export default Anni