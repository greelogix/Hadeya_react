import React from "react";
import { Routes, Route } from "react-router-dom";
import { Outlet } from "react-router";

import routes from "../routesList/routes";
import ProtectedRoute from "../protectedRoutes/ProtectedRoute";
// import Sidebar from "../../../container/layout/sidebar/sidebar";
import NavBar from "../../../container/layout/navBar/navBar";

const RouterWrapper = (props) => {
  let allRoutes = [...routes];

  const transformedRoutes = (
    <>
      {allRoutes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={
            <ProtectedRoute isProtected={route.protected}>
              {route.hasNavBar ? (
                <NavBar>{route.component}</NavBar>
              ) : (
                route.component
              )}
            </ProtectedRoute>
          }
        />
      ))}
    </>
  );

  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        {transformedRoutes}
      </Route>
    </Routes>
  );
};

export default RouterWrapper;
