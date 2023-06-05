import { Outlet } from "react-router-dom";
import Nav from "../NavBar/Nav";
import Footer from "../Footer/Footer";
const Layout = () => {
  return (
    <>
      <Nav />
      <main className="my-auto">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
