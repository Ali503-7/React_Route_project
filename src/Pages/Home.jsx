import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="container flex flex-col justify-center gap-5 items-center">
        <h1 className="text-xl text-[#ffffff] font-[800]">
          You got the travel plans, we got the travel vans.
        </h1>
        <p className="text-md text-[#ffffff]">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link
          to="/vans"
          className="bg-btn text-[#ffffff] w-full py-2 rounded-md md:w-1/4 flex items-center justify-center"
        >
          Find your van
        </Link>
      </div>
    </div>
  );
};

export default Home;
