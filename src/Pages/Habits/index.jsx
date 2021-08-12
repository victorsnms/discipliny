import { useHistory } from "react-router-dom";
import CardHabit from "../../Components/CardHabits";
import { HabitWrapper } from "./habitwrapper.style";

const Habits = () => {
  const history = useHistory();
  const changeTo = (path) => {
    history.push(path);
  };
  return (
    <>
      <HabitWrapper className="ContHabits">
        <aside className="NavAside">
          <h1>Discipliny</h1>
          <div className="ImgContainer">
            <img></img>
            <span>UserName</span>
          </div>

          <div className="ParagContainer">
            <p className="Hab" onClick={() => changeTo("/groups")}>
              Habitos
            </p>
            <p className="MyGroup"> Meus Grupos</p>
            <p className="Descobrir">Descobrir</p>
          </div>
          <button>Sair</button>
        </aside>
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
        </div>
      </HabitWrapper>
    </>
  );
};
export default Habits;
