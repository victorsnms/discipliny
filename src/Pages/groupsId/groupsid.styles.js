import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-image: var(--linear-orange);
  .cardContainer {
    display: flex;
    height: 100%;
    width: 75vw;
    padding-top: 50px;
    justify-content: center;
    align-items: flex-start;
  }
  .titleGroup {
    font-size: 2rem;
    text-align: center;
    line-height: 90px;
  }
`;
export const Cardmembers = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
  width: 80%;
  height: 45px;
  justify-content: space-between;
  background-color: rgba(85, 207, 224, 0.66);
  border-radius: 100px;
  font-family: Sansita;
  margin-bottom: 20px;
  color: var(--white);
  box-shadow: 5px 5px 10px 3px #00000054;
`;
