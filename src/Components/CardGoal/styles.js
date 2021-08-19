import styled from "styled-components";

export const GoalCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 85px;
  justify-content: center;
  background-image: var(--background-cards);
  border-radius: 100px;
  font-family: Sansita;
  margin-bottom: 10px;
  color: var(--white);
  box-shadow: 5px 5px 10px 3px #00000054;

  .CheckGoalButton {
    align-self: flex-start;
    cursor: pointer;
    font-size: 1.4rem;
    transform: translate(8px, 8px);
    color: var(--white);
  }

  .flex-column {
    display: flex;
    flex-direction: column;
    height: 85px;
  }
  .flex-row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 85%;
    margin-top: 5px;
  }
  .goalName {
    padding: 0;
    margin: 0;
    text-align: center;
    font-size: 12px;
    width: 90%;
  }

  .RightLabel {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 14px;
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
    width: 70%;
    margin-top: -37px;
    cursor: pointer;

    div {
      border-radius: 5px;
    }

    button {
      margin-left: 5px;
    }
    svg {
      font-size: 20px;
      color: var(--white);
    }
  }

  @media (min-width: 768px) {
    .goalName {
      font-size: 14px;
    }

    .CheckGoalButton {
      font-size: 2rem;
    }
    .flex-row {
      width: 85%;
      justify-content: space-between;
    }
  }

  @media (min-width: 1185px) {
    .goalName {
      font-size: 16px;
    }
    .flex-row {
      width: 90%;
    }
  }
`;
