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
import { useNavigate } from "react-router-dom";

export const NavigationBar = () => {
  const navigateTo = useNavigate();
  const [isLoggedin, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loginStatus = localStorage.getItem("loginStatus"); //this will always return a string so it needs to be coerced
    setIsLoggedIn(loginStatus === "true");
  }, []);

  return (
    <Navbar>
      <NavbarBrand>
        <div
          className="logo-text cursor-pointer"
          onClick={() => navigateTo("/")}
        >
          Job Quest
        </div>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {isLoggedin ? (
          <NavbarItem className="nav-button mt-5">
            <Button
              onClick={() => {
                localStorage.setItem("loginStatus", false);
                navigateTo("/login");
              }}
              className="signup-text"
            >
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
  );
};
