import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--white);
  background-image: var(--orange-gradient-background);
  animation: appearing 1s ease-in-out backwards;

  .cardContainer {
    @media (max-width: 740px) {
      width: 100vw;
      flex-direction: column;
      min-height: 100vh;
    }
    display: flex;
    height: 100%;
    width: 75vw;
    padding-top: 50px;
    justify-content: center;
    align-items: flex-start;
    animation: appearing 2s ease-in-out backwards;
  }
  .titleGroup {
    font-size: 2rem;
    text-align: center;
    line-height: 90px;
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
export const Cardmembers = styled.div`
  text-align: center;
  font-size: 2rem;
  margin: 0 auto;
  width: 80%;
  min-height: 45px;
  justify-content: space-between;
  background-color: rgba(85, 207, 224, 0.66);
  border-radius: 100px;
  font-family: Sansita;
  margin-bottom: 20px;
  color: var(--white);
  box-shadow: 5px 5px 10px 3px #00000054;
`;
