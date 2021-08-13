import { Redirect } from "react-router-dom";
import CardHabit from "../../Components/CardHabits";
import { HabitWrapper } from "./habitwrapper.style";
import MenuMobile from "../../Components/MenuMobile";
import Menu from "../../Components/MenuAside/index";
import { useHabits } from "../../Provider/Habits";
import HabitCreateModal from "../../Components/HabitCreateModal";

const Habits = ({ logged }) => {
  const { habit } = useHabits();

  if (!logged) {
    return <Redirect to="/" />;
  }

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
              {habit.map((item) => (
                <CardHabit habit={item} />
              ))}
            </div>
          </section>
          <MenuMobile />
        </div>
        <HabitCreateModal/>
        
      </HabitWrapper>
    </>
  );
};
export default Habits;
