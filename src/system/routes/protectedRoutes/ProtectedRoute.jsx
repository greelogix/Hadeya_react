import React from "react";
import { Navigate } from "react-router";

import { getLocalStorage } from "../../storageUtilites/storageUtilities";
import { localStorageConstants } from "../../constants/GlobalConstants";
const ProtectedRoute = ({ isProtected, children }) => {
  const currentUser = getLocalStorage(
    localStorageConstants.CURRENT_USER
  );

  // if (currentUser && !isProtected) {
  //   return <Navigate to="/" replace />;
  // } else if (!currentUser && isProtected) {
  //   return <Navigate to="/login" replace />;
  // }

  return children;
};

export default React.memo(ProtectedRoute);
