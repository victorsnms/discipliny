import styled from "styled-components";

import { HabitWrapper } from "../Habits/habitwrapper.style";

export const GroupsWrapper = styled(HabitWrapper)`
  .buttonPages {
    width: 50%;
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
  }

  @media (min-width: 768px) {
    .buttonPages {
      width: 30%;
    }
  }
`;
