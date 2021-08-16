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
import { FiEdit } from "react-icons/fi";
import { useGoals } from "../../Provider/Goals";
import { useGroups } from "../../Provider/Groups/groupsCardList";
import { ModalInput, ModalSelect, ModalTitle } from "../HabitCreateModal/style";

const GoalsUpdateModal = ({ idGoal }) => {
  const initialRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { updateGoal } = useGoals();
  const { getSpecificGroup } = useGroups();
  const [title, setTitle] = useState("Nome da meta");
  const [difficulty, setDifficulty] = useState("Fácil");

  const handleSubmit = () => {
    const newGoal = {
      title: title,
      difficulty: difficulty,
      achieved: "false",
    };
    updateGoal(newGoal, idGoal);
    getSpecificGroup();
    onClose();
  };

  return (
    <>
      <button onClick={onOpen}>
        {" "}
        <FiEdit />{" "}
      </button>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalTitle>
            <ModalHeader>Editar meta</ModalHeader>
          </ModalTitle>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form>
              <ModalInput
                ref={initialRef}
                placeholder="Digite uma nova meta"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <ModalSelect>
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
              </ModalSelect>
            </form>
          </ModalBody>

          <ModalFooter>
            <button onClick={handleSubmit}>Criar</button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default GoalsUpdateModal;
