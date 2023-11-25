import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import "./style.css";

export const NavigationBar = () => {
  const navigateTo = useNavigate()

  return (
    <Navbar>
      <NavbarBrand>
      <div className="logo-text cursor-pointer" onClick={()=> navigateTo("/")}>Job Quest</div>
      </NavbarBrand>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <button onClick={()=> {navigateTo("/login")}}>
          <Link>Login</Link>
          </button>
        </NavbarItem>
        <NavbarItem>
          {/* <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button> */}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
