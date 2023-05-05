import { Link } from "react-router-dom"
const HostNav = () => {
  return (
    <nav>
      <ul className="flex flex-row gap-5">
        <li  className="hover:underline text-[#161616]">
          <Link to="/host">Dashboard</Link>
        </li>
        <li  className="hover:underline text-[#161616]">
          <Link to="/host/income">Income</Link>
        </li>
        <li className="hover:underline text-[#161616]">
          <Link to="/host/vans">Vans</Link>
        </li>
        <li  className="hover:underline text-[#161616]">
          <Link to="/host/reviews">Reviews</Link>
        </li>
      </ul>
    </nav>
  );
}

export default HostNav