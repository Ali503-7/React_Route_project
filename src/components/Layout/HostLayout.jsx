import { Outlet } from "react-router-dom"
import HostNav from "../../Pages/Host/HostNav"
const HostLayout = () => {
  return (
    <>
      <HostNav />
      <Outlet />
    </>
  )
}

export default HostLayout