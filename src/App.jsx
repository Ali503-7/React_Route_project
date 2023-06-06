import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login, {
  loader as LoginLoader,
  action as LoginAction,
} from "./Pages/Login";
import Vans, { loader as vansLoader } from "./Pages/Vans";
import Error from "./Pages/Error"
import VanDetail, { loader as vanDetailLoader } from "./Pages/VanDetails";
import HostLayout from "./components/Layout/HostLayout";
import Dashboard from "./Pages/Host/Dashboard";
import Income from "./Pages/Host/Income";
import Reviews from "./Pages/Host/Reviews";
import HostVans, {
  loader as hostVansLoader,
} from "./Pages/Host/hostvans/HostVans";
import HostVansLayout, {
  loader as hostVanDetailLoader,
} from "./components/Layout/HostVansLayout";
import HostVanInfo from "./Pages/Host/hostvans/HostVanDitails";
import HostVanPricing from "./Pages/Host/hostvans/HostVanPricing";
import HostVanPhotos from "./Pages/Host/hostvans/HostVanPhotos";
import NotFound from "./Pages/404";
import { requireAuth } from "./AuthRequired";
import "./Server";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="login"
        element={<Login />}
        loader={LoginLoader}
        action={LoginAction}
      />
      <Route
        path="vans"
        element={<Vans />}
        errorElement={<Error />}
        loader={vansLoader}
      />
      <Route path="vans/:id" element={<VanDetail />} loader={vanDetailLoader} />

      <Route path="host" element={<HostLayout />}>
        <Route
          index
          element={<Dashboard />}
          loader={async (request) => await requireAuth(request.request)}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async (request) => await requireAuth(request.request)}
        />
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async (request) => await requireAuth(request.request)}
        />
        <Route path="vans" element={<HostVans />} loader={hostVansLoader} />
        <Route
          path="vans/:id"
          element={<HostVansLayout />}
          loader={hostVanDetailLoader}
        >
          <Route
            index
            element={<HostVanInfo />}
            loader={async (request) => await requireAuth(request.request)}
          />
          <Route
            path="pricing"
            element={<HostVanPricing />}
            loader={async (request) => await requireAuth(request.request)}
          />
          <Route
            path="photos"
            element={<HostVanPhotos />}
            loader={async (request) => await requireAuth(request.request)}
          />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <div className="font-sans flex flex-col min-h-screen overflow-x-hidden bg-[#FFF7ED]">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
