import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";

/* ================= SAMPLE DATA ================= */

const data = [
  { month: "Jan", total: 1180, hires: 10, departures: 8 },
  { month: "Feb", total: 800, hires: 25, departures: 10 },
  { month: "Mar", total: 1105, hires: 18, departures: 7 },
  { month: "Apr", total: 900, hires: 30, departures: 12 },
  { month: "May", total: 1230, hires: 35, departures: 15 },
  { month: "Jun", total: 1235, hires: 28, departures: 9 },
  { month: "Jul", total: 1240, hires: 32, departures: 14 },
  { month: "Aug", total: 1245, hires: 26, departures: 11 },
  { month: "Sep", total: 1242, hires: 22, departures: 10 },
  { month: "Oct", total: 1253, hires: 24, departures: 9 },
  { month: "Nov", total: 1344, hires: 20, departures: 8 },
  { month: "Dec", total: 747, hires: 27, departures: 32 },
];

function EmployeeTrends() {
  return (
    <div className="w-full p-10">
      <div className="bg-white p-6 rounded-2xl shadow-sm">
        <div className="mb-5">
          <h2 className="text-xl font-bold text-slate-900">
            Employee Trends
          </h2>
        </div>

        <div className="w-full h-[320px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />
              <XAxis dataKey="month" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip />
              <Legend />

              <Line
                type="monotone"
                dataKey="total"
                stroke="#0f766e"
                strokeWidth={3}
                dot={{ r: 4 }}
                name="Total Employees"
              />

              <Line
                type="monotone"
                dataKey="hires"
                stroke="#16a34a"
                strokeWidth={2}
                dot={{ r: 3 }}
                name="New Hires"
              />

              <Line
                type="monotone"
                dataKey="departures"
                stroke="#dc2626"
                strokeWidth={2}
                dot={{ r: 3 }}
                name="Departures"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default EmployeeTrends;