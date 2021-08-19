import styled from "styled-components";

export const EditUsernameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-weight: bold;
  }
  button {
    margin-top: 3px;
  }
  input {
    text-align: center;
    background-color: var(--cream);
    border-radius: 10px;
  }
`;

export const ImageContainer = styled.img`
  width: 270px;
  height: 270px;
  margin: 0 auto;
`;

export const MenuButton = styled.button`
  width: 100%;
  height: 100%;
`;
