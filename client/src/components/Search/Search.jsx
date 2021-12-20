import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0 0 1px 0 solid black;
  opacity: 0.5;
  padding: 5px;
`;
export const SearchInput = styled.input`
  border: none;
  outline: none;

  border-radius: 1px;
  &:hover {
    border: none;
    width: 100%;
    border-bottom: 1px solid blue;
    padding-bottom: 5px;
    padding-left: 5px;
    font-size: 16px;
    font-weight: 400;
  }
`;
