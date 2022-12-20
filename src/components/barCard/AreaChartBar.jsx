import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const AreaChartBar = ({ items }) => {
  const mData = [
    {
      time: 6,
      light: -1,
    },
    {
      time: items.sunrise,
      light: 0,
    },

    {
      time: 13,
      light: 6,
    },
    {
      time: items.sunset,
      light: 0,
    },

    {
      time: 21,
      light: -2,
    },
  ];
  const gradientOffset = () => {
    const dataMax = Math.max(...mData.map((i) => i.light));
    const dataMin = Math.min(...mData.map((i) => i.light));

    if (dataMax <= 0) {
      return 0;
    }
    if (dataMin >= 0) {
      return 1;
    }

    return dataMax / (dataMax - dataMin);
  };

  const off = gradientOffset();
  return (
    <div>
      <ResponsiveContainer height={100} width="100%">
        <AreaChart
          data={mData}
          width={300}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid horizontal={false} height={4} />
          <XAxis dataKey="time" axisLine={false} />

          <defs>
            <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset={off} stopColor="#ffdd59" stopOpacity={1} />
              <stop offset={off} stopColor="black" stopOpacity={1} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="light"
            fill="url(#splitColor)"
            stroke="black"
            strokeWidth={0.3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaChartBar;
