import { useHistory } from "react-router-dom";
import { MyGroupsWrapper } from "./myGroups";
import CardGroups from "../../Components/CardGroups";
import CardAdd from "../../Components/CardAdd";
import MenuMobile from "../../Components/MenuMobile";
import Menu from "../../Components/MenuAside/index";
import { useDisclosure } from "@chakra-ui/react";
import GroupCreateModal from "../../Components/GroupCreateModal";

function Groups() {
  const history = useHistory();
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
            <div className="SubContainerCards">
              <CardGroups name="GroupName" />
              <CardGroups name="GroupName" />
              <CardGroups name="GroupName" />
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
