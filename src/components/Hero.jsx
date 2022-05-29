import React from "react";
import Typed from "react-typed"; //https://www.npmjs.com/package/react-typed#installation

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold">Capstone 11</p>
        <h1 className="md:text-7xl md:py-6 sm:text-6xl text-4xl font-bold">
          Build with{" "}
          <Typed
            strings={["Love.", "Stupidity."]}
            typeSpeed={140}
            backSpeed={50}
            loop
          />
        </h1>
        <div>
          <p className="md:text-5xl sm:text-4xl text-xl font-bold">
            Awokwokwokwowk
          </p>
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500 mt-5">
          Gak tau mau nulis apa
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
