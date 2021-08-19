import { Progress, useDisclosure } from "@chakra-ui/react";
import { HabitCard } from "./habits.style";
import { FaCheckCircle, FaTrash } from "react-icons/fa";
import { FaMedal } from "react-icons/fa";
import HabitUpdateModal from "../HabitUpdateModal/index";
import { useHabits } from "../../Provider/Habits";
import HabitDeleteModal from "../HabitDeleteModal/index";

const CardHabit = ({ habits }) => {
  const { updateHabit } = useHabits();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => {
    const progressNumber = habits.how_much_achieved + 5;
    updateHabit({ how_much_achieved: progressNumber }, habits.id);
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
            value={habits.how_much_achieved}
            height="10px"
            width="90%"
            colorScheme="orange"
          />
          <FaMedal
            style={habits.how_much_achieved > 100 ? { color: "gold" } : null}
          />
        </div>
        <p>{habits.title}</p>
        <div className="BottomLabels">
          <p>{habits.category}</p>
          <p>{habits.difficulty}</p>
          <p>{habits.frequency}</p>
        </div>
      </div>
      <div className="Edit">
        <HabitUpdateModal habit={habits} />
        <button className="DeleteButton" onClick={onOpen}>
          <FaTrash />
        </button>
        <HabitDeleteModal onClose={onClose} isOpen={isOpen} habits={habits} />
      </div>
    </HabitCard>
  );
};

export default CardHabit;
