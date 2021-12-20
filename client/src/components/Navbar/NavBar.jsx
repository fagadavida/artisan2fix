import React, { useState, useEffect } from "react";
import { Button } from "../../globalStyles";
import TopAvatar from "../../images/fatherhood.svg";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink,
  TopIconBadge,
} from "./Navbar.element";
import { FaTimes, FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import jwt from "jsonwebtoken";
import { NotificationsNone, ShoppingBasket } from "@material-ui/icons";

function NavBar({ history }) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const [isLoggedin, setIsLoggedin] = useState(false);

  useEffect(() => {
    const data = jwt.decode(localStorage.getItem("authToken"));
    if (!data) {
      setIsLoggedin(true);
    }
  }, [history]);

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">ARTISAN 2 FIX</NavLogo>

          <NavMenu onClick={handleClick} click={click}>
            {isLoggedin && (
              <NavItem>
                <NavLinks to="/">Home</NavLinks>
              </NavItem>
            )}
            {isLoggedin && (
              <NavItem>
                <NavLinks to="/about">About Us</NavLinks>
              </NavItem>
            )}
            {!isLoggedin && (
              <NavItem>
                <NavLinks to="/about" style={{ position: "relative" }}>
                  <NotificationsNone />
                  <TopIconBadge>2</TopIconBadge>
                </NavLinks>
              </NavItem>
            )}
            {!isLoggedin && (
              <NavItem>
                <NavLinks to="/about" style={{ position: "relative" }}>
                  <ShoppingBasket tooltip="Notifications" />
                  <TopIconBadge>2</TopIconBadge>
                </NavLinks>
              </NavItem>
            )}
            {isLoggedin && (
              <NavItemBtn>
                <NavBtnLink to="/signup">
                  <Button primary>Signup</Button>
                </NavBtnLink>
              </NavItemBtn>
            )}
            {isLoggedin ? (
              <NavItem>
                <NavLinks to="/login">Login</NavLinks>
              </NavItem>
            ) : (
              <NavItem>
                <NavLinks to="/logout">
                  <img
                    src={TopAvatar}
                    className="topAvatar"
                    style={{
                      width: "40px",
                      height: "40px",
                      background: "white",
                      opacity: "0.8",
                      borderRadius: "50%",
                      cusor: "pointer",
                    }}
                    alt="user"
                  />
                </NavLinks>
              </NavItem>
            )}
          </NavMenu>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
}

export default NavBar;
