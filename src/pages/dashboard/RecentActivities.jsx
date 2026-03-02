import React from "react";
import { Building2, Users, FileText, ArrowRight } from "lucide-react";

const RecentActivities = () => {
  return (
    <div className="bg-white rounded-2xl p-7 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold m-0">Recent Activities</h2>
        <span className="text-[#1f6f6d] cursor-pointer font-medium flex items-center gap-1.5 hover:underline">
          View All <ArrowRight size={16} />
        </span>
      </div>

      <div className="flex gap-4 p-5 rounded-xl transition cursor-pointer hover:bg-[#f6f8f7] mb-4 last:mb-0">
        <div className="w-[50px] h-[50px] rounded-lg bg-[#dff3e7] flex items-center justify-center">
          <Building2 size={22} color="#2e9d6f" />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <h4 className="m-0 text-base font-semibold">New Department Created</h4>
            <span className="text-sm text-gray-500">2 hours ago</span>
          </div>
          <p className="my-1.5 text-gray-700">
            Product Development department was established with 12 initial members transferred from Engineering.
          </p>
          <div className="text-sm text-gray-600">
            By: Sarah Johnson &nbsp;&nbsp; Affected: 12 employees
          </div>
        </div>
      </div>

      <div className="flex gap-4 p-5 rounded-xl transition cursor-pointer hover:bg-[#f6f8f7] mb-4 last:mb-0">
        <div className="w-[50px] h-[50px] rounded-lg bg-[#e6f0fa] flex items-center justify-center">
          <Users size={22} color="#4e79a7" />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <h4 className="m-0 text-base font-semibold">
              Performance Review Cycle Started
            </h4>
            <span className="text-sm text-gray-500">1 day ago</span>
          </div>
          <p className="my-1.5 text-gray-700">
            Q4 2024 performance review cycle has been initiated for all departments.
          </p>
          <div className="text-sm text-gray-600">
            By: System &nbsp;&nbsp; Affected: 1,247 employees
          </div>
        </div>
      </div>

      <div className="flex gap-4 p-5 rounded-xl transition cursor-pointer hover:bg-[#f6f8f7]">
        <div className="w-[50px] h-[50px] rounded-lg bg-[#fdf2df] flex items-center justify-center">
          <FileText size={22} color="#e8a84b" />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <h4 className="m-0 text-base font-semibold">Policy Update</h4>
            <span className="text-sm text-gray-500">3 days ago</span>
          </div>
          <p className="my-1.5 text-gray-700">
            Remote work policy has been updated to allow up to 3 days per week remote work.
          </p>
          <div className="text-sm text-gray-600">
            By: HR Team &nbsp;&nbsp; Affected: All employees
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentActivities;