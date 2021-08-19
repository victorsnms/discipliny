import { Redirect } from "react-router-dom";
import CardHabit from "../../Components/CardHabits";
import { HabitWrapper, ModalCenter } from "./habitwrapper.style";
import MenuMobile from "../../Components/MenuMobile";
import Menu from "../../Components/MenuAside/index";
import { useHabits } from "../../Provider/Habits";
import HabitCreateModal from "../../Components/HabitCreateModal";
import { useLogged } from "../../Provider/Login";
import FilterHabitsCategory from "../../Components/FilterHabitsCategory";
import { useState } from "react";

const Habits = () => {
  const { logged } = useLogged();
  const { habit } = useHabits();
  const [filterInput, setFilterInput] = useState("");
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
              <div className="Filters">
                <FilterHabitsCategory
                  filterInput={filterInput}
                  setFilterInput={setFilterInput}
                />
              </div>
            </header>
            <HabitCreateModal />
            <ModalCenter>
              <div className="SubContainerCards">
                {filterInput === "Todos" || filterInput === ""
                  ? habit
                      .sort((HabbitA, HabbitB) => {
                        if (HabbitA.title < HabbitB.title) {
                          return -1;
                        }
                        if (HabbitA.title > HabbitB.title) {
                          return 1;
                        }
                        return 0;
                      })
                      .map((item) => <CardHabit habits={item} key={item.id} />)
                  : habit
                      .sort((HabbitA, HabbitB) => {
                        if (HabbitA.title < HabbitB.title) {
                          return -1;
                        }
                        if (HabbitA.title > HabbitB.title) {
                          return 1;
                        }
                        return 0;
                      })
                      .filter((item) => item.category === filterInput)
                      .map((item) => <CardHabit habits={item} key={item.id} />)}
              </div>
            </ModalCenter>
          </section>
          <MenuMobile />
        </div>
      </HabitWrapper>
    </>
  );
};
export default Habits;
