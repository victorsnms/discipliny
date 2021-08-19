import { GroupCard } from "./styles";
import { IoIosPeople } from "react-icons/io";
import { Link } from "react-router-dom";
import { BsEyeFill } from "react-icons/bs";
import { useGoals } from "../../Provider/Goals";

const CardGroups = ({ name, membros, idGroup }) => {
  const { getGoals } = useGoals();

  const getGroupId = () => {
    getGoals();
  };

  return (
    <GroupCard className="ContentHabits">
      <Link
        className="LinkBox"
        onClick={getGroupId}
        to={`/groupsid/${idGroup}`}
      >
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
