import { Progress } from "@chakra-ui/react";
import { HabitCard } from "./habits.style";
import { FaCheckCircle } from "react-icons/fa";
import { FaMedal } from "react-icons/fa";
import { useState } from "react";

const CardHabit = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 4.5);
  };
  return (
    <HabitCard className="ContentHabits">
      <div className="Check">
        <button onClick={handleClick}>
          <FaCheckCircle />
        </button>
      </div>
      <div className="Central">
        <div className="Progress">
          <Progress
            value={count}
            height="30px"
            width="90%"
            colorScheme="orange"
          />
          <FaMedal style={count > 99.99 ? { color: "green" } : null} />
        </div>
        <p>Habit Name</p>
        <div className="BottomLabels">
          <p>Categoria</p>
          <p>Dificuldade</p>
          <p>Frequência</p>
        </div>
      </div>
      <div className="Edit">
        <button>Editar</button>
      </div>
    </HabitCard>
  );
};

export default CardHabit;
