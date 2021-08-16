import styled from "styled-components";

export const MenuAside = styled.div`
  background-color: transparent;
  animation: leftToRight 2s cubic-bezier(0.18, 0.89, 0.32, 1.28) backwards;

  aside {
    display: none;
    width: 100%;
    min-height: 100vh;
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
      flex-direction: column;
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
        display: flex;
        justify-content: center;
        align-items: center;
        height: 62px;
        text-align: center;
        font-size: 36px;
        cursor: pointer;

        svg {
          margin: 0 5px 0px 0px;
        }
      }

      .Hab {
        background-image: var(--light-blue-gradient);
      }

      .MyGroup {
        background-image: var(--dark-yellow-gradient);
      }

      .Descobrir {
        background-image: var(--orange-gradient);
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
      transform: translateX(-1px);
    }
  }
`;
