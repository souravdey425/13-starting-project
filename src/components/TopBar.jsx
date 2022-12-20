import React, { useState } from "react";
import { UilSearch } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
const TopBar = ({ setQuery, units, setUnits }) => {
  const [city, setCity] = useState("");
  const handleClick = () => {
    if (city !== "") {
      setQuery({ q: city });
    }
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        setQuery({ lat, lon });
      });
    }
  };
  return (
    <div className="mx-auto max-w-screen-md mt-4  px-15 bg-gradient-to-tr from-white to-white h-12 shadow-lg shadow-gray-400 flex relative border-none">
      <UilLocationPoint
        className=" absolute mr-5 mt-3 ml-2 hover:scale-125"
        onClick={handleLocationClick}
      />
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        type="text"
        name="search"
        className="w-full h-full pl-10 focus: outline-none focus:border-gray-500 border-2 rounded-lg"
        placeholder="Search city.."
      />
      <UilSearch
        className=" absolute -right-1 top-2 mr-5 hover:scale-125"
        onClick={handleClick}
      />
    </div>
  );
};

export default TopBar;
