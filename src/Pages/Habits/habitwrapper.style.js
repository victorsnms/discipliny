import styled from "styled-components";

export const HabitWrapper = styled.div`
  display: flex;
  font-family: "Sansita";
  color: white;

  aside {
    display: none;
    width: 100%;
    height: 1091px;
    width: 422px;
    background: #2f4858;
    border-radius: 0px 50px 50px 0px;

    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    h1 {
      font-size: 60px;
      font-weight: 700;
      text-align: center;
    }

    .ImgContainer {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      img {
        background-color: red;
        width: 148px;
        height: 148px;
        border-radius: 100%;
      }

      span {
        font-size: 36px;
      }
    }

    .ParagContainer {
      width: 100%;
      p {
        height: 62px;
        text-align: center;
        font-size: 36px;
      }

      .Hab {
        background-color: rgba(85, 207, 224, 0.66);
      }

      .MyGroup {
        background-color: #f6ae2d;
      }

      .Descobrir {
        background-color: #f26419;
      }
    }
  }

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
      align-items: center;
      justify-content: space-between;

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
        justify-content: space-around;
        flex-wrap: wrap;
        height: 100%;
        padding: 30px;
        align-items: center;
      }
    }
  }

  @media (min-width: 768px) {
    aside {
      display: flex;
    }
  }
`;
