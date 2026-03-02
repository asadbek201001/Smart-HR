import React from "react";
import {
  Users,
  Building2,
  Target,
  CalendarCheck,
  Briefcase,
  UserMinus,
  Download,
  RefreshCw,
} from "lucide-react";

function Hero() {
  return (
    <div className="w-full">
      {/* TOP SECTION */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex flex-col gap-1.5">
          <h1 className="text-[28px] font-bold text-slate-900">
            Executive Dashboard
          </h1>
          <p className="text-sm text-slate-500">
            Comprehensive organizational overview and insights
          </p>
        </div>

        <div className="flex items-center gap-3">
          <select className="h-10 px-4 rounded-lg border border-slate-200 bg-white text-sm cursor-pointer">
            <option>Last 30 Days</option>
            <option>Last 7 Days</option>
            <option>Last 3 Months</option>
          </select>

          <button className="h-10 px-4 rounded-lg border border-slate-200 bg-white flex items-center gap-2 text-sm hover:bg-slate-100 transition">
            <Download size={16} />
            Export
          </button>

          <button className="w-10 h-10 rounded-lg border border-slate-200 bg-white flex items-center justify-center hover:bg-slate-100 transition">
            <RefreshCw size={16} />
          </button>
        </div>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-3 gap-5">
        {/* Card 1 */}
        <div className="relative bg-white p-6 rounded-2xl shadow-sm flex flex-col gap-2.5">
          <div className="w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center">
            <Users size={20} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">1,247</h2>
          <p className="text-sm text-slate-500">Total Employees</p>
          <span className="absolute top-5 right-5 text-xs px-3 py-1 rounded-full font-semibold bg-green-100 text-green-600">
            +8.2%
          </span>
        </div>

        {/* Card 2 */}
        <div className="relative bg-white p-6 rounded-2xl shadow-sm flex flex-col gap-2.5">
          <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
            <Building2 size={20} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">18</h2>
          <p className="text-sm text-slate-500">Departments</p>
          <span className="absolute top-5 right-5 text-xs px-3 py-1 rounded-full font-semibold bg-blue-100 text-blue-600">
            +2 new
          </span>
        </div>

        {/* Card 3 */}
        <div className="relative bg-white p-6 rounded-2xl shadow-sm flex flex-col gap-2.5">
          <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
            <Target size={20} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">87.4%</h2>
          <p className="text-sm text-slate-500">Avg Performance Score</p>
          <span className="absolute top-5 right-5 text-xs px-3 py-1 rounded-full font-semibold bg-green-100 text-green-600">
            +2.1%
          </span>
        </div>

        {/* Card 4 */}
        <div className="relative bg-white p-6 rounded-2xl shadow-sm flex flex-col gap-2.5">
          <div className="w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center">
            <CalendarCheck size={20} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">94.2%</h2>
          <p className="text-sm text-slate-500">Attendance Rate</p>
          <span className="absolute top-5 right-5 text-xs px-3 py-1 rounded-full font-semibold bg-green-100 text-green-600">
            +1.3%
          </span>
        </div>

        {/* Card 5 */}
        <div className="relative bg-white p-6 rounded-2xl shadow-sm flex flex-col gap-2.5">
          <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
            <Briefcase size={20} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">23</h2>
          <p className="text-sm text-slate-500">Open Positions</p>
          <span className="absolute top-5 right-5 text-xs px-3 py-1 rounded-full font-semibold bg-amber-100 text-amber-600">
            urgent
          </span>
        </div>

        {/* Card 6 */}
        <div className="relative bg-white p-6 rounded-2xl shadow-sm flex flex-col gap-2.5">
          <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
            <UserMinus size={20} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">3.2%</h2>
          <p className="text-sm text-slate-500">Turnover Rate</p>
          <span className="absolute top-5 right-5 text-xs px-3 py-1 rounded-full font-semibold bg-red-100 text-red-600">
            -0.8%
          </span>
        </div>
      </div>
    </div>
  );
}

export default Hero;