import {
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  redirect,
} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import VanDetails, { loader as VanDetailsLoader } from "./Pages/VanDetails";
import Vans, { loader as vansLoader } from "./Pages/Vans";
import Layout from "./components/Layout/Layout";
import Income from "./Pages/Host/Income";
import Reviews from "./Pages/Host/Reviews";
import Dashboard from "./Pages/Host/Dashboard";
import HostVans, {
  loader as HostVansLoader,
} from "./Pages/Host/hostvans/HostVans";
import HostLayout from "./components/Layout/HostLayout";
import HostVanDitails, {
  loader as vanDitailsLoader,
} from "./Pages/Host/hostvans/HostVanDitails";
import HostVansLayout from "./components/Layout/HostVansLayout";
import HostVanPricing , {loader as vanPricingLoader} from "./Pages/Host/hostvans/HostVanPricing";
import HostVanPhotos , {loader as vanPhotosLoader} from "./Pages/Host/hostvans/HostVanPhotos";
import Error from "./Pages/Error";
import NotFound from "./Pages/404";
import Sign_In from "./Pages/Sign_In";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="SignIn" element={<Sign_In />} />

      <Route path="vans">
        <Route
          index
          element={<Vans />}
          errorElement={<Error />}
          loader={vansLoader}
        />
        <Route path=":id" element={<VanDetails />} loader={VanDetailsLoader} />
      </Route>

      <Route path="host" element={<HostLayout />}>
        <Route
          index
          element={<Dashboard />}
          loader={async () => {
            const isLogedin = true;
            if (!isLogedin) {
              console.log("from here");
              throw redirect("/SignIn");
            }
            return null;
          }}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async () => {
            const isLogedin = true;
            if (!isLogedin) {
              throw redirect("/SignIn");
            }
            return null;
          }}
        />
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async () => {
            const isLogedin = true;
            if (!isLogedin) {
              throw redirect("/SignIn");
            }
            return null;
          }}
        />
        <Route path="vans" element={<HostVans />} loader={HostVansLoader} />
        <Route
          path="vans/:id"
          loader={async () => {
            const isLogedin = true;
            if (!isLogedin) {
              throw redirect("/SignIn");
            }
            return null;
          }}
          element={<HostVansLayout />}
        >
          <Route index element={<HostVanDitails />} loader={vanDitailsLoader} />
          <Route
            path="pricing"
            loader={vanPricingLoader}
            element={<HostVanPricing />}
          />
          <Route
            path="photos"
            loader={vanPhotosLoader}
            element={<HostVanPhotos />}
          />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
export default function App() {
  return (
    <div className="font-sans flex flex-col min-h-screen overflow-x-hidden bg-[#FFF7ED]">
      <RouterProvider router={route} />
    </div>
  );
}
