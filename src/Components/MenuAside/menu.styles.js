import styled from "styled-components";

export const MenuAside = styled.div`
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
`;
