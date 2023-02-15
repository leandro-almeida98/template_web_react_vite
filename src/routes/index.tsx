import React, { Suspense } from "react";
import Layout from "../components/layout/";
import Login from "../pages/Login";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import MENU from "../system/menu";
import { generate_routes_dinamics } from "../util/";
interface IPrivateRoute {
  auth: any;
  children: any;
}
interface IRoutes {}

const RoutesComponent: React.FC<IRoutes> = (props) => {
  const user = {
    id: "1",
    name: "robin",
    permissions: ["analyze"],
    roles: ["admin"],
    isAuthenticated: true,
  };

  const {} = props;

  // const router = createBrowserRouter(generate_routes_dinamics(MENU));

  const RoutesPrivates: React.FC<any> = () => {
    return (
      <Layout layout="menuLeft">
        <div>
          {generate_routes_dinamics(MENU).map((route) => {
            if (route.isPrivate)
              return <Route path={route.path} element={route.element} />;
          })}
        </div>
      </Layout>
    );
  };

  // const ProtectedRoutes = (props: any) => {
  //   const auth = user?.isAuthenticated;

  //   return auth ? <Outlet /> : <Navigate to="/login" />;
  // };

  // const PublicRoutes = (props: any) => {
  //   const auth = user?.isAuthenticated;

  //   return auth ? <Navigate to="/dashboard" /> : <Outlet />;
  // };

  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} key={"path"} element={<Login />} />
        {/* <RoutesPrivates /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
