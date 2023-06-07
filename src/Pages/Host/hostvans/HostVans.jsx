import { Link, useLoaderData, defer, Await } from "react-router-dom";
import { requireAuth } from "../../../AuthRequired";
import { getHostVans } from "../../../Api";
import { Suspense } from "react";
// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ request }) {
  await requireAuth(request);
  return defer({ vans: getHostVans() });
}

const HostVans = () => {
  const vansPromes = useLoaderData();

  return (
    <div>
      <h1 className="text-xl font-bold text-Headers my-10">Your listed vans</h1>
      <Suspense fallback={<h1 className="text-xl">Loading Vans...</h1>}>
        <Await resolve={vansPromes.vans}>
          {(vans) => {
            const vanList = () => {
              return vans.map((van) => (
                <Link to={van.id} key={van.id}>
                  <div className="bg-[#ffffff] p-5 w-full rounded-xl">
                    <div className="flex flex-row gap-5 items-center">
                      <div className="w-[67px] h-fit rounded-xl overflow-hidden">
                        <img
                          src={van.imageUrl}
                          className="w-fit h-fit"
                          alt=""
                        />
                      </div>
                      <div>
                        <h3 className="text-[20px] font-semibold text-Headers">
                          {van.name}
                        </h3>
                        <span className="text-[#4D4D4D] font-medium text-md">
                          ${van.price}/day
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ));
            };
            return <div className="flex flex-col gap-5">{vanList()}</div>;
          }}
        </Await>
      </Suspense>
    </div>
  );
};

export default HostVans;
