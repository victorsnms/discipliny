import { HabitsProvider } from "../Provider/Habits/index";
import { UserProvider } from "./User";

export const Providers = ({ children }) => {
  return (
    <HabitsProvider>
      <UserProvider>{children}</UserProvider>
    </HabitsProvider>
  );
};
