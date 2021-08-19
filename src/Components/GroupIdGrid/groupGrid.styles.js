import styled from "styled-components";

export const Container = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 70%;
  width: 100%;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: var(--blue-dark);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--blue-light);
    border-radius: 5px;
  }
`;
export const Title = styled.h1`
  width: 100%;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  height: 80px;
  margin: 0 auto;
  text-align: center;
  font-size: 1.8rem;
  color: white;
  font-family: Sansita;
  background-image: linear-gradient(var(--blue-light), var(--blue-dark));

  .AddGoalButton,
  .ActivityButton {
    margin: 20px;
    color: var(--yellow);

    &:hover {
      transform: scale(1.2);
      transition: 0.5s;
    }
  }
`;
export const GroupTitle = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: white;
  font-family: Sansita;
  background-image: linear-gradient(var(--blue-light), var(--blue-dark));
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  line-height: 60px;
  position: relative;

  .SubsButton {
    margin: 20px;
    color: var(--yellow);

    &:hover {
      transform: scale(1.2);
      transition: 0.5s;
    }
  }
`;
export const ContainerGoal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  max-height: 80%;
  width: 100%;
  overflow-y: auto;
  font-size: 12px;
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: var(--blue-dark);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--blue-light);
    border-radius: 5px;
  }
  .Grid {
    border-radius: 25px;
    margin-top: 45px;
    width: 100%;
    justify-self: center;
    grid-template-rows: 8;
    grid-template-columns: 8;
    background-image: var(--blue-dark);
  }
`;

export const ContainerDescription = styled.div`
  text-align: center;
  background-color: var(--blue-dark);
  width: 60%;
  display: flex;
  justify-content: center;
  margin: auto;
  border-radius: 45px;
  padding: 0.5rem;
  p {
    font-size: 1rem;
  }
`;
