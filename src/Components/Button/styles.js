import styled from "styled-components";

export const StyledButton = styled.button`
  outline: none;
  padding: 10px 20px;
  border-radius: 30px;
  font-weight: bold;
  cursor: pointer;
  font-size: 1rem;
  background-color: #33658a;
  color: white;
  box-shadow: 3px 3px 3px black;
  &:hover {
    filter: contrast(150%);
  }
  &:active {
    transform: translate(2px, 2px);
    box-shadow: 1px 1px 1px black;
  }
`;
