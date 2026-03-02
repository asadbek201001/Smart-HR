import React from "react";

export default function DashboardSection() {
  return (
    <div className="grid grid-cols-2 gap-6 p-6">
      <div className="bg-white rounded-2xl p-8 shadow-sm animate-fadeUp">
        <div className="flex justify-between items-center">
          <h2 className="text-[20px] font-semibold text-[#1e1e1e]">
            Attendance Overview
          </h2>
          <div className="bg-[#dff3e7] text-[#2e9d6f] px-4 py-1 rounded-full font-semibold text-sm">
            ↗ 94.2%
          </div>
        </div>

        <div className="flex items-center gap-10 mt-8">
          <div className="w-[180px] h-[180px] rounded-full bg-[#eef1ef] flex flex-col items-center justify-center animate-scaleIn">
            <h1 className="text-4xl font-bold">94.2%</h1>
            <p className="text-[#6b6b6b]">Overall</p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex justify-between w-[220px]">
              <div className="flex items-center text-[#444]">
                <span className="w-3 h-3 rounded-full bg-[#6bb38a] mr-2"></span>
                Sick Leave
              </div>
              <strong>35%</strong>
            </div>

            <div className="flex justify-between w-[220px]">
              <div className="flex items-center text-[#444]">
                <span className="w-3 h-3 rounded-full bg-[#4e79a7] mr-2"></span>
                Vacation
              </div>
              <strong>45%</strong>
            </div>

            <div className="flex justify-between w-[220px]">
              <div className="flex items-center text-[#444]">
                <span className="w-3 h-3 rounded-full bg-[#e8c089] mr-2"></span>
                Personal Days
              </div>
              <strong>15%</strong>
            </div>

            <div className="flex justify-between w-[220px]">
              <div className="flex items-center text-[#444]">
                <span className="w-3 h-3 rounded-full bg-[#d9978f] mr-2"></span>
                Unpaid Leave
              </div>
              <strong>5%</strong>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="font-semibold">Attendance Rate</h3>
          <p className="text-[#6b6b6b]">Current month</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-sm animate-fadeUp delay-200">
        <div className="flex justify-between items-center">
          <h2 className="text-[20px] font-semibold text-[#1e1e1e]">
            Department Distribution
          </h2>
          <span className="text-[#2a8c89] cursor-pointer">
            Manage ⚙
          </span>
        </div>

        <div className="mt-10 flex justify-center">
          <div
            className="relative w-[260px] h-[260px] rounded-full animate-rotateIn"
            style={{
              background: `conic-gradient(
                #1f6f6d 0% 23%,
                #2a8c89 23% 40%,
                #7fb685 40% 55%,
                #4e79a7 55% 65%,
                #8f8f8f 65% 78%,
                #e8c089 78% 88%,
                #d9978f 88% 100%
              )`,
            }}
          >
            <div className="absolute w-[140px] h-[140px] bg-white rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}