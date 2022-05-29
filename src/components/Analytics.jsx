import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[500px] mx-auto my-4"
          //   src="https://github.com/fireclint/data-finance-react-tailwind/blob/ec24b02a5398c2bc55bba4a4e51d207e3d6fdb05/src/assets/laptop.jpg?raw=true"
          src={Laptop}
          alt="/"
        />
        <div className="flex flex-col justify-center">
          <p className="uppercase text-[#00df9a] font-bold">
            Data analytics dashboard
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non sed
            mollitia, consequatur exercitationem facere quis unde ducimus a,
            explicabo delectus eius vel dolorem facilis aperiam repudiandae
            dolore sunt natus voluptates?
          </p>
          <button className="bg-[#000] w-[200px] rounded-md font-medium my-6 mx-auto md:ml-0 py-3 text-[#00df9a]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
