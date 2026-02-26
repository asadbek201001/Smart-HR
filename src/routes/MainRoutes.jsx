import { BrowserRouter as Router, Routes, Route } from "react-router";
import ROUTES from "./routes";

// Import Pages

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />;
      <Route path={ROUTES.LOGIN} element={<Login />} />;
    </Routes>
  );
};

export default MainRoutes;
