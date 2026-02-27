import { BrowserRouter as Router, Routes, Route } from "react-router";
import ROUTES from "./routes";

import Login from "../pages/Login";
const MainRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.MAIN} element={<Login />} />;
      <Route path={ROUTES.LOGIN} element={<Login />} />;
    </Routes>
  );
};

export default MainRoutes;
