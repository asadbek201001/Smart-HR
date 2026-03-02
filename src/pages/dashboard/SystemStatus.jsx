import React from "react";
import { Info, ChevronDown } from "lucide-react";

export default function SystemStatus() {
  return (
    <div className="grid grid-cols-[320px_1fr] gap-6 p-6">
      {/* SYSTEM STATUS */}
      <div className="bg-white rounded-2xl p-7 shadow-sm">
        <h2 className="text-xl font-semibold mb-6">System Status</h2>

        <div className="flex justify-between mb-4 text-base">
          <span>System Health</span>
          <span className="flex items-center gap-1.5 font-semibold text-green-700">
            <span className="inline-block w-2 h-2 rounded-full bg-green-700"></span>
            Healthy
          </span>
        </div>

        <div className="flex justify-between mb-4 text-base">
          <span>Active Users</span>
          <strong>342</strong>
        </div>

        <div className="flex justify-between mb-5 text-base">
          <span>Last Updated</span>
          <span className="text-gray-600">2 min ago</span>
        </div>

        <div className="h-px bg-gray-300 my-5"></div>

        <div className="bg-yellow-100 text-yellow-800 font-medium rounded-xl px-4 py-3 flex items-center gap-3">
          <Info size={18} />
          Scheduled maintenance at 2 AM
        </div>
      </div>

      {/* PERFORMANCE TABLE */}
      <div className="bg-white rounded-2xl p-7 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold m-0">Department Performance</h2>
          <div className="flex items-center gap-1.5 cursor-pointer text-teal-800 font-medium">
            Sort by Performance <ChevronDown size={16} />
          </div>
        </div>

        <div className="w-full border-collapse">
          <div className="grid grid-cols-[1.5fr_1fr_1.2fr_1fr_1fr] border-t border-gray-200 pt-5 pb-4 font-semibold text-gray-700">
            <div>Department</div>
            <div>Employees</div>
            <div>Avg Performance</div>
            <div>Attendance</div>
            <div>Budget Usage</div>
          </div>

          {/* Row 1 */}
          <div className="grid grid-cols-[1.5fr_1fr_1.2fr_1fr_1fr] border-t border-gray-200 py-5 items-center">
            <div className="font-medium">Engineering</div>
            <div>285</div>
            <div className="flex items-center gap-3 font-semibold">
              91.2%
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-700">
                Excellent
              </span>
            </div>
            <div>95.8%</div>
            <div>87%</div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-[1.5fr_1fr_1.2fr_1fr_1fr] border-t border-gray-200 py-5 items-center">
            <div className="font-medium">Sales</div>
            <div>198</div>
            <div className="flex items-center gap-3 font-semibold">
              88.7%
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-700">
                Good
              </span>
            </div>
            <div>93.4%</div>
            <div>92%</div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-[1.5fr_1fr_1.2fr_1fr_1fr] border-t border-gray-200 py-5 items-center">
            <div className="font-medium">Marketing</div>
            <div>156</div>
            <div className="flex items-center gap-3 font-semibold">
              85.3%
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-yellow-100 text-yellow-800">
                Average
              </span>
            </div>
            <div>91.2%</div>
            <div>78%</div>
          </div>

          {/* Row 4 */}
          <div className="grid grid-cols-[1.5fr_1fr_1.2fr_1fr_1fr] border-t border-gray-200 py-5 items-center">
            <div className="font-medium">Operations</div>
            <div>167</div>
            <div className="flex items-center gap-3 font-semibold">
              89.1%
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-700">
                Good
              </span>
            </div>
            <div>96.1%</div>
            <div>94%</div>
          </div>
        </div>
      </div>
    </div>
  );
}