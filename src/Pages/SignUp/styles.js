import styled from "styled-components";
import signUpImage from "../../assets/newave.png";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url(${signUpImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: var(--blue-dark);

  @media (max-width: 1023px) {
    .display {
      display: none;
    }
  }
`;

export const FormContent = styled.div`
  max-width: 15rem;
  margin: auto;
  text-align: center;
  animation: subida 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards,
    appering 2s ease-in-out forwards;

  @media (min-width: 1024px) {
    margin: 0rem 8rem;
  }

  @media (min-width: 1440px) {
    margin: 0rem 22rem;
  }

  @keyframes subida {
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
      color: var(--white);

      a {
        color: var(--blue-dark);
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
    margin-bottom: 1rem;
    animation: rightToLeft 3s cubic-bezier(0.18, 0.89, 0.32, 1.28) forwards;
  }

  @media (min-width: 1024px) {
    h1 {
      text-align: end;
    }

    img {
      width: 40%;
      position: absolute;
      bottom: 15%;
      right: 10%;
    }
  }

  @media (min-width: 1440px) {
    img {
      width: 40%;
      bottom: 10%;
      right: 5%;
    }
  }

  @keyframes rightToLeft {
    from {
      transform: translateX(150px);
    }
    to {
      transform: translateX(0px);
    }
  }
`;

export const MainContent = styled.div`
  display: flex;
  justify-content: right;
  flex-direction: row;
`;
