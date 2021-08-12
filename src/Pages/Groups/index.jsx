import { useHistory } from "react-router-dom";
import { GroupsWrapper } from "./groupscards";
import CardGroups from "../../Components/CardGroups";
import MenuMobile from "../../Components/MenuMobile";
import Menu from "../../Components/MenuAside/index";

function Groups() {
  const history = useHistory();
  const changeTo = (path) => {
    history.push(path);
  };
  return (
    <>
      <GroupsWrapper className="ContHabits">
        <Menu />
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
          <MenuMobile />
        </div>
      </GroupsWrapper>
    </>
  );
}
export default Groups;
