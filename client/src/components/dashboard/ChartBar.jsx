"use client";

import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export const ChartBar = () => {
  const data = [
    {
      name: "Jul",
      uv: 2500,
      pv: 3500,
      amt: 2400,
    },
    {
      name: "Jul",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Jul",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Jul",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Jul",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Jul",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Jul",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div>
      <div className="w-[588px] h-[284px] rounded-lg bg-[white]">
        <p className="text-base font-semibold mt-4 ml-6">Income - Expense</p>
        <div className="border-b-2 mt-4 "></div>
        <BarChart
          width={588}
          height={200}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey="name" className="text-[16px]" />
          <YAxis tickFormatter={(value) => `${(value / 5).toFixed(0)}000`} />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="pv"
            fill="#8884d8"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
          <Bar
            dataKey="uv"
            fill="#82ca9d"
            activeBar={<Rectangle fill="gold" stroke="purple" />}
          />
        </BarChart>
      </div>
    </div>
  );
};
