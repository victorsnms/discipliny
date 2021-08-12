import { Redirect, useHistory } from "react-router-dom";
import CardHabit from "../../Components/CardHabits";
import { HabitWrapper } from "./habitwrapper.style";
import Button from "../../Components/Button";
import MenuMobile from "../../Components/MenuMobile";
import { useHabits } from "../../Provider/Habits";

const Habits = ({ logged }) => {
  const history = useHistory();
  const { habit, getHabits } = useHabits();
  const changeTo = (path) => {
    history.push(path);
  };
  console.log(habit);

  const handleClick = () => {
    getHabits();
  };

  // if (!logged) {
  //   return <Redirect to="/" />;
  // }

  return (
    <>
      <HabitWrapper className="ContHabits">
        <aside className="NavAside">
          <h1>Discipliny</h1>
          <div className="ImgContainer">
            <img></img>
            <span>UserName</span>
            <button onClick={handleClick}>getHabits</button>
          </div>

          <div className="ParagContainer">
            <p className="Hab" onClick={() => changeTo("/habits")}>
              Habitos
            </p>
            <p className="MyGroup"> Meus Grupos</p>
            <p className="Descobrir">Descobrir</p>
          </div>
          <Button text="Sair" type="logout">
            Sair
          </Button>
        </aside>
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
      </HabitWrapper>
    </>
  );
};
export default Habits;
