import { Redirect } from "react-router-dom";
import { GroupsWrapper } from "./groupscards";
import CardGroups from "../../Components/CardGroups";
import MenuMobile from "../../Components/MenuMobile";
import Menu from "../../Components/MenuAside";
import { useLogged } from "../../Provider/Login";
import { useGroups } from "../../Provider/Groups/groupsCardList";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Groups = () => {
  const { logged } = useLogged();

  const { groupsCardList, prevPage, nextPage } = useGroups();

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
            <div className="buttonPages">
              <button onClick={prevPage}>
                <FaArrowLeft />
              </button>
              <button onClick={nextPage}>
                <FaArrowRight />
              </button>
            </div>
            <div className="SubContainerCards">
              {groupsCardList.map((group) => (
                <CardGroups
                  name={group.name}
                  membros={group.users_on_group}
                  idGroup={group.id}
                />
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
