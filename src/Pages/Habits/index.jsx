import { Redirect } from "react-router-dom";
import CardHabit from "../../Components/CardHabits";
import { HabitWrapper } from "./habitwrapper.style";
import generators from '../../lib/generators'
import MenuMobile from "../../Components/MenuMobile";
import Menu from "../../Components/MenuAside/index";
import { useHabits } from "../../Provider/Habits";
import HabitCreateModal from "../../Components/HabitCreateModal";

const Habits = ({ logged }) => {
  const { habit } = useHabits();
  const {idGeneretors}

  if (!logged) {
    return <Redirect to="/" />;
  }

  return (
    <HabitWrapper className="ContHabits">
      <Menu />
      <div className="ContainerCards">
        <section>
          <header>
            <h1>Meus Hábitos</h1>
          </header>
          <HabitCreateModal />
          <div className="SubContainerCards">
            {habit.map((item) => (
              <CardHabit key={idGeneretors(99999)} habits={item} />
            ))}
          </div>
        </section>
        <MenuMobile />
      </div>
    </HabitWrapper>
  );
};
export default Habits;
