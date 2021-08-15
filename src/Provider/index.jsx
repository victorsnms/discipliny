import { HabitsProvider } from "../Provider/Habits/index";
import { GroupsCardsProvider } from "./Groups/groupsCardList";
import { LoggedProvider } from "./Login";
import { UserProvider } from "./User";
import { MyGroupsCardsProvider } from "./MyGroups/index";
import { GoalsProvider } from "./Goals";
import { ActivitiesProvider } from "./Activities";

export const Providers = ({ children }) => {
  return (
    <LoggedProvider>
      <MyGroupsCardsProvider>
        <GroupsCardsProvider>
          <GoalsProvider>
            <ActivitiesProvider>
              <HabitsProvider>
                <UserProvider>{children}</UserProvider>
              </HabitsProvider>
            </ActivitiesProvider>
          </GoalsProvider>
        </GroupsCardsProvider>
      </MyGroupsCardsProvider>
    </LoggedProvider>
  );
};
