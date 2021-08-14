import { HabitsProvider } from "../Provider/Habits/index";
import { GroupsCardsProvider } from "./Groups/groupsCardList";
import { LoggedProvider } from "./Login";
import { UserProvider } from "./User";
import { GroupsCardsProvider } from "./Groups/groupsCardList";
import { MyGroupsCardsProvider } from "./MyGroups/index";

export const Providers = ({ children }) => {
  return (
<<<<<<< HEAD
    <HabitsProvider>
      <GroupsCardsProvider>
        <LoggedProvider>
          <UserProvider>{children}</UserProvider>
        </LoggedProvider>
      </GroupsCardsProvider>
    </HabitsProvider>
=======
    <MyGroupsCardsProvider>
      <GroupsCardsProvider>
        <HabitsProvider>
          <UserProvider>{children}</UserProvider>
        </HabitsProvider>
      </GroupsCardsProvider>
    </MyGroupsCardsProvider>
>>>>>>> features/groups/mygroups-pages
  );
};
