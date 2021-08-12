import { useHistory } from "react-router-dom";
import { MyGroupsWrapper } from "./myGroups";
import CardGroups from "../../Components/CardGroups";
import CardAdd from "../../Components/CardAdd";
import MenuMobile from "../../Components/MenuMobile";
import Menu from "../../Components/MenuAside/index";

function Groups() {
  const history = useHistory();
  const changeTo = (path) => {
    history.push(path);
  };
  return (
    <>
      <MyGroupsWrapper className="ContHabits">
        <Menu />
        <div className="ContainerCards">
          <section>
            <header>
              <h1>Meus grupos</h1>
            </header>
            <div className="SubContainerCards">
              <CardGroups name="GroupName" />
              <CardGroups name="GroupName" />
              <CardGroups name="GroupName" />
              <CardAdd />
            </div>
          </section>
          <MenuMobile />
        </div>
      </MyGroupsWrapper>
    </>
  );
}
export default Groups;
