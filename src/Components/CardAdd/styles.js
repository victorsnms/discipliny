import styled from "styled-components";

export const CardAddWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 456px;
  height: 85px;
  justify-content: center;
  background-color: rgba(85, 207, 224, 0.66);
  border-radius: 100px;
  font-family: Sansita;
  margin-bottom: 40px;
  margin-left: 40px;
  color: white;
  box-shadow: 5px 5px 10px 3px #00000054;

  .add {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    cursor: pointer;
    background-color: white;
    border-radius: 50%;
    p {
      padding: 0;
      margin: 0;
      height: 110%;
      font-size: 2rem;
      font-weight: 100;
      color: var(--blue-light);
    }
  }
`;
