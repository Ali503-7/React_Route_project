import { Outlet } from "react-router-dom";
import Header from "../NavBar/Nav";
import Footer from '../Footer/Footer'

export default function Layout() {
  return (
    <div className="site-wrapper">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}
