import styled from "styled-components";
import myImage from "../../assets/wave.svg";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url(${myImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: var(--cream);

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

  @media (min-width: 1024px) {
    margin: 0rem 8rem;
  }

  @media (min-width: 1440px) {
    margin: 0rem 29rem;
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
    }

    p {
      font-size: 0.75rem;
      margin-top: 0.5rem;
      font-family: var(--font-text);

      a {
        color: var(--dark-blue);
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
  }

  @media (min-width: 1024px) {
    h1 {
      text-align: start;
    }

    img {
      width: 30rem;
      position: absolute;
      bottom: 40px;
      left: 120px;
    }
  }

  @media (min-width: 1440px) {
    img {
      bottom: 60px;
      left: 175px;
    }
  }
`;

export const MainContent = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: row-reverse;
`;