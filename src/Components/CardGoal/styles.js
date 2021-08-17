import styled from "styled-components";

export const GoalCard = styled.div`
  @media (max-width: 700px) {
    width: 100%;
    min-width: 200px;
    margin: 0;
    margin-bottom: 3px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 456px;
  height: 85px;
  justify-content: center;
  background-image: var(--background-cards);
  border-radius: 100px;
  font-family: Sansita;
  margin-bottom: 20px;
  margin-left: 20px;
  color: var(--white);
  box-shadow: 5px 5px 10px 3px #00000054;

  .flex-column {
    display: flex;
    flex-direction: column;
    height: 85px;
  }
  .flex-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
  .goalName {
    padding: 0;
    margin: 0;
    text-align: center;
    width: 70%;
    font-size: 1.3rem;
  }

  .RightLabel {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 5px;
    width: 15%;
    padding-right: 30px;
    padding-top: 15px;
    p {
      background-color: var(--yellow);
      border-radius: 25px 0 25px 0;
      padding: 3px 7px;
    }
  }
  .Progress {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin-top: 10px;
    cursor: pointer;

    div {
      border-radius: 5px;
    }

    button {
      margin-left: 5px;
    }
    svg {
      font-size: 20px;
      color: var(--yellow);
    }
  }
  @media (max-width: 500px) {
    width: 80%;
    .goalName {
      font-size: 1.5rem;
    }

    p {
      font-size: 0.5rem;
    }
  }
`;
