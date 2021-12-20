import styled from "styled-components";
import { Container } from "../../globalStyles";
import { Link } from "react-router-dom";
import { FaBaby } from "react-icons/fa";

export const Nav = styled.nav`
  background: green;
  /* background: #4285F4; */
  height: 70px !important;
  display: flex;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 70px !important;
  ${Container}
`;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

export const NavIcon = styled(FaBaby)`
  color: #fff;
  margin-left: 0.5rem;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: 0;
    right: 0;
    tranform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 90vh;
    position: absolute;
    top: 70px;
    border-top: 1px solid #fff;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #12c5aa;
  }
`;

export const NavItem = styled.li`
  height: 70px;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid #4b59f7;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 1rem;
    width: 100%;
    display: table;

    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`;
export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;
export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 10px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;
export const LogoImg = styled.img`
  padding-right: 0;
  border: 0;
  width: 60px;
  border-radius: 50px;
`;

export const ButtonLink = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#169E5C" : "#8467F8")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    transition: all 0.3s ease-out;
    background: ${({ primary }) => (primary ? "#8467F8" : "#169E5C")};
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
export const RedBgd = styled.div`
  background: #1ff421;
`;
export const TopIconBadge = styled.span`
  position: absolute;
  right: 14px;
  top: 18px;
  background: red;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
