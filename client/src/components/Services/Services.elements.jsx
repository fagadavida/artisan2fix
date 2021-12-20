import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerService = styled.div`
  margin: 5px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  color: #333;
  width: 25%;
`;
export const Card = styled.div`
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  text-align: center;
  height: 300px;
  min-width: 200px;

  background: #fff;

  flex: 1;
  transition: all 0.5s ease;
  &:hover {
    background: #b6e8f3;
  }
`;
export const Img = styled.img`
  height: 60%;
  object-fit: cover;
  margin-top: 5px;
`;
export const InfoCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.h4`
  padding: 8px;
`;

export const ButtonLink = styled(Link)`
  background: green;
  border: 0;
  outline: 0;
  border-radius: 5px;
  padding: 5px;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;
`;
export const Icon = styled.div``;
export const IconWrapper = styled.div`
  display: flex;
  width: 80%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;
export const Description = styled.span`
  font-size: 14px;
  padding: 4px;
`;
export const ServiceLink = styled(Link)`
  text-decoration: none;
`;
