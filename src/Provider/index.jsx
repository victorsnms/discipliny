import { HabitsProvider } from "../Provider/Habits/index";

export const Providers = ({ children }) => {
  return <HabitsProvider>{children}</HabitsProvider>;
};
