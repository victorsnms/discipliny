import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import api from "../../Services/api";
import { useHabits } from "../../Provider/Habits";

const HabitCreateModal = () => {
  const { getHabits } = useHabits();
  const initialRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDificulty] = useState("Fácil");
  const [frequency, setFrequency] = useState("Diário");

  const token = JSON.parse(localStorage.getItem("@Discipliny:accessToken"));
  const userId = JSON.parse(localStorage.getItem("@Discipliny:userId"));

  const handleSubmit = () => {
    //importar, token e iduser, setHAnits
    const newHabit = {
      title: title,
      category: category,
      difficulty: difficulty,
      frequency: frequency,
      achieved: false,
      how_much_achieved: 0,
      user: userId,
    };

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
    <>
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
          <h1>Novo Hábito</h1>
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
                    value={category}
                    checked
                    id="healthy"
                    onClick={(e) => setCategory(e.target.value)}
                  />
                  <label htmlFor="healthy">Saúde</label>
                </div>
                <div>
                  <input
                    type="radios"
                    name="category"
                    value="healthy"
                    id="healthy"
                    onClick={(e) => setCategory(e.target.value)}
                  />
                  <label htmlFor="healthy">Lazer</label>
                </div>
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
            </form>
          </ModalBody>
          <ModalFooter>
            <button onClick={handleSubmit}>Save</button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default HabitCreateModal;
