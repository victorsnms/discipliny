import { useHistory } from "react-router-dom";
import { GroupsWrapper } from "./groupscards";
import CardGroups from "../../Components/CardGroups";
import MenuMobile from "../../Components/MenuMobile";
import { useContext } from "react";
import { GroupsCardListContext } from "../../Provider/Groups/groupsCardList";
import Menu from "../../Components/MenuAside";

const Groups = () => {
  const history = useHistory();
  const changeTo = (path) => {
    history.push(path);
  };
  const { groupsCardList } = useContext(GroupsCardListContext);

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
