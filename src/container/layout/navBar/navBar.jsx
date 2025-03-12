import React from "react";

import { authService } from "../../../services/auth/auth.services";
import { useNavigate } from "react-router-dom";
import useicon from "../../../assets/images/useicon.png";

const NavBar = ({ children }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    authService.logout();
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg z-index-1   bg-body-tertiary  nav-color nav-style">
        <div className="container-fluid"></div>
      </nav>
      <main className="mt-1">{children}</main>
    </>
  );
};

export default NavBar;
