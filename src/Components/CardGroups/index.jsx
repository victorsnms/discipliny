import { GroupCard } from "./styles";
import { IoIosPeople } from "react-icons/io";
import { Link } from "react-router-dom";
import { useGroups } from "../../Provider/Groups/groupsCardList";
import { BsEyeFill } from "react-icons/bs";

const CardGroups = ({ name, membros, idGroup }) => {
  const { getSpecificGroup } = useGroups();
  const getGroupId = () => {
    localStorage.setItem("@Discipliny:idGroup", JSON.stringify(idGroup));
    getSpecificGroup();
  };

  return (
    <GroupCard className="ContentHabits">
      <Link className="LinkBox" onClick={getGroupId} to="/groupsid">
        <h1 className="groupName">{name}</h1>
        <div>
          <IoIosPeople />
          {membros === undefined ? 0 : membros.length}
        </div>
        <div>
          <BsEyeFill />
        </div>
      </Link>
    </GroupCard>
  );
};

export default CardGroups;
