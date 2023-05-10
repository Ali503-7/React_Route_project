import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import VanDetails from "./Pages/VanDetails";
import Vans from "./Pages/Vans";
import Layout from "./components/Layout/Layout";
import Income from "./Pages/Host/Income";
import Reviews from "./Pages/Host/Reviews";
import Dashboard from "./Pages/Host/Dashboard";
import HostVans from "./Pages/Host/hostvans/HostVans";
import HostLayout from "./components/Layout/HostLayout";
import HostVanDitails from "./Pages/Host/hostvans/HostVanDitails";
import HostVansLayout from "./components/Layout/HostVansLayout";
import HostVanPricing from "./Pages/Host/hostvans/HostVanPricing";
import HostVanPhotos from "./Pages/Host/hostvans/HostVanPhotos";
import NotFound from "./Pages/404";
export default function App() {
  return (
    <div className="font-sans flex flex-col min-h-screen overflow-x-hidden bg-[#FFF7ED]">
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
            <Route path="vans/:id" element={<HostVansLayout />}>
              <Route index element={<HostVanDitails />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}
