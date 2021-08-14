import { HabitsProvider } from "../Provider/Habits/index";
import { GroupsCardsProvider } from "./Groups/groupsCardList";
import { LoggedProvider } from "./Login";
import { UserProvider } from "./User";
import { MyGroupsCardsProvider } from "./MyGroups/index";

export const Providers = ({ children }) => {
  return (
  

<LoggedProvider>
    <MyGroupsCardsProvider>
      <GroupsCardsProvider>
        <HabitsProvider>
          <UserProvider>{children}</UserProvider>
        </HabitsProvider>
      </GroupsCardsProvider>
    </MyGroupsCardsProvider>
          </LoggedProvider>
  );
};
