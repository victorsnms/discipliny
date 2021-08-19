import styled from "styled-components";

export const CardActivity = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 85px;
  justify-content: center;
  background-image: var(--background-cards);
  border-radius: 100px;
  font-family: Sansita;
  color: var(--white);
  margin-bottom: 10px;
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
    align-items: center;
    width: 90%;
  }
  .activityName {
    padding: 0;
    margin: 0;
    text-align: center;
    width: 80%;
    font-size: 16px;
  }
  .activityDate {
    font-size: 14px;
    margin-left: 10px;
    margin-right: 7px;
  }

  button {
    margin-left: 8px;
  }
`;
