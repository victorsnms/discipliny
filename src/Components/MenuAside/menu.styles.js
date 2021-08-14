import styled from "styled-components";

export const MenuAside = styled.div`
  background-color: var(--cream);
  animation: leftToRight 2s cubic-bezier(0.18, 0.89, 0.32, 1.28) forwards;

  aside {
    display: none;
    width: 100%;
    height: 100%;

    background: var(--blue-dark);
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
        cursor: pointer;
      }

      .Hab {
        background-color: rgba(85, 207, 224, 0.66);
      }

      .MyGroup {
        background-color: var(--yellow);
      }

      .Descobrir {
        background-color: var(--orange);
      }
    }
  }

  @media (min-width: 769px) {
    width: 20%;

    aside {
      display: flex;
    }
  }

  @keyframes leftToRight {
    from {
      transform: translateX(-150px);
    }
    to {
      transform: translateX(0px);
    }
  }
`;
