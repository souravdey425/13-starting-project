import { useEffect, useState } from "react";
import "./App.css";
import BarCard from "./components/BarCard";
import DateWeather from "./components/DateWeather";
import TopBar from "./components/TopBar";
import getFormattedWeatherData from "./services/WeatherServices";

function App() {
  const [query, setQuery] = useState({ q: "mumbai" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-tr from-white to-white h-fit shadow-xl shadow-gray-400">
      <TopBar setQuery={setQuery} units={units} setUnits={setUnits} />
      {weather && (
        <div>
          <DateWeather items={weather.daily} />
          <BarCard weather={weather} items={weather.daily} />
        </div>
      )}
    </div>
  );
}

export default App;
