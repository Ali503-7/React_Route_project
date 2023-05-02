import AboutHero from "../assets/imgs/About/image 55.png";

const About = () => {
  return (
    <div className="container gap-20 flex flex-col my-auto">
      <div className="flex xl:flex-row flex-col items-center gap-3">
        <img src={AboutHero} alt="" className="xl:w-1/2" />
        <div className=" self-start flex flex-col gap-5">
          <h1 className=" font-sans font-bold text-Headers text-xl">
            Don’t squeeze in a sedan when you could relax in a van.
          </h1>
          <p className=" font-[500] text-md text-Headers">
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>
          <p className=" font-[500] text-md text-Headers">
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
        </div>
      </div>
      <div className=" bg-[#FFCC8D] flex flex-col xl:flex-row py-10 xl:items-center xl:justify-between px-5 rounded-md mb-5 gap-5">
        <h3 className="text-Headers text-md font-bold">
          Your destination is waiting. Your van is ready.
        </h3>
        <button className="bg-Headers text-[#ffffff] rounded-md xl:py-3 xl:px-2 w-1/1 xl:w-1/4 py-2 font-bold text-md">
          Explore our vans
        </button>
      </div>
    </div>
  );
};

export default About;
