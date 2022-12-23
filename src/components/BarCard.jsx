import React from "react";

import AreaChartBar from "./barCard/AreaChartBar";
import LineChartBar from "./barCard/LineChartBar";

const BarCard = ({ weather, items }) => {
  return (
    <div className="  h-full bg-white mt-4 shadow-2xl rounded-lg">
      <div className=" text-4xl font-bold flex items-start m-8 pt-6 gap-3 my-8">
        <span>{`${weather.temp.toFixed()}°`}</span>
        {/* <img src={weather.iconURL} alt="" className=" w-10" /> */}
      </div>
      <LineChartBar items={items} />
      <div className=" flex items-center justify-between m-12 gap-1">
        <button className=" flex flex-col items-start bg-blue-200 p-3 pr-12 font-bold text-sm">
          Pressure <span className=" font-light">{weather.pressure}hpa</span>
        </button>
        <button className=" flex flex-col items-start bg-blue-200 p-3 pr-12 font-bold text-sm">
          Humidity <span className=" font-light">{`${weather.humidity}%`}</span>
        </button>
      </div>
      <AreaChartBar items={items} />
    </div>
  );
};

export default BarCard;
