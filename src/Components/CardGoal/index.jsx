import { GoalCard } from "./styles";
import { Progress } from "@chakra-ui/react";
import { useState } from "react";
import GoalsUpdateModal from "../GoalsUpdateModal";
import GoalDeleteModal from "../GoalsDeleteModal";

const CardGoal = ({ name, dificuldade, idGoal }) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 4.5);
  };
  return (
    <GoalCard onClick={handleClick}>
      <div className="Progress">
        <Progress
          value={count}
          height="10px"
          width="80%"
          colorScheme="orange"
        />
        <GoalsUpdateModal idGoal={idGoal} />
        <GoalDeleteModal idGoal={idGoal} />
      </div>
      <div className="flex-row">
        <h1 className="goalName">{name}</h1>
        <div className="RightLabel">
          <p>{dificuldade}</p>
        </div>
      </div>
    </GoalCard>
  );
};

export default CardGoal;
