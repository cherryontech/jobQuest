import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import "./style.css";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";


export const NavigationBar = () => {
  const navigateTo = useNavigate();
  const location = useLocation();
  const [isLoggedin, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loginStatus = localStorage.getItem("loginStatus");
    setIsLoggedIn(loginStatus === "true");
  }, [location.pathname]);

  return (
    <div className="top-nav-bar">
    <div className="div-wrapper">
    <Navbar>
      <NavbarBrand>
        <div
          className="logo-text cursor-pointer"
          onClick={() => navigateTo("/")}
        >
          <img className="image" alt="logo" src={logo} />
        </div>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {isLoggedin ? (
          <NavbarItem className="nav-button mt-20 mb-20">
            <Button 
            onClick={() => {
              localStorage.setItem("loginStatus", false);
              navigateTo("/login");
            }}
            className="signup-text">
              Log Out
            </Button>
          </NavbarItem>
        ) : (
          <>
            <NavbarItem className="nav-button mt-20 mb-20">
              <Link color="login" href="/login" className="login-text">
                Login
              </Link>
            </NavbarItem>
            <NavbarItem className="nav-button mt-20 mb-20">
              <Button as={Link} href="/signup" className="signup-text">
                Sign Up
              </Button>
            </NavbarItem>
          </>
        )}
      </NavbarContent>
    </Navbar>
    </div>
  </div>
  );
};

NavigationBar.propTypes = {
  isLoggedin: PropTypes.bool,
};
