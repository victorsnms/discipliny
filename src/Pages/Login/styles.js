import styled from "styled-components";
import myImage from "../../assets/wave2.png";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url(${myImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: var(--blue-dark);

  @media (max-width: 1023px) {
    .display {
      display: none;
    }
    .guide-login {
      text-align: center;
      color: white;
      margin: 10px 15px;
    }
  }
`;

export const FormContent = styled.div`
  max-width: 15rem;
  margin: auto;
  text-align: center;
  animation: queda 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards,
    appering 2s ease-in-out forwards;

  @media (min-width: 1024px) {
    margin: 0rem 8rem;
  }

  @media (min-width: 1440px) {
    margin: 0rem 29rem;
  }

  @keyframes queda {
    0% {
      transform: translateY(-500px);
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

  h2 {
    font-size: 1.75rem;
    font-weight: bold;
    font-family: var(--font-text);
  }

  form {
    padding: 1rem;

    label {
      margin: 0;
      font-size: 0.75rem;
      font-family: var(--font-text);
    }

    input {
      background-color: var(--white);
      border: none;
      border-radius: 20px;
      margin-bottom: 0.5rem;
      outline: none;

      ::placeholder {
        font-size: 0.75rem;
      }
    }

    button {
      background-color: var(--blue-dark);
      color: var(--white);
      margin-top: 0.5rem;
      padding: 1.5rem 2.5rem;
      border-radius: 30px;
      border: 1px solid var(--cream);
    }

    p {
      font-size: 0.75rem;
      margin-top: 0.5rem;
      font-family: var(--font-text);

      a {
        color: var(--white);
        font-weight: 600;
      }
    }

    .css-gfghaq {
      margin: 0;
    }
  }
`;

export const Content = styled.div`
  h1 {
    color: var(--white);
    font-family: var(--font-titles);
    font-size: 2.5rem;
    text-align: center;
    padding: 1rem;
    animation: leftToRight 3s cubic-bezier(0.18, 0.89, 0.32, 1.28) forwards;
  }

  @media (min-width: 1024px) {
    h1 {
      text-align: start;
    }

    img {
      width: 30rem;
      position: absolute;
      bottom: 100px;
      left: 120px;
    }
    .guide-login {
      position: absolute;
      top: 80px;
      left: 50px;
      z-index: 1;
      font-size: 24px;
      max-width: 700px;
      text-align: left;
      color: var(--blue);
    }
    .white-text {
      color: white;
    }
  }

  @media (min-width: 1440px) {
    img {
      bottom: 60px;
      left: 175px;
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

export const MainContent = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: row-reverse;
`;
