import styled from "styled-components";

export const GroupCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 456px;

  justify-content: space-between;
  background-image: var(--background-cards);
  border-radius: 100px;
  font-family: Sansita;
  margin-bottom: 40px;
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

  .groupName {
    padding: 0;
    margin: 0;
    text-align: center;
    width: 100%;
    font-size: 2rem;
  }

  .iconsBox {
    display: flex;
    flex-direction: column;
    width: 15%;
    font-size: 18px;
  }

  @media (min-width: 768px) {
    margin-left: 40px;
  }
`;
