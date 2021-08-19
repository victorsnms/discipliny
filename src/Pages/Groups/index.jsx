import { Redirect } from "react-router-dom";
import { GroupsWrapper } from "./groupscards";
import CardGroups from "../../Components/CardGroups";
import MenuMobile from "../../Components/MenuMobile";
import Menu from "../../Components/MenuAside";
import { useLogged } from "../../Provider/Login";
import { useGroups } from "../../Provider/Groups/groupsCardList";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import FilterGroupsName from "../../Components/FilterGroupsName";

const Groups = () => {
  const { logged } = useLogged();

  const { groupsCardList, prevPage, nextPage } = useGroups();

  const [filterInput, setFilterInput] = useState("");

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
              <div className="Filters">
                <FilterGroupsName
                  filterInput={filterInput}
                  setFilterInput={setFilterInput}
                />
              </div>
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
              {filterInput === ""
                ? groupsCardList
                    .sort((groupNameA, groupNameB) => {
                      if (groupNameA.name < groupNameB.name) {
                        return -1;
                      }
                      if (groupNameA.name > groupNameB.name) {
                        return 1;
                      }
                      return 0;
                    })
                    .map((group) => (
                      <CardGroups
                        key={group.id}
                        name={group.name}
                        membros={group.users_on_group}
                        idGroup={group.id}
                      />
                    ))
                : groupsCardList
                    .sort((groupNameA, groupNameB) => {
                      if (groupNameA.name < groupNameB.name) {
                        return -1;
                      }
                      if (groupNameA.name > groupNameB.name) {
                        return 1;
                      }
                      return 0;
                    })
                    .filter((item) =>
                      item.name
                        .toLowerCase()
                        .includes(filterInput.toLowerCase())
                    )
                    .map((group) => (
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
