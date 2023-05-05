import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import VanDetails from "./Pages/VanDetails";
import Vans from "./Pages/Vans";
import Layout from "./components/Layout/Layout";
import Income from "./Pages/Host/Income";
import Reviews from "./Pages/Host/Reviews";
import Dashboard from "./Pages/Host/Dashboard";
import HostVans from "./Pages/Host/HostVans";
import HostLayout from "./components/Layout/HostLayout";
export default function App() {
  return (
    <div className="font-sans flex flex-col min-h-screen overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="vans">
            <Route index element={<Vans />} />
            <Route path=":id" element={<VanDetails />} />
          </Route>

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}
