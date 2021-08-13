import { GoalCard } from "./styles";
import { Progress } from "@chakra-ui/react";
import { useState } from "react";

const CardGoal = ({ name }) => {
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
        <h1 className="goalName">{name}Goal Name</h1>
        <div className="RightLabel">
          <p>Dificuldade</p>
        </div>
      </div>
    </GoalCard>
  );
};

export default CardGoal;
