import React, { Suspense } from "react";
import LayoutStyled from "./LayoutStyled";
import { Route, Routes } from "react-router-dom";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import Header from "../Header/Header";
import NavigationBar from "../NavigationBar/NavigationBar";
import { useAppSelector } from "../../redux/hooks";
import Loader from "../Loader/Loader";
const CreateGraffitiPage = React.lazy(
  () => import("../../pages/CreateGraffitiPage/CreateGraffitiPage")
);
const DetailPage = React.lazy(
  () => import("../../pages/DetailPage/DetailPage")
);
const GraffitiPage = React.lazy(
  () => import("../../pages/GraffitiPage/GraffitiPage")
);

const Layout = (): JSX.Element => {
  const { isLoading } = useAppSelector(({ ui }) => ui);
  return (
    <LayoutStyled>
      <Header />
      <NavigationBar />
      {isLoading && <Loader />}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<GraffitiPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/create" element={<CreateGraffitiPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
      </Suspense>
    </LayoutStyled>
  );
};

export default Layout;
