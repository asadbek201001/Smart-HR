import React from "react";
import {
  LayoutDashboard,
  Users,
  TrendingUp,
  CalendarCheck,
  Building2,
  FileText,
  Bell
} from "lucide-react";

function Menu() {
  return (
    <div className="w-full h-[70px] bg-[#f8fafc] flex items-center justify-between px-10 shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
      <div className="flex items-center gap-2.5">
        <div className="w-9 h-9 bg-[#0ea5e9] rounded-lg flex items-center justify-center text-white">
          <Users size={20} />
        </div>
        <h2 className="text-lg font-semibold text-[#1e293b]">SmartHR</h2>
      </div>

      <div className="flex items-center gap-6.5">
        <div className="flex items-center gap-1.5 text-sm cursor-pointer font-semibold text-[#0ea5e9] rounded-lg px-2.5 py-1.5 transition-colors hover:bg-[#e0f2fe] hover:text-[#0ea5e9]">
          <LayoutDashboard size={18} />
          Dashboard
        </div>

        <div className="flex items-center gap-1.5 text-sm cursor-pointer font-medium text-[#475569] rounded-lg px-2.5 py-1.5 transition-colors hover:bg-[#e0f2fe] hover:text-[#0ea5e9]">
          <Users size={18} />
          Employees
        </div>

        <div className="flex items-center gap-1.5 text-sm cursor-pointer font-medium text-[#475569] rounded-lg px-2.5 py-1.5 transition-colors hover:bg-[#e0f2fe] hover:text-[#0ea5e9]">
          <TrendingUp size={18} />
          Performance
        </div>

        <div className="flex items-center gap-1.5 text-sm cursor-pointer font-medium text-[#475569] rounded-lg px-2.5 py-1.5 transition-colors hover:bg-[#e0f2fe] hover:text-[#0ea5e9]">
          <CalendarCheck size={18} />
          Attendance
        </div>

        <div className="flex items-center gap-1.5 text-sm cursor-pointer font-medium text-[#475569] rounded-lg px-2.5 py-1.5 transition-colors hover:bg-[#e0f2fe] hover:text-[#0ea5e9]">
          <Building2 size={18} />
          Departments
        </div>

        <div className="flex items-center gap-1.5 text-sm cursor-pointer font-medium text-[#475569] rounded-lg px-2.5 py-1.5 transition-colors hover:bg-[#e0f2fe] hover:text-[#0ea5e9]">
          <FileText size={18} />
          Reports
        </div>
      </div>

      <div className="flex items-center gap-5">
        <input
          type="text"
          placeholder="Search employees, departments"
          className="w-[250px] h-[38px] px-4 rounded-full border border-gray-300 text-sm bg-white outline-none focus:border-[#0ea5e9]"
        />

        <div className="relative cursor-pointer text-[#475569]">
          <Bell size={20} />
          <div className="absolute -top-1.5 -right-1.5 w-4.5 h-4.5 bg-red-600 text-white text-[11px] rounded-full flex items-center justify-center">
            3
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;