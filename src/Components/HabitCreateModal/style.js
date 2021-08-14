import styled from "styled-components";

export const ModalTitle = styled.div`
  background: var(--blue-dark);
  border-top-left-radius: 1.9rem;
  border-top-right-radius: 1.9rem;

  h1 {
    padding: 8px 32px;
    color: var(--white);
    font-family: var(--font-text);
    font-size: 32px;
  }
`;

export const ModalInput = styled.input`
  border: var(--orange) 2px solid;
  background: var(--cream);
  width: 90%;
  border-radius: 16px;
  padding: 4px 8px;
`;

export const ModalCategory = styled.div`
  p {
    font-family: var(--font-text);
    margin: 8px 0;
    font-size: 20px;
  }
  input{
      display: none;
  }
`;

export const ContainerCategory = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
    justify-content: center;
    div{
        padding: 0 8px;
    }
    label{
        font-weight: 700;
        cursor: pointer;
    }
    div.mind{
        color: var(--purple);
        border: 2px solid var(--purple);
        border-top-left-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
    }
    div.finances{
        color: var(--yellow);
        border: 2px solid var(--yellow);
        border-top-left-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
    }
    div.healthy{
        color: var(--green);
        border: 2px solid var(--green);
        border-top-left-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
    }
    div.organization{
        color: var(--blue-light);
        border: 2px solid var(--blue-light);
        border-top-left-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
    }
    div.recreation{
        color: var(--pink);
        border: 2px solid var(--pink);
        border-top-left-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
    }
    div.cleaning{
        color: var(--orange);
        border: 2px solid var(--orange);
        border-top-left-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
    }
    div.food{
        color: var(--red);
        border: 2px solid var(--red);
        border-top-left-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
    }
    div.education{
        color: var(--brown);
        border: 2px solid var(--brown);
        border-top-left-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
    }
`
