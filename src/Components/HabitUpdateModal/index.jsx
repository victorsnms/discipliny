import {
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

const HabitUpdateModal = () => {
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
    const updateHabit = {
      title: title,
      category: category,
      difficulty: difficulty,
      frequency: frequency,
      user: "userId",
    };

    api
      .patch("/habits/idhabit/", updateHabit, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => "atualizaar lista de habitoss")
      .catch((err) => console.log(err));
  };

  return (
    <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Editar Hábito</ModalHeader>
        <ModalCloseButton />
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
                  value="Saúde"
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
                  value="Organização"
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
  );
};

export default HabitUpdateModal;
