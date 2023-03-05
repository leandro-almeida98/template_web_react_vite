import React, { Suspense } from "react";
import Layout from "../components/layout/";
import Login from "../pages/Login";
import NoPermission from "../pages/NoPermission";
import {
  Route,
  Routes,
  BrowserRouter,
  useLocation,
  Navigate,
  RouteProps,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import MENU from "../system/menu";
import { generate_routes_dinamics } from "../util/";
interface IPrivateRoute {
  auth: any;
  children: any;
}
interface IRoutes {}

const RoutesComponent: React.FC<IRoutes> = (props) => {
  const user = useSelector((state: any) => state.user);
  const {} = props;

  const RoutesDinamic = () => {
    const location = useLocation();
    console.log("##### -> RoutesDinamic -> location:", location);
    return (
      <React.Fragment>
        <Layout layout="menuLeft">
          <div>
            <Routes>
              {generate_routes_dinamics(MENU).map((route) => {
                console.log(
                  "##### -> {generate_routes_dinamics -> route:",
                  route
                );
                return (
                  <Route
                    path={route.path}
                    key={route.path}
                    element={
                      <PrivateRoutes permission={route.permissions}>
                        {route.element}
                      </PrivateRoutes>
                    }
                  />
                );
              })}
              <Route path="*" element={<Navigate to="/home" />} />
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
    console.log("##### -> PrivateRoutes -> permission:", permission);
    let isPermission = false;
    for (let i = 0; i < permission.length; i++) {
      if (user?.permissions.includes(permission[i])) {
        isPermission = true;
      }
    }

    return isPermission ? children : <NoPermission />;
  };

  return (
    <BrowserRouter>
      {user?.isAuthenticated ? (
        <RoutesDinamic />
      ) : (
        <Routes>
          <Route path={`/login`} key={"login"} element={<Login />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default RoutesComponent;
