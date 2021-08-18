import styled from "styled-components";

export const GroupCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 300px;
  height: 100px;
  justify-content: space-between;
  background-image: var(--background-cards);
  border-radius: 100px;
  font-family: Sansita;
  margin-left: 15px;
  margin-bottom: 15px;
  color: var(--white);
  box-shadow: 5px 5px 10px 3px #00000054;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 5px;
    width: 25px;
    padding: 5px;
    svg {
      font-size: 20px;
      color: var(--yellow);
    }
  }
  .LinkBox {
    display: flex;
    width: 100%;
    padding: 10px;
    align-items: center;

    .groupName {
      padding: 0;
      margin: 0;
      text-align: center;
      width: 100%;
      font-size: 24px;
    }
  }

  @media (min-width: 768px) {
  }
`;
