import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin:0;
    padding:0;
    font-family: 'Source Sans Pro', sans-serif;

}
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-left: 50px;
  padding-right: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;
export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#169E5C" : "#8467F8")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: ${({ primary }) => (primary ? "#8467F8" : "#169E5C")};
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export default GlobalStyle;
