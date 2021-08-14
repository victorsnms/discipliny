import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useHabits } from "../../Provider/Habits";

const HabitUpdateModal = ({ habitId }) => {
  const { updateHabit, habit } = useHabits();
  const initialRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [title, setTitle] = useState("Nome do hábito");
  const [category, setCategory] = useState("Saúde");
  const [difficulty, setDifficulty] = useState("Fácil");
  const [frequency, setFrequency] = useState("Diário");

  const [token] = useState(
    JSON.parse(localStorage.getItem("@Discipliny:accessToken")) || ""
  );

  const handleSubmit = () => {
    //importar, token e iduser, setHAnits
    const userId = JSON.parse(localStorage.getItem("@Discipliny:userId"));
    const updateHabiti = {
      title: title,
      category: category,
      difficulty: difficulty,
      frequency: frequency,
      user: userId,
    };

    updateHabit(updateHabiti, habitId);
  };

  return (
    <div>
      <Button
        _hover={{ color: "cyan.50", bg: "cyan.800" }}
        bg="teal.700"
        color="#c5d5da"
        onClick={onOpen}
      >
        Editar
      </Button>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="orange.100">
          <ModalHeader>Editar Hábito</ModalHeader>
          <ModalCloseButton bg="orange.400" />
          <ModalBody pb={6}>
            <form>
              <input
                ref={initialRef}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <div>
                <p>Em qual categoria se enquadra:</p>
                <div>
                  <input
                    type="radios"
                    name="category"
                    defaultValue="Saúde"
                    checked
                    id="healthy"
                    onClick={(e) => setCategory(e.target.value)}
                  />
                  <label>Saúde</label>
                </div>
                <div>
                  <input
                    type="radios"
                    name="category"
                    defaultValue="Organização"
                    onClick={(e) => setCategory(e.target.value)}
                  />
                  <label>Organização</label>
                </div>
              </div>
              <div>
                <div>
                  <select
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                  >
                    <option value="Fácil" selected>
                      Fácil
                    </option>
                    <option value="Médio">Médio</option>
                    <option value="Difícil">Difícil</option>
                  </select>
                </div>
                <div>
                  <select
                    value={frequency}
                    onChange={(e) => setFrequency(e.target.value)}
                  >
                    <option value="Diário" selected>
                      Diário
                    </option>
                    <option value="Semanal">Semanal</option>
                    <option value="Mensal">Mensal</option>
                  </select>
                </div>
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <button onClick={handleSubmit}>Save</button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default HabitUpdateModal;
