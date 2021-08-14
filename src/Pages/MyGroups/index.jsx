import { useHistory } from "react-router-dom";
import { MyGroupsWrapper } from "./myGroups";
import CardGroups from "../../Components/CardGroups";
import CardAdd from "../../Components/CardAdd";
import MenuMobile from "../../Components/MenuMobile";
import Menu from "../../Components/MenuAside/index";
import { useDisclosure } from "@chakra-ui/react";
import GroupCreateModal from "../../Components/GroupCreateModal";
import { useContext } from "react";
import { MyGroupsCardListContext } from "../../Provider/MyGroups/index";

function Groups() {
  const history = useHistory();
  const { myGroupsList, setMyGroupsList, createNewGroup, updateMyGroup } =
    useContext(MyGroupsCardListContext);
  console.log(myGroupsList);

  const changeTo = (path) => {
    history.push(path);
  };
  const { isOpen, onOpen, onClose } = useDisclosure();

 
  return (
    <>
      <MyGroupsWrapper className="ContHabits">
        <Menu />
        <div className="ContainerCards">
          <section>
            <header>
              <h1>Meus grupos</h1>
            </header>
            <GroupCreateModal />
            <div className="SubContainerCards">
              {myGroupsList.map((group) => (
                <CardGroups key={group.id} name={group.name} />
              ))}
              <CardAdd onClick={onOpen}/>
            </div>
          </section>
          <MenuMobile />
        </div>
      </MyGroupsWrapper>
      <GroupCreateModal isOpen={isOpen} onClose={onClose}/>
    </>
  );
}
export default Groups;
