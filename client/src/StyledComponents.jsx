import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerShadow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-top: 20px;
  margin-right: 25px;
  margin-left: 10px;
  margin-bottom: 20px;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
export const BTNCreate = styled.button`
  padding: 10px 15px;
  background: green;
  border-radius: 10px;
  border: none;
`;
export const BTNLink = styled(Link)`
  text-decoration: none;
  font-weight: 00px;
  color: white;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin: 15px;
`;
export const TitleBar = styled.div`
  display: flex;
  width: 95%;
  flex-direction: row;
  justify-content: space-between;
  margin: 15px;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
