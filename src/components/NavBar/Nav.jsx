import { Link } from "react-router-dom";
import logo from "../../assets/imgs/Logo/logog.png";

const nav = () => {
  return (
    <header>
      <nav className="py-10 bg-[#FFF7ED]">
        <div className="container flex flex-row justify-between items-center font-sans font-[600]">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="" className=" w-40" />
            </Link>
          </div>
          <ul className="flex flex-row gap-3">
            <li className="text-md font-[600] text-header hover:underline">
              <Link to="/Host">Host</Link>
            </li>
            <li className="text-md font-[600] text-header hover:underline">
              <Link to="/about">About</Link>
            </li>
            <li className="text-md font-[600] text-header hover:underline">
              <Link to="/vans">Vans</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default nav;
