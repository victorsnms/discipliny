import { useHistory } from "react-router-dom";
import { GroupsWrapper } from "./groupscards";
import CardGroups from "../../Components/CardGroups";
import { MenuMobile } from "../../styles/MenuMobile/Footer.style";

function Groups() {
  const history = useHistory();
  const changeTo = (path) => {
    history.push(path);
  };
  return (
    <>
      <GroupsWrapper className="ContHabits">
        <aside className="NavAside">
          <h1>Discipliny</h1>
          <div className="ImgContainer">
            <img></img>
            <span>UserName</span>
          </div>

          <div className="ParagContainer">
            <p className="Hab">Habitos</p>
            <p className="MyGroup"> Meus Grupos</p>
            <p className="Descobrir">Descobrir</p>
          </div>
          <button>Sair</button>
        </aside>
        <div className="ContainerCards">
          <section>
            <header>
              <h1>Grupos</h1>
            </header>
            <div className="SubContainerCards">
              <CardGroups name="GroupName" />
              <CardGroups name="GroupName" />
              <CardGroups name="GroupName" />
              <CardGroups name="GroupName" />
            </div>
          </section>
          <MenuMobile>
            <button className="buttonHab">Habit</button>
            <button className="buttonMyGrup">My Grp</button>
            <button className="buttonDesco">Desco</button>
          </MenuMobile>
        </div>
      </GroupsWrapper>
    </>
  );
}
export default Groups;
