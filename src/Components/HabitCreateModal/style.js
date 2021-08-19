import styled from "styled-components";

export const ModalTitle = styled.div`
  background: var(--blue-dark);
  border-top-left-radius: 0.9rem;
  border-top-right-radius: 0.9rem;

  header {
    padding: 8px 32px;
    color: var(--white);
    font-family: var(--font-text);
    font-size: 24px;
  }
`;

export const ModalInput = styled.input`
  border: var(--orange) 1px solid;
  background: var(--cream);
  width: 90%;
  border-radius: 16px;
  padding: 4px 8px;
  margin-top: 8px;

  &::placeholder {
    color: var(--gray);
  }

  &:focus {
    box-shadow: 0 0 3px var(--orange) inset;
  }
`;

export const ModalCategory = styled.div`
  p {
    font-family: var(--font-text);
    margin-top: 16px;
    font-size: 20px;
  }
  input {
    display: none;
  }
`;

export const ContainerCategory = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  justify-content: space-between;
  div {
    padding: 0 8px;
  }
  label {
    font-weight: 700;
    cursor: pointer;
  }
  div.mind {
    color: ${(props) => (props.categoryChose === "mind" ? "#fff" : "#b55dc6")};
    border: 2px solid var(--purple);
    border-top-left-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
    background: ${(props) => props.categoryChose === "mind" && "#b55dc6"};
  }
  div.finances {
    color: ${(props) =>
      props.categoryChose === "finances" ? "#fff" : "#F6AE2D"};
    border: 2px solid var(--yellow);
    border-top-left-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
    background: ${(props) => props.categoryChose === "finances" && "#F6AE2D"};
  }
  div.healthy {
    color: ${(props) =>
      props.categoryChose === "healthy" ? "#fff" : "#51a957"};
    border: 2px solid var(--green);
    border-top-left-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
    background: ${(props) => props.categoryChose === "healthy" && "#51a957"};
  }
  div.organization {
    color: ${(props) =>
      props.categoryChose === "organization" ? "#fff" : "#55CFE0"};
    border: 2px solid var(--blue-light);
    border-top-left-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
    background: ${(props) =>
      props.categoryChose === "organization" && "#55CFE0"};
  }
  div.recreation {
    color: ${(props) =>
      props.categoryChose === "recreation" ? "#fff" : "#eb7eed"};
    border: 2px solid var(--pink);
    border-top-left-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
    background: ${(props) => props.categoryChose === "recreation" && "#eb7eed"};
  }
  div.cleaning {
    color: ${(props) =>
      props.categoryChose === "cleaning" ? "#fff" : "#F26419"};
    border: 2px solid var(--orange);
    border-top-left-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
    background: ${(props) => props.categoryChose === "cleaning" && "#F26419"};
  }
  div.food {
    color: ${(props) => (props.categoryChose === "food" ? "#fff" : "#e73f36")};
    border: 2px solid var(--red);
    border-top-left-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
    background: ${(props) => props.categoryChose === "food" && "#e73f36"};
  }
  div.education {
    color: ${(props) =>
      props.categoryChose === "education" ? "#fff" : "#b17c6a"};
    border: 2px solid var(--brown);
    border-top-left-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
    background: ${(props) => props.categoryChose === "education" && "#b17c6a"};
  }
`;
export const ModalSelect = styled.div`
  margin-top: 16px;
  div {
    display: flex;
    gap: 10px;
    margin-top: 1rem;
  }
  select {
    border: 1px solid var(--orange);
    color: var(--orange);
    background: var(--cream);
    border-radius: 16px;

    option {
      padding: 4px;
    }
  }
`;

export const ModalTextArea = styled.div`
  div {
    margin-top: 16px;
  }
  textarea {
    border: 1px solid var(--orange);
    border-radius: 8px;
    width: 90%;
    background: var(--cream);
  }
`;

export const ModalDelete = styled.div`
  p {
    font-size: 1rem;
  }

  h1 {
    margin-top: 16px;
    font-size: 2rem;
  }
`;

export const ModalDate = styled.div`
  margin-top: 16px;

  input {
    border: 1px var(--orange) solid;
    border-radius: 8px;
    padding: 0 8px;
    background-color: var(--cream);
  }
`;


