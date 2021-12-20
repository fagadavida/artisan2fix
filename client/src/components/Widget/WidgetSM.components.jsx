import styled from "styled-components";

export const WidgetSM = styled.div`
  display: flex;
  flex: 1;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 20px;
  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const WidgetSMTitle = styled.span``;
export const WidgetSMList = styled.ul``;
export const WidgetSMItems = styled.li``;
export const WidgetSmImg = styled.img``;
export const WidgetSmUser = styled.div``;
