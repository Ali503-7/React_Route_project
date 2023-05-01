import { Link } from "react-router-dom";
import logo from "../../assets/imgs/Logo/logog.png";

const nav = () => {
  return (
    <nav
      className="py-10 bg-[#FFF7ED]"
    >
      <div className="container flex flex-row justify-between items-center font-sans font-[600]">
        <div className="logo">
          <img src={logo} alt="" className=" w-40" />
        </div>
        <ul className="flex flex-row gap-3">
          <li className="text-md font-[600] text-header">
            <Link to="/">Home</Link>
          </li>
          <li className="text-md font-[600] text-header">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default nav;
