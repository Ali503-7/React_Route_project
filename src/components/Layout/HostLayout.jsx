import { Outlet } from "react-router-dom"
import HostNav from "../../Pages/Host/HostNav"
const HostLayout = () => {
  return (
    <div className="container">
      <HostNav />
      <Outlet />
    </div>
  )
}

export default HostLayout