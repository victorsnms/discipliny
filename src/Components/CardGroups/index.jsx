import { GroupCard } from "./styles";

const CardGroups = ({ name }) => {
  return (
    <GroupCard className="ContentHabits">
      <h1 className="groupName">{name}</h1>
    </GroupCard>
  );
};

export default CardGroups;
