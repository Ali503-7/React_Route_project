import { useState } from "react"
import { Navigate, Outlet } from "react-router-dom"
const AuthLayout = () => {
  const [auth, setAuth] = useState(false)

  return auth ? <Outlet /> : <Navigate to="/SignIn"/>;
}

export default AuthLayout