import { HabitsProvider } from "../Provider/Habits/index";
import { UserProvider } from "./User";
import { GroupsCardsProvider } from "./Groups/groupsCardList";
import { MyGroupsCardsProvider } from "./MyGroups/index";

export const Providers = ({ children }) => {
  return (
    <MyGroupsCardsProvider>
      <GroupsCardsProvider>
        <HabitsProvider>
          <UserProvider>{children}</UserProvider>
        </HabitsProvider>
      </GroupsCardsProvider>
    </MyGroupsCardsProvider>
  );
};
