import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mar",
    income: 1000000,
    expense: 2400000,
  },
  {
    name: "Apr",
    income: 3000000,
    expense: 1398000,
  },
  {
    name: "May",
    income: 2000000,
    expense: 9800000,
  },
  {
    name: "Jun",
    income: 2780000,
    expense: 3908000,
  },
  {
    name: "Jul",
    income: 1890000,
    expense: 4800000,
  },
  {
    name: "Aug",
    income: 2390000,
    expense: 3800000,
  },
];

export const IncomeChart = () => {
  return (
    <div className="w-[688px] h-[286px] bg-white rounded-2xl">
      <div className="border-b-[1px] border-b-slate-200 w-[688px]">
        <div className="flex items-center space-x-1 pt-3 pb-3 pl-4 justify-between pr-4">
          <div className="text-[14px] font-bold">Income - Expense</div>
          <div className="text-slate-500 text-[14px]"></div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="85%">
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" className="text-[12px]" />
          <YAxis
            tickFormatter={(value) => `${(value / 1000000).toFixed(0)}M`}
          />
          <Tooltip formatter={(value) => `${value.toLocaleString()}`} />

          <Bar dataKey="expense" fill="#F97316" />
          <Bar dataKey="income" fill="#84CC16" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IncomeChart;
