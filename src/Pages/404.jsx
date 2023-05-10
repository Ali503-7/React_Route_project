import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className=" container">
      <h1 className=" text-[25px] text-red-400 font-bold">404</h1>
      <h2 className="font-bold text-Headers text-xl">Sorry, the page you were looking for was not found.</h2>
      <button className="bg-black text-white w-full py-2 rounded-md md:w-1/4">
        <Link to="..">Return to home</Link>
      </button>
    </div>
  );
}

export default NotFound;