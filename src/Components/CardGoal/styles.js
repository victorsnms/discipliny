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

  .flex-column {
    display: flex;
    flex-direction: column;
    height: 85px;
  }
  .flex-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
    margin-top: 5px;
  }
  .goalName {
    padding: 0;
    margin: 0;
    text-align: center;
    font-size: 16px;
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
    width: 87%;
    margin-top: 5px;
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
`;
