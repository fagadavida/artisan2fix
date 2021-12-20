import React from "react";
import "./UsersideBar.css";
import { NavMenu, NavLinks, NavItem } from "./UserSideBar.element";
import {
  Category,
  RoomServiceOutlined,
  Settings,
  CardTravelSharp,
  People,
  Payment,
  Security,
  PersonAddDisabled,
} from "@material-ui/icons";
// import jwt from "jsonwebtoken";

const SideBar = (history) => {
  // const data = jwt.decode(localStorage.getItem("authToken"));
  // let id;
  // if (data) {
  //   id = data.id;
  // } else {
  //   history.push("/login");
  // }
  return (
    <div className="user-side-bar">
      <NavMenu>
        <NavItem>
          <NavLinks to="/index">
            <Settings />
            Setting
          </NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="/statusindex">
            <Settings />
            Status
          </NavLinks>
        </NavItem>

        <NavItem>
          <NavLinks to="/categoriesindex">
            <Category />
            Category
          </NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="/index">
            <RoomServiceOutlined />
            Services
          </NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="/indexorder">
            <CardTravelSharp />
            Orders
          </NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="/usersindex">
            <People />
            Users
          </NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="/about">
            <PersonAddDisabled />
            Pedding
          </NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="/index">
            <Payment />
            Payment
          </NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="/about">
            <Security /> Password
          </NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="/logout">Logout </NavLinks>
        </NavItem>
      </NavMenu>
    </div>
  );
};

export default SideBar;
