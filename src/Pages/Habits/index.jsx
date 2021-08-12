import { Redirect, useHistory } from "react-router-dom";
import CardHabit from "../../Components/CardHabits";

import { HabitWrapper } from "./habitwrapper.style";
import Button from "../../Components/Button";
import MenuMobile from "../../Components/MenuMobile";
import Menu from "../../Components/MenuAside/index";

const Habits = ({ logged }) => {
  const history = useHistory();
  const changeTo = (path) => {
    history.push(path);
  };

  // if (!logged) {
  //   return <Redirect to="/" />;
  // }

  return (
    <>
      <HabitWrapper className="ContHabits">
        <Menu />
        <div className="ContainerCards">
          <section>
            <header>
              <h1>Meus Hábitos</h1>
            </header>
            <div className="SubContainerCards">
              <CardHabit />
              <CardHabit />
              <CardHabit />
              <CardHabit />
            </div>
          </section>
          <MenuMobile />
        </div>
      </HabitWrapper>
    </>
  );
};
export default Habits;
