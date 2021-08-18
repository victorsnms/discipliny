import { Redirect } from "react-router-dom";
import { MyGroupsWrapper } from "./myGroups";
import CardGroups from "../../Components/CardGroups";
import MenuMobile from "../../Components/MenuMobile";
import Menu from "../../Components/MenuAside/index";
import { useDisclosure } from "@chakra-ui/react";
import GroupCreateModal from "../../Components/GroupCreateModal";
import { useMyGroups } from "../../Provider/MyGroups/index";
import { useLogged } from "../../Provider/Login";
import FilterGroupsName from "../../Components/FilterGroupsName";
import { useEffect, useState } from "react";

function Groups() {
  const { logged } = useLogged();

  const { myGroupsList, getGroups } = useMyGroups();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [filterInput, setFilterInput] = useState("");
  useEffect(() => {
    getGroups();
  }, []);

  if (!logged) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <MyGroupsWrapper className="ContHabits">
        <Menu />
        <div className="ContainerCards">
          <section>
            <header>
              <h1>Meus grupos</h1>
              <div className="Filters">
                <FilterGroupsName
                  filterInput={filterInput}
                  setFilterInput={setFilterInput}
                />
              </div>
            </header>
            <GroupCreateModal isOpen={isOpen} onClose={onClose} />
            <div className="SubContainerCards">
              {filterInput === ""
                ? myGroupsList
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
                : myGroupsList
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
                        key={group.id}
                        name={group.name}
                        membros={group.users_on_group}
                        idGroup={group.id}
                      />
                    ))}
            </div>
          </section>

          <MenuMobile />
        </div>
      </MyGroupsWrapper>
    </>
  );
}
export default Groups;
