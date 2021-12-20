import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;
export const TopRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 20px;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  height: 300px;
  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;
export const TopRowFlex1 = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: flex-start;
  margin: 20px;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  height: 300px;
  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;
export const TopRowFlex2 = styled.div`
  display: flex;
  flex: 2;
  flex-direction: row;
  align-items: flex-start;
  margin: 20px;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  height: 300px;
  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;
