import React, { Suspense } from "react";
import Layout from "../components/layout/";
import Login from "../pages/Login";
import NoPermission from "../pages/NoPermission";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";

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

  const RoutesDinamic = () => {
    if (!user.isAuthenticated) return null;
    return (
      <React.Fragment>
        <Layout layout="menuLeft">
          <div>
            <Routes>
              {generate_routes_dinamics(MENU).map((route) => {
                return (
                  <Route
                    path={route.path}
                    // key={"path"}
                    element={
                      <AuthenticatedRoutes>{route.element}</AuthenticatedRoutes>
                    }
                  />
                );
              })}
            </Routes>
          </div>
        </Layout>
      </React.Fragment>
    );
  };

  const AuthenticatedRoutes = ({ children, noAuthenticated = false }: any) => {
    console.log("##### -> AuthenticatedRoutes -> children:", children);
    const auth = user?.isAuthenticated;
    if (noAuthenticated) !auth ? children : <Navigate to="/home" />;
    return auth ? children : <Navigate to="/login" />;
  };
  const PublicRoutes = ({ children }: any) => {
    const auth = user?.isAuthenticated;
    return !auth ? children : <Navigate to="/home" />;
  };
  const PrivateRoutes = ({ children, permission }: any) => {
    let isPermission = false;
    for (let i = 0; i < permission.length; i++) {
      if (user?.permissions.includes(permission[i])) {
        isPermission = true;
      }
    }
    return isPermission ? children : <Navigate to="/sem-permissao" />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={`/login`}
          key={"path"}
          element={
            <PublicRoutes>
              <Login />
            </PublicRoutes>
          }
        />
      </Routes>
      <RoutesDinamic />
    </BrowserRouter>
  );
};

export default RoutesComponent;
