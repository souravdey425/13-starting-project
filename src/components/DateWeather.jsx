import React from "react";
import { iconUrlFromCode } from "../services/WeatherServices";

const DateWeather = ({ items }) => {
  return (
    <div className=" flex bg-white items-center justify-center gap-4 mt-6">
      {items.map((item) => (
        <div className=" flex flex-col border-2 border-white hover:border-2 hover:border-sky-400 cursor-pointer p-2 m-2 items-center">
          <div>{item.title}</div>
          <div>{`${item.temp}°`}</div>
          <img src={iconUrlFromCode(item.icon)} alt="" />
          <span>{item.main}</span>
        </div>
      ))}
    </div>
  );
};

export default DateWeather;
