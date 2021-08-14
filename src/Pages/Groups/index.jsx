import { Redirect, useHistory } from "react-router-dom";
import { GroupsWrapper } from "./groupscards";
import CardGroups from "../../Components/CardGroups";
import MenuMobile from "../../Components/MenuMobile";
import Menu from "../../Components/MenuAside";
import { useLogged } from "../../Provider/Login";
import { useGroups } from "../../Provider/Groups/groupsCardList";

const Groups = () => {
  const { logged } = useLogged();
  const history = useHistory();
  const changeTo = (path) => {
    history.push(path);
  };
  const { groupsCardList } = useGroups();

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
              {groupsCardList.map((group) => (
                <CardGroups name={group.name} />
              ))}
            </div>
          </section>
          <MenuMobile />
        </div>
      </GroupsWrapper>
    </>
  );
};
export default Groups;
