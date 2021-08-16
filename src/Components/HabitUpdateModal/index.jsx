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
  useToast,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useHabits } from "../../Provider/Habits";
import {
  ContainerCategory,
  ModalCategory,
  ModalInput,
  ModalSelect,
  ModalTitle,
} from "../HabitCreateModal/style";
import { FiEdit } from "react-icons/fi";

const HabitUpdateModal = ({ habit }) => {
  const { updateHabit } = useHabits();
  const initialRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isToast,setIsToast] = useState("unset");
  const toast = useToast();

  const [title, setTitle] = useState(habit.title);
  const [category, setCategory] = useState(habit.category);
  const [difficulty, setDifficulty] = useState(habit.difficulty);
  const [frequency, setFrequency] = useState(habit.frequency);
  const [categoryChose, setCategoryChose] = useState("healthy");

  const handleSubmit = () => {
    const userId = JSON.parse(localStorage.getItem("@Discipliny:userId"));
    const updateHabiti = {
      title: title,
      category: category,
      difficulty: difficulty,
      frequency: frequency,
      user: userId,
    };
    updateHabit(updateHabiti, habit.id,setIsToast);
  };

  const handleClick = (e, value) => {
    setCategory(e.target.value);
    setCategoryChose(value);
  };

  useEffect(() => {
    if (isToast === "success"){
      toast({
        title: "Hábitos",
        position: "top",
        description: "Atualizado com sucesso",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      onClose()
    } else if (isToast === "error") {
      toast({
        title: "Hábito não foi atualizado!",
        position: "top",
        description: "Verifique todo os campos e tente novamente",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
    setIsToast("unset")
  },[isToast])

  return (
    <div>
      <Button
        _hover={{ color: "cyan.50", bg: "cyan.800" }}
        bg="teal.700"
        color="#c5d5da"
        onClick={onOpen}
      >
        <FiEdit />
      </Button>
      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
        className="style-modal"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalTitle>
            <ModalHeader>Editar Hábito</ModalHeader>
          </ModalTitle>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form>
              <ModalInput
                ref={initialRef}
                placeholder="Digite um novo hábito"
                onChange={(e) => setTitle(e.target.value)}
                defaultValue={habit.title}
                required
              />
              <ModalCategory>
                <p>Em qual categoria se enquadra:</p>
                <ContainerCategory categoryChose={categoryChose}>
                  <div className="healthy">
                    <input
                      type="radio"
                      name="category"
                      value="Saúde"
                      id="healthy"
                      onClick={(e) => handleClick(e, e.target.id)}
                    />
                    <label for="healthy">Saúde</label>
                  </div>
                  <div className="organization">
                    <input
                      type="radio"
                      name="category"
                      value="Organização"
                      id="organization"
                      onClick={(e) => handleClick(e, e.target.id)}
                    />
                    <label for="organization">Organização</label>
                  </div>
                  <div className="cleaning">
                    <input
                      type="radio"
                      name="category"
                      value="Limpeza"
                      id="cleaning"
                      onClick={(e) => handleClick(e, e.target.id)}
                    />
                    <label for="cleaning">Limpeza</label>
                  </div>
                  <div className="food">
                    <input
                      type="radio"
                      name="category"
                      value="Alimentação"
                      id="food"
                      onClick={(e) => handleClick(e, e.target.id)}
                    />
                    <label for="food">Alimentação</label>
                  </div>
                  <div className="education">
                    <input
                      type="radio"
                      name="category"
                      value="Educação"
                      id="education"
                      onClick={(e) => handleClick(e, e.target.id)}
                    />
                    <label for="education">Educação</label>
                  </div>
                  <div className="finances">
                    <input
                      type="radio"
                      name="category"
                      value="Finanças"
                      id="finances"
                      onClick={(e) => handleClick(e, e.target.id)}
                    />
                    <label for="finances">Finanças</label>
                  </div>
                  <div className="recreation">
                    <input
                      type="radio"
                      name="category"
                      value="Lazer"
                      id="recreation"
                      onClick={(e) => handleClick(e, e.target.id)}
                    />
                    <label for="recreation">Lazer</label>
                  </div>
                  <div className="mind">
                    <input
                      type="radio"
                      name="category"
                      value="Mente"
                      id="mind"
                      onClick={(e) => handleClick(e, e.target.id)}
                    />
                    <label for="mind">Mente</label>
                  </div>
                </ContainerCategory>
              </ModalCategory>
              <ModalSelect>
                <div>
                  <p>Dificuldade:</p>
                  <select
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                  >
                    <option
                      value="Fácil"
                      selected={habit.difficulty === "Fácil"}
                    >
                      Fácil
                    </option>
                    <option
                      value="Médio"
                      selected={habit.difficulty === "Médio"}
                    >
                      Médio
                    </option>
                    <option
                      value="Difícil"
                      selected={habit.difficulty === "Difícil"}
                    >
                      Difícil
                    </option>
                  </select>
                </div>
                <div>
                  <p>Frenquência:</p>
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
              </ModalSelect>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} color="red">
              Cancelar
            </Button>
            <Button onClick={handleSubmit} color="blue" marginLeft="20px">
              Salvar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default HabitUpdateModal;
