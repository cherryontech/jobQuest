import React from "react";
import PropTypes from "prop-types";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import "./style.css";
import { useNavigate } from "react-router-dom";

export const NavigationBar = ({isLoggedin}) => {
  const navigateTo = useNavigate();
  
  return (
    (isLoggedin)?
    <Navbar>
      <NavbarBrand>
        <div className="logo-text cursor-pointer" onClick={() => navigateTo("/")}>Job Quest</div>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem className="nav-button mt-5">
          <Link color="login" href="/login" className="login-text">Login</Link>
        </NavbarItem>
        <NavbarItem className="nav-button mt-5">
          <Button as={Link} href="/login" className="signup-text">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      </Navbar>
      :
      <Navbar>
      <NavbarBrand>
        <div className="logo-text cursor-pointer" onClick={() => navigateTo("/")}>Job Quest</div>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem className="nav-button mt-5">
          <Button as={Link} href="/login" className="signup-text">
            Log Out
          </Button>
        </NavbarItem>
      </NavbarContent>
      </Navbar>
  );
}

NavigationBar.propTypes = {
  isLoggedin: PropTypes.boolean,
};