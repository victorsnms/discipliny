import styled from "styled-components";

export const MyGroupsWrapper = styled.div`
  display: flex;
  font-family: "Sansita";
  color: white;

  .ContainerCards {
    width: 100%;
    display: grid;
    place-items: center;
    background-color: #fef2ec;

    section {
      width: 70%;
      height: 967px;
      border-radius: 50px;
      background-color: #2f4858;
      display: flex;
      flex-direction: column;
      header {
        background: linear-gradient(0deg, #f26419 0%, #f6ae2d 100%);
        border-radius: 50px 50px 0px 0px;
        width: 100%;
        height: 114px;

        h1 {
          width: 100%;
          border: none;
          width: 50%;
          margin: 0 auto;
          font-size: 60px;
          text-align: center;
        }
      }

      .SubContainerCards {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        width: 100%;
        padding-top: 30px;
      }
    }
  }

  @media (min-width: 768px) {
    aside {
      display: flex;
    }
  }
`;
