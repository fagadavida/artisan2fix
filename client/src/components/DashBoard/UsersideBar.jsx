import React from "react";
import "./UsersideBar.css";
import { NavMenu, NavLinks, NavItem } from "./UserSideBar.element";
import {
  LineStyle,
  // Timeline,
  // TrendingUp,
  // Report,
  // PersonOutline,
  // AddShoppingCart,
} from "@material-ui/icons";

const UsersideBar = () => {
  return (
    <div className="user-side-bar">
      <NavMenu>
        <NavItem>
          <NavLinks to="/index">
            <LineStyle />
            Setting
          </NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="/categoriesindex">Category</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="/index">Services</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="/about">Pedding</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="/index">Payment</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="/about">Change Password</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="/logout">Logout</NavLinks>
        </NavItem>
      </NavMenu>
    </div>
  );
};

export default UsersideBar;
