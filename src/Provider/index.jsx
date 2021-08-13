import { HabitsProvider } from "../Provider/Habits/index";
import { GroupsCardsProvider } from "./Groups/groupsCardList";
import { UserProvider } from "./User";

export const Providers = ({ children }) => {
  return (
    <HabitsProvider>
      <GroupsCardsProvider>
        <UserProvider>{children}</UserProvider>
      </GroupsCardsProvider>
    </HabitsProvider>
  );
};
