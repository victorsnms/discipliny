import styled from "styled-components";

export const MenuMobileC = styled.div`
  display: none;
  justify-content: space-evenly;
  color: black;
  width: 100%;
  height: 60px;
  bottom: 0;
  position: fixed;
  background-color: #2f4858;
  animation: queda 2s cubic-bezier(0.08, 0.82, 0.17, 1),
    appering 3s ease-in-out forwards;

  button {
    font-size: clamp(2.5rem, 1.5rem, 3rem);
    color: white;
    width: 20%;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      opacity: 0.5;
      transition: 0.5s;
      color: black;
    }
  }

  .buttonHab {
    background-color: rgba(85, 207, 224, 0.66);

    &:hover {
      background: rgb(85, 207, 224);
      background: linear-gradient(
        86deg,
        rgba(85, 207, 224, 1) 0%,
        rgba(150, 229, 240, 1) 29%,
        rgba(206, 240, 245, 1) 52%,
        rgba(150, 229, 240, 1) 75%,
        rgba(85, 207, 224, 1) 100%
      );
    }
  }

  .buttonMyGrup {
    background-color: #f6ae2d;

    &:hover {
      background: rgb(246, 174, 45);
      background: linear-gradient(
        86deg,
        rgba(246, 174, 45, 1) 0%,
        rgba(254, 196, 93, 1) 29%,
        rgba(252, 222, 167, 1) 52%,
        rgba(254, 196, 93, 1) 75%,
        rgba(246, 174, 45, 1) 100%
      );
    }
  }

  .buttonDesco {
    background-color: #f26419;

    &:hover {
      background: rgb(242, 100, 25);
      background: linear-gradient(
        86deg,
        rgba(242, 100, 25, 1) 0%,
        rgba(241, 131, 74, 1) 29%,
        rgba(242, 182, 151, 1) 52%,
        rgba(241, 131, 74, 1) 75%,
        rgba(242, 100, 25, 1) 100%
      );
    }
  }

  .buttonProfile {
    background-color: #e73f36;

    &:hover {
      background: rgb(231, 63, 54);
      background: linear-gradient(
        86deg,
        rgba(231, 63, 54, 1) 0%,
        rgba(231, 90, 100, 1) 29%,
        rgba(231, 150, 151, 1) 52%,
        rgba(231, 90, 100, 1) 75%,
        rgba(231, 63, 54, 1) 100%
      );
    }
  }

  @media (max-width: 768px) {
    display: flex;
  }

  @keyframes queda {
    0% {
      transform: translateY(500px);
    }

    100% {
      transform: translateY();
    }
  }

  @keyframes appering {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
