import styled from "styled-components";

export const HabitCard = styled.div`
  display: flex;
  flex-direction: row;
  width: 586px;
  height: 155px;
  justify-content: space-between;
  background-color: rgba(85, 207, 224, 0.66);
  border-radius: 50px;
  font-family: Sansita;
  color: white;
  box-shadow: 5px 5px 10px 3px #00000054;

  .Check {
    display: grid;
    place-items: center;
    width: 17%;

    button {
      width: 100%;
      background-color: #f6ae2d;
      color: white;

      height: 155px;
      border-radius: 50px 0 0 50px;
      display: block;
      padding-left: 27px;
      svg {
        font-size: 40px;
      }
    }
  }

  .Central {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 55%;

    .Progress {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      margin: 20px 0 0 0;

      div {
        border-radius: 5px;
      }
      svg {
        font-size: 30px;
      }
    }

    p {
      color: white;
      font-size: 36px;
      padding: 3px;
      font-weight: 700;
    }

    .BottomLabels {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 5px;

      p {
        background-color: #f6ae2d;
        font-size: 18px;
        margin: 5px;
        border-radius: 25px 0 25px 0;
      }
    }
  }

  .Edit {
    display: grid;
    place-items: center;
    button {
      background-color: #f6ae2d;
      padding: 10px 20px;
      cursor: pointer;
      border-radius: 8px;
    }
  }
`;
