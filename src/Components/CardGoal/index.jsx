import { GoalCard } from "./styles";
import { Progress } from "@chakra-ui/react";
import { useState } from "react";

const CardGoal = ({ name, dificuldade }) => {
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
          width="90%"
          colorScheme="orange"
        />
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
