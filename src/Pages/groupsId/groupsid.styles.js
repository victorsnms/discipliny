import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--white);
  background-image: var(--orange-gradient-background);
  animation: appearing 1s ease-in-out backwards;

  .cardContainer {
    @media (max-width: 768px) {
      width: 100vw;
      flex-direction: column;
      min-height: 100vh;
      margin-bottom: 100px;
    }
    display: flex;
    height: 100%;
    width: 75vw;
    padding-top: 50px;
    justify-content: center;
    align-items: flex-start;
    animation: appearing 2s ease-in-out backwards;

    .titleGroup {
      font-size: 2rem;
      text-align: center;
      line-height: 60px;
    }
  }

  .css-5rbgcj {
    width: 90%;
  }

  @keyframes appearing {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: 767px) {
    min-height: 100vh;

    .css-5rbgcj {
      display: flex;
      flex-wrap: wrap;
      padding: 0 20px;
      justify-content: center;
      min-height: 100vh;
      width: 100%;

      .Members {
        height: 250px;
      }

      .titleGroup {
        font-size: 2rem;
      }
    }
  }

  @media (min-width: 768px) {
    height: 100vh;
  }
`;
export const Cardmembers = styled.div`
  text-align: center;
  font-size: 1.3rem;
  margin: 0 auto;
  width: 90%;
  min-height: 45px;
  justify-content: space-between;
  background-color: rgba(85, 207, 224, 0.66);
  border-radius: 100px;
  font-family: Sansita;
  margin-bottom: 20px;
  color: var(--white);
  box-shadow: 5px 5px 10px 3px #00000054;

  @media (min-width: 768px) {
    font-size: 1.8rem;
    width: 80%;
    height: 100vh;
  }
`;
