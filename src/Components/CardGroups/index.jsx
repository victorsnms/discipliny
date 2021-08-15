import { GroupCard } from "./styles";
import { IoIosPeople } from "react-icons/io";
import { Link } from "react-router-dom";
import { useGroups } from "../../Provider/Groups/groupsCardList";

const CardGroups = ({ name, membros, idGroup }) => {
  const { getSpecificGroup } = useGroups();
  const getGroupId = () => {
    console.log(idGroup);
    localStorage.setItem("@Discipliny:idGroup", JSON.stringify(idGroup));
    getSpecificGroup();
  };

  return (
    <GroupCard className="ContentHabits">
      <h1 className="groupName">{name}</h1>
      <div>
        <IoIosPeople />
        {membros === undefined ? 0 : membros.length}
      </div>
      <Link onClick={getGroupId} to="/groupsid">
        Ver Grupo
      </Link>
    </GroupCard>
  );
};

export default CardGroups;
