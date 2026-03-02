import Menu from "../components/Menu";
import Hero from "./dashboard/Hero";
import EmployeeTrends from "./dashboard/EmployeeTrends";
import DashboardSection from "./dashboard/DashboardSection";
import RecentActivities from "./dashboard/RecentActivities";
import SystemStatus from "./dashboard/SystemStatus"

function Dashboard() {
  return (
    <>
      <Menu />
      <div className="w-full max-w-[1400px] mx-auto pt-7.5 px-5 pb-15 flex flex-col gap-10">
        <Hero />
        <EmployeeTrends />
        <DashboardSection />
        <RecentActivities />
        <SystemStatus />
      </div>
    </>
  );
}

export default Dashboard;
