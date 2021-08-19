import styled from "styled-components";
import { HabitWrapper } from "../Habits/habitwrapper.style";

export const MyGroupsWrapper = styled(HabitWrapper)`
  .SubContainerCards {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: 80vh;
    padding: 30px;
    overflow-y: auto;
    justify-content: center;

    ::-webkit-scrollbar {
      width: 10px;
    }
    /* Track */
    ::-webkit-scrollbar-track {
      background: var(--blue-dark);
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: var(--blue-light);
      border-radius: 5px;
      height: 500px;
    }
  }
  @media (min-height: 1000px) {
    padding-left: 100px;
  }

  @media (max-width: 593px) {
    .ModalGrpPos {
      align-self: flex-start;
      margin-left: 8px;
    }
  }
`;
