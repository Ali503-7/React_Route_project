import { NavLink } from "react-router-dom";
import logo from "../../assets/imgs/Logo/logog.png";
import { CgProfile } from "react-icons/cg";
const nav = () => {
  return (
    <header>
      <nav className="py-10 ">
        <div className="container flex flex-row justify-between items-center font-sans font-[600]">
          <div className="logo">
            <NavLink to="/">
              <img src={logo} alt="" className=" w-40" />
            </NavLink>
          </div>
          <ul className="flex flex-row gap-3 items-center">
            <li className="text-md font-[600] text-header hover:underline">
              <NavLink
                to="/host"
                className={({ isActive }) =>
                  isActive ? "underline font-bold" : null
                }
              >
                Host
              </NavLink>
            </li>
            <li className="text-md font-[600] text-header hover:underline">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "underline font-bold" : null
                }
              >
                About
              </NavLink>
            </li>
            <li className="text-md font-[600] text-header hover:underline">
              <NavLink
                to="/vans"
                className={({ isActive }) =>
                  isActive ? "underline font-bold" : null
                }
              >
                Vans
              </NavLink>
            </li>
            <li className="text-[20px] font-[600] text-header hover:underline">
              <NavLink
                to="/SignIn"
                className={({ isActive }) =>
                  isActive ? "text-black" : null
                }
              >
                <CgProfile />
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default nav;
