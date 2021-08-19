import styled from "styled-components";

export const HabitWrapper = styled.div`
  display: flex;
  font-family: "Sansita";
  color: var(--white);
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  background-image: var(--orange-gradient-background);

  .Filters {
    z-index: 1;
    position: absolute;
    top: 90%;
    right: 0;
  }
  .ContainerCards {
    width: 100%;
    display: grid;
    place-items: center;

    section {
      width: 70%;
      min-width: 320px;
      border-radius: 25px;
      background-image: var(--dark-blue-gradient);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      animation: appearing 1s ease-in-out backwards;
      animation-delay: 0.5s;
      header {
        background-image: var(--light-blue-gradient);
        border-radius: 25px 25px 0px 0px;
        width: 100%;
        height: 70px;
        display: grid;
        place-items: center;
        position: relative;

        h1 {
          width: 100%;
          border: none;
          font-size: 3rem;
          text-align: center;
        }
      }

      .SubContainerCards {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
        align-items: center;
        height: 70vh;
        padding: 30px;
        overflow-y: auto;
        justify-content: center;

        ::-webkit-scrollbar {
          width: 10px;
        }
        /* Track */
        ::-webkit-scrollbar-track {
          background: var(--blue-dark);
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
          background: var(--blue-light);
          border-radius: 5px;
          height: 500px;
        }
      }
    }
  }

  @media (min-width: 769px) {
    .ContainerCards section header h1 {
      font-size: 2rem;
    }

    .ContainerCards section {
      width: 90%;
    }

    .SubContainerCards {
      padding: 30px;
    }
  }

  @media (min-width: 1299px) {
    .ContainerCards section header h1 {
      font-size: 3rem;
    }
  }

  @media (max-width: 520px) {
    .ModalPosition {
      align-self: flex-start;
      margin-left: 8px;
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

export const ModalCenter = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 8px 0;
`;
