import styled from "styled-components";

export const HabitWrapper = styled.div`
  display: flex;
  font-family: "Sansita";
  color: white;

  .ContainerCards {
    width: 100%;
    display: grid;
    place-items: center;
    background-color: var(--cream);

    section {
      width: 70%;
      min-width: 320px;
      border-radius: 50px;
      background-color: #2f4858;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      header {
        background: linear-gradient(0deg, #f26419 0%, #f6ae2d 100%);
        border-radius: 50px 50px 0px 0px;
        width: 100%;
        height: 114px;
        display: grid;
        place-items: center;

        h1 {
          width: 100%;
          border: none;
          font-size: clamp(9vw, 10vw, 11vw);
          text-align: center;
        }
      }

      .SubContainerCards {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;

        padding: 30px;
        align-items: center;
      }
    }
  }

  @media (min-width: 768px) {
    aside {
      display: flex;
    }

    .ContainerCards section header h1 {
      font-size: clamp(5vw, 6vw, 7vw);
    }

    .ContainerCards section {
      width: 90%;
    }
  }

  @media (min-width: 1299px) {
    .ContainerCards section header h1 {
      font-size: clamp(4vw, 5vw, 6vw);
    }
  }
`;
