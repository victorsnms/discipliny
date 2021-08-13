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
import { ContainerCategory, ModalCategory, ModalInput, ModalTitle } from "./style";
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
    console.log(newHabit)
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
        <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose} className="style-modal">
          <ModalOverlay />
          <ModalContent>
            <ModalTitle>
              <h1>Novo Hábito</h1>
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
                  <ContainerCategory>
                    <div className="healthy">
                      <input
                        type="radio"
                        name="category"
                        value="Saúde"
                        checked
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
                        onClick={(e) => setCategory(e.target.value)}
                      />
                      <label for="recreation">Lazer</label>
                    </div >
                    <div className="mind">
                      <input
                        type="radio"
                        name="category"
                        value="Mente"
                        id="mind"
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
              <button onClick={handleSubmit}>Criar</button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
  );
};

export default HabitCreateModal;
