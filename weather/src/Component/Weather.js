import React from "react";
import cloud from "./cloud.png";

function Weather() {
  return (
    <div className="h-screen bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500">
      <div className="flex flex-col justify-center items-center h-full">
        <div>
          <img src={cloud} alt="cloud" className="h-full" />
        </div>
        <div className="">
          <p className="font-bold sm:text-4xl text-3xl text-center">
            Weather{" "}
            <span className="font-bold sm:text-4xl text-3xl text-yellow-400 ">
              ForeCast
            </span>
          </p>
        </div>
        <div className="mt-8">
          <button className="py-3 sm:px-16 px-8 rounded-full font-bold sm:text-3xl text-2xl text-black bg-yellow-400 border-none">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Weather;
