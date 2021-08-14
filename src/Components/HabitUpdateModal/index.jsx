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
import {
  ContainerCategory,
  ModalCategory,
  ModalInput,
  ModalTitle,
} from "../HabitCreateModal/style";

const HabitUpdateModal = ({ habit }) => {
  const { updateHabit } = useHabits();
  const initialRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [title, setTitle] = useState(habit.title);
  const [category, setCategory] = useState(habit.category);
  const [difficulty, setDifficulty] = useState(habit.difficulty);
  const [frequency, setFrequency] = useState(habit.frequency);

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

    updateHabit(updateHabiti, habit.id);
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
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose} className="style-modal" >
        <ModalOverlay />
        <ModalContent bg="orange.100">
          <ModalHeader>
            <ModalTitle>Editar Hábito</ModalTitle>
            </ModalHeader>
          <ModalCloseButton bg="orange.400" />
          <ModalBody pb={6}>
          <form>
              <ModalInput
                ref={initialRef}
                placeholder="Digite um novo hábito"
                onChange={(e) => setTitle(e.target.value)}
                value={habit.title}
                required
              />
              <ModalCategory>
                <p>Em qual categoria se enquadra:</p>
                <ContainerCategory>
                  <div className="healthy">
                    <input
                      type="radio"
                      name="category"
                      value="Saúde"
                      checked={habit.category === "Saúde"}
                      id="healthy"
                      onClick={(e) => setCategory(e.target.value)}
                    />
                    <label for="healthy">Saúde</label>
                  </div>
                  <div className="organization">
                    <input
                      type="radio"
                      name="category"
                      value="Organização"
                      id="organization"
                      checked={habit.category === "Organização"}
                      onClick={(e) => setCategory(e.target.value)}
                    />
                    <label for="organization">Organização</label>
                  </div>
                  <div className="cleaning">
                    <input
                      type="radio"
                      name="category"
                      value="Limpeza"
                      id="cleaning"
                      checked={habit.category === "Limpeza"}
                      onClick={(e) => setCategory(e.target.value)}
                    />
                    <label for="cleaning">Limpeza</label>
                  </div>
                  <div className="food">
                    <input
                      type="radio"
                      name="category"
                      value="Alimentação"
                      id="food"
                      checked={habit.category === "Alimentação"}
                      onClick={(e) => setCategory(e.target.value)}
                    />
                    <label for="food">Alimentação</label>
                  </div>
                  <div className="education">
                    <input
                      type="radio"
                      name="category"
                      value="Educação"
                      id="education"
                      checked={habit.category === "Educação"}
                      onClick={(e) => setCategory(e.target.value)}
                    />
                    <label for="education">Educação</label>
                  </div>
                  <div className="finances">
                    <input
                      type="radio"
                      name="category"
                      value="Finanças"
                      id="finances"
                      checked={habit.category === "Finanças"}
                      onClick={(e) => setCategory(e.target.value)}
                    />
                    <label for="finances">Finanças</label>
                  </div>
                  <div className="recreation">
                    <input
                      type="radio"
                      name="category"
                      value="Lazer"
                      id="recreation"
                      checked={habit.category === "Lazer"}
                      onClick={(e) => setCategory(e.target.value)}
                    />
                    <label for="recreation">Lazer</label>
                  </div>
                  <div className="mind">
                    <input
                      type="radio"
                      name="category"
                      value="Mente"
                      id="mind"
                      checked={habit.category === "Mente"}
                      onClick={(e) => setCategory(e.target.value)}
                    />
                    <label for="mind">Mente</label>
                  </div>
                </ContainerCategory>
              </ModalCategory>
              <div>
                <div>
                  <select
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                  >
                    <option value="Fácil" selected={habit.difficulty === "Fácil"}>
                      Fácil
                    </option>
                    <option value="Médio" selected={habit.difficulty === "Médio"}>Médio</option>
                    <option value="Difícil" selected={habit.difficulty === "Difícil"}>Difícil</option>
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
