import { NavLink } from "react-router-dom";
const HostNav = () => {
  return (
    <nav>
      <ul className="flex flex-row gap-5">
        <li className="hover:underline text-[#161616]">
          <NavLink
            to="/host"
            end
            className={({ isActive }) =>
              isActive ? "underline font-bold" : null
            }
          >
            Dashboard
          </NavLink>
        </li>
        <li className="hover:underline text-[#161616]">
          <NavLink
            to="income"
            className={({ isActive }) =>
              isActive ? "underline font-bold" : null
            }
          >
            Income
          </NavLink>
        </li>
        <li className="hover:underline text-[#161616]">
          <NavLink
            to="vans"
            className={({ isActive }) =>
              isActive ? "underline font-bold" : null
            }
          >
            Vans
          </NavLink>
        </li>
        <li className="hover:underline text-[#161616]">
          <NavLink
            to="reviews"
            className={({ isActive }) =>
              isActive ? "underline font-bold" : null
            }
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default HostNav;
