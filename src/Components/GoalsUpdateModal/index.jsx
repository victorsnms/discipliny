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
import { FiEdit } from "react-icons/fi";
import { useGoals } from "../../Provider/Goals";
import { ModalInput, ModalSelect, ModalTitle } from "../HabitCreateModal/style";

const GoalsUpdateModal = ({ goal }) => {
  const initialRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { updateGoal } = useGoals();
  const [title, setTitle] = useState(goal.title);
  const [difficulty, setDifficulty] = useState(goal.difficulty);
  const toast = useToast();
  const [isToast, setIsToast] = useState("unset");

  const handleSubmit = () => {
    const newGoal = {
      title: title,
      difficulty: difficulty,
      achieved: "false",
    };
    updateGoal(newGoal, goal.id, setIsToast);
    onClose();
  };

  useEffect(() => {
    if (isToast === "success") {
      toast({
        title: "Metas",
        position: "top",
        description: "Edição Concluída",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      onClose();
    } else if (isToast === "error") {
      toast({
        title: "Metas",
        position: "top",
        description: "Não foi possível excluir a meta tente novamente",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
    setIsToast("unset");
  }, [isToast]);

  return (
    <>
      <button onClick={onOpen}>
        <FiEdit class="button_edit" />
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
                  <p>Dificuldade:</p>
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
            <Button onClick={onClose} color="red">
              Cancelar
            </Button>
            <Button onClick={handleSubmit} color="blue" marginLeft="20px">
              Salvar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default GoalsUpdateModal;
