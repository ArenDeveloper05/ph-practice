import { Route, Routes } from "react-router-dom";
import { ROUTER } from "./router";

import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import GiftsPage from "../pages/GiftsPage"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTER.HOME_PAGE_ROUTE} element={<HomePage />} />
      <Route path={ROUTER.ERROR_PAGE_ROUTE} element={<ErrorPage />} />
      <Route path={ROUTER.GIFTS_PAGE_ROUTE} element={<GiftsPage/>} />
    </Routes>
  );
};

export default AppRoutes;
