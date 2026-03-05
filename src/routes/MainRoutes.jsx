import { Routes, Route } from "react-router-dom";
import ROUTES from "./routes";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";


const MainRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.MAIN} element={<Login />} />
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
    </Routes>
  );
};

export default MainRoutes;
