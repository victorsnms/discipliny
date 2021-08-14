import styled from "styled-components";
import signupwave from "../../assets/signupwave.png";

export const HabitWrapper = styled.div`
  display: flex;
  font-family: "Sansita";
  color: var(--white);
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;

  .ContainerCards {
    width: 100%;
    display: grid;
    place-items: center;
    background-color: var(--cream);

    section {
      width: 70%;
      min-width: 320px;
      border-radius: 50px;
      background-color: var(--blue-dark);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      animation: appearing 1s ease-in-out backwards;
      animation-delay: 0.5s;

      header {
        background: linear-gradient(0deg, var(--orange) 0%, var(--yellow) 100%);
        border-radius: 50px 50px 0px 0px;
        width: 100%;
        height: 114px;
        display: grid;
        place-items: center;
        background-image: url(${signupwave});
        background-size: contain;
        background-size: 100% 100%;

        h1 {
          width: 100%;
          border: none;
          font-size: clamp(9vw, 10vw, 11vw);
          text-align: center;
        }
      }

      .SubContainerCards {
        display: grid;
        grid-template-columns: 1fr 1fr;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        width: 100%;
        min-height: 80vh;
        padding: 30px;
        align-items: center;
      }
    }
  }

  @media (min-width: 769px) {
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

  @keyframes appearing {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
