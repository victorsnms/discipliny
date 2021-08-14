import { HabitsProvider } from "../Provider/Habits/index";
import { GroupsCardsProvider } from "./Groups/groupsCardList";
import { LoggedProvider } from "./Login";
import { UserProvider } from "./User";

export const Providers = ({ children }) => {
  return (
    <HabitsProvider>
      <GroupsCardsProvider>
        <LoggedProvider>
          <UserProvider>{children}</UserProvider>
        </LoggedProvider>
      </GroupsCardsProvider>
    </HabitsProvider>
  );
};
