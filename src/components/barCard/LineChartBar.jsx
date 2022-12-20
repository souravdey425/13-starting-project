import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

// const pData = [
//   {
//     temp: " 21°",
//     tempnum: 21,
//     time: "9am",
//   },
//   {
//     temp: " 22°",
//     tempnum: 22,
//     time: "10am",
//   },
//   {
//     temp: " 24°",
//     tempnum: 24,
//     time: "11am",
//   },
//   {
//     temp: " 25°",
//     tempnum: 25,
//     time: "12am",
//   },
//   {
//     temp: " 29°",
//     tempnum: 29,
//     time: "1pm",
//   },
//   {
//     temp: " 28°",
//     tempnum: 28,
//     time: "2pm",
//   },
// ];

const LineChartBar = ({ items }) => {
  const pData = items.map((item) => {
    return {
      temp: `${item.temp.toFixed()}°`,
      tempnum: item.temp,
    };
  });

  return (
    <div className=" m-4 p-5">
      <ResponsiveContainer height={100} width="100%">
        <LineChart
          data={pData}
          width={100}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid horizontal={false} />
          <YAxis domain={[21, 30]} hide="true" axisLine="false" />

          <XAxis
            dataKey="temp"
            interval={"preserveStartEnd"}
            axisLine={false}
          />
          <Line
            type="monotone"
            dataKey="tempnum"
            stroke="blue"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartBar;
