import styled from "styled-components";

export const WidgetLG = styled.div`
  display: flex;
  flex: 2;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 20px;
  margin-right: 20px;
  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;
