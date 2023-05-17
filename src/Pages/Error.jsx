import { useRouteError } from "react-router-dom"

const Error = () => {
  const error = useRouteError()
  return (
    <h1 className=" container font-bold text-xl text-red-500">
      Where was an Error: {error.message}
    </h1>
  );
}

export default Error