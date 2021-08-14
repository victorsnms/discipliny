import { Redirect, useHistory } from "react-router-dom";
import { GroupsWrapper } from "./groupscards";
import CardGroups from "../../Components/CardGroups";
import MenuMobile from "../../Components/MenuMobile";
import { useContext } from "react";
import { GroupsCardListContext } from "../../Provider/Groups/groupsCardList";
import Menu from "../../Components/MenuAside";
import { useLogged } from "../../Provider/Login";

const Groups = () => {
  const { logged } = useLogged();
  const history = useHistory();
  const changeTo = (path) => {
    history.push(path);
  };
  // const { groupsCardList } = useContext(GroupsCardListContext);
  // const { addToGroupsCardList } = useContext(GroupsCardListContext);

  if (!logged) {
    return <Redirect to="/" />;
  }

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
};
export default Groups;
