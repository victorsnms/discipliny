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
import api from "../../Services/api";
import {
  ContainerCategory,
  ModalCategory,
  ModalInput,
  ModalTitle,
} from "./style";
import { useHabits } from "../../Provider/Habits";

const HabitCreateModal = () => {
  const { getHabits } = useHabits();
  const initialRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDificulty] = useState("Fácil");
  const [frequency, setFrequency] = useState("Diário");

  const handleSubmit = () => {
    //importar, token e iduser, setHAnits

    const token = JSON.parse(localStorage.getItem("@Discipliny:accessToken"));
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
    console.log(newHabit);
    api
      .post("/habits/", newHabit, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => getHabits())
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Button
        _hover={{ color: "cyan.50", bg: "cyan.800" }}
        bg="teal.700"
        color="#c5d5da"
        onClick={onOpen}
      >
        Novo Hábito...
      </Button>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Novo Hábito</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form>
              <input
                ref={initialRef}
                placeholder="Digite um novo hábito"
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
                    defaultValue={category}
                    checked
                    id="healthy"
                    onClick={(e) => setCategory(e.target.value)}
                  />
                  <label htmlFor="healthy">Saúde</label>
                </div>
                {/* <div>
                  <input
                    type="radios"
                    name="category"
                    value
                    id="healthy"
                    onClick={(e) => setCategory(e.target.value)}
                  />
                  <label htmlFor="healthy">Lazer</label>
                </div> */}
              </div>
              <div>
                <div>
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
                  <div>
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
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <button onClick={handleSubmit}>Criar</button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default HabitCreateModal;
