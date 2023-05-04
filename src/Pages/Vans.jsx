import { useEffect, useState } from "react";
import "../assets/Server";

const Vans = () => {
  const [vans, setVans] = useState();

  useEffect(() => {
    const fetchVans = async () => {
      try {
        const response = await fetch("/api/vans");
        const data = await response.json();
        setVans(data.vans);
      } catch (error) {
        console.error(error);
      }
    };
    fetchVans();
  }, []);

  const cars = () => {
    if (vans) {
      return vans.map((car) => {
        const carTypeStyle = {
          background: ""
        };
        if (car.type == "simple") {
          carTypeStyle.background = "#E17654";
        } else if (car.type == "rugged") {
          carTypeStyle.background = "#115E59";
        } else (
          carTypeStyle.background = "black"
        )
          return (
            <div key={car.id} className="">
              <div className=" rounded-xl overflow-hidden">
                <img src={car.imageUrl} alt={car.name} />
              </div>
              <div className="flex justify-between">
                <h3 className="text-Headers font-semibold text-[20px]">
                  {car.name}
                </h3>
                <div className="flex flex-col relative h-fit">
                  <span className="text-Headers font-semibold text-[20px]">
                    ${car.price}
                  </span>
                  <span className="text-sm text-Headers absolute -bottom-3">
                    /day
                  </span>
                </div>
              </div>
              <div
                style={{ background: carTypeStyle.background }}
                className="w-fit text-BG px-3 py-1 rounded-md capitalize"
              >
                {car.type}
              </div>
            </div>
          );
      });
    } else {
      return <div>Loading</div>;
    }
  };

  return (
    <div className="container grid gap-4 grid-cols-2 md:grid-cols-3 my-2">
      {cars()}
    </div>
  );
};

export default Vans;
