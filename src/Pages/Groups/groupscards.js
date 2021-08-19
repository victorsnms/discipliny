import styled from "styled-components";

import { HabitWrapper } from "../Habits/habitwrapper.style";

export const GroupsWrapper = styled(HabitWrapper)`
  .buttonPages {
    width: 50%;
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
  }
  .ContainerCards section .subContainerCards {
    justify-content: center;
    position: relative;
  }

  @media (max-width: 768px) {
    .buttonPages {
      width: 15%;
    }

    .Filters {
      width: 36%;
    }
  }
`;
