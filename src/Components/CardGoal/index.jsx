import { GoalCard } from "./styles";
import { Progress } from "@chakra-ui/react";
import GoalsUpdateModal from "../GoalsUpdateModal";
import GoalDeleteModal from "../GoalsDeleteModal";
import { useGoals } from "../../Provider/Goals";

const CardGoal = ({ goal }) => {
  const { updateGoal } = useGoals();

  const handleClick = () => {
    const progressNumber = goal.how_much_achieved + 5;
    updateGoal({ how_much_achieved: progressNumber }, goal.id);
  };

  return (
    <GoalCard>
      <div onClick={handleClick} className="Progress">
        <Progress
          value={goal.how_much_achieved}
          height="10px"
          width="80%"
          colorScheme="orange"
        />
        <GoalsUpdateModal goal={goal} />
        <GoalDeleteModal goal={goal} />
      </div>
      <div className="flex-row">
        <h1 className="goalName">{goal.title}</h1>
        <div className="RightLabel">
          <p>{goal.difficulty}</p>
        </div>
      </div>
    </GoalCard>
  );
};

export default CardGoal;
