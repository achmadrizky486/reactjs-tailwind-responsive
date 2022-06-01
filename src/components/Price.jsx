import React from "react";

const Price = () => {
  return (
    <div className="w-full py-[10rem] mx-auto px-20 md:px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-[90%] shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src="https://github.com/fireclint/data-finance-react-tailwind/blob/main/src/assets/single.png?raw=true"
            alt="single"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">Rp 45.000</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-3">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3">
            Start Trial
          </button>
        </div>
        <div className="w-[90%] shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src="https://github.com/fireclint/data-finance-react-tailwind/blob/main/src/assets/double.png?raw=true"
            alt="single"
          />
          <h2 className="text-2xl font-bold text-center py-8">Dual User</h2>
          <p className="text-center text-4xl font-bold">Rp 145.000</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-3">1 TB Storage</p>
            <p className="py-2 border-b mx-8">2 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 4 GB</p>
          </div>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3">
            Start Trial
          </button>
        </div>
        <div className="w-[90%] shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src="https://github.com/fireclint/data-finance-react-tailwind/blob/main/src/assets/triple.png?raw=true"
            alt="single"
          />
          <h2 className="text-2xl font-bold text-center py-8">Triple User</h2>
          <p className="text-center text-4xl font-bold">Rp 245.000</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-3">1.5 TB Storage</p>
            <p className="py-2 border-b mx-8">4 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 6 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Price;
