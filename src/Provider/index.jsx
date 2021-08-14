import { HabitsProvider } from "../Provider/Habits/index";
import { GroupsCardsProvider } from "./Groups/groupsCardList";
import { LoggedProvider } from "./Login";
import { UserProvider } from "./User";
import { GroupsCardsProvider } from "./Groups/groupsCardList";
import { MyGroupsCardsProvider } from "./MyGroups/index";

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
