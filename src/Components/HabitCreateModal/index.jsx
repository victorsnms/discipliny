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

import {
  ContainerCategory,
  ModalCategory,
  ModalInput,
  ModalSelect,
  ModalTitle,
} from "./style";
import { useHabits } from "../../Provider/Habits";

const HabitCreateModal = () => {
  const { getHabits, createHabit } = useHabits();
  const initialRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [isToast, setIsToast] = useState("unset");

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Sáude");
  const [difficulty, setDificulty] = useState("Fácil");
  const [frequency, setFrequency] = useState("Diário");
  const [categoryChose, setCategoryChose] = useState("healthy");

  function handleSubmit() {
    const userId = JSON.parse(localStorage.getItem("@Discipliny:userId"));

    const newHabit = {
      title: title,
      category: category,
      difficulty: difficulty,
      frequency: frequency,
      achieved: false,
      how_much_achieved: 0,
      user: userId,
    };
    if (title !== "") {
      onClose();
    }
    createHabit(newHabit, setIsToast);
  }

  useEffect(() => {
    if (isToast === "success") {
      getHabits();
      toast({
        title: "Hábitos",
        position: "top",
        description: "Novo hábito criado com sucesso",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setTitle("");
      setCategory("Saúde");
      setDificulty("Fácil");
      setFrequency("Diaŕio");
      setCategoryChose("healthy");
    } else if (isToast === "error") {
      toast({
        title: "Hábitos!",
        position: "top",
        description: "Verifique todos os campos e tente novamente",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
    setIsToast("unset");
  }, [isToast]);

  const handleClick = (e, value) => {
    setCategory(e.target.value);
    setCategoryChose(value);
  };

  return (
    <div className="ModalPosition">
      <Button
        _hover={{ color: "cyan.50", bg: "cyan.800" }}
        bg="teal.700"
        color="#c5d5da"
        onClick={onOpen}
      >
        Novo Hábito...
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
            <ModalHeader>Novo Hábito</ModalHeader>
          </ModalTitle>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form>
              <ModalInput
                ref={initialRef}
                placeholder="Digite um novo hábito"
                onChange={(e) => setTitle(e.target.value)}
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
                    onChange={(e) => setDificulty(e.target.value)}
                  >
                    <option value="Fácil" selected>
                      Fácil
                    </option>
                    <option value="Médio">Médio</option>
                    <option value="Difícil">Difícil</option>
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
            <Button onClick={onClose} color="blue">
              Cancelar
            </Button>
            <Button onClick={handleSubmit} color="red" marginLeft="20px">
              Criar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default HabitCreateModal;
