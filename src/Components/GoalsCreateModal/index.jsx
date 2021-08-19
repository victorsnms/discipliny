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
import { FiPlusSquare } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { useGoals } from "../../Provider/Goals";
import { ModalInput, ModalSelect, ModalTitle } from "../HabitCreateModal/style";

const GoalsCreateModal = ({ group }) => {
  const { id } = useParams();
  const initialRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState("");
  const [difficulty, setDifficulty] = useState("Fácil");
  const { addGoal, getGoals } = useGoals();
  const toast = useToast();
  const [isToast, setIsToast] = useState("unset");

  const handleSubmit = () => {
    const newGoal = {
      title: title,
      difficulty: difficulty,
      how_much_achieved: 0,
      group: id,
    };
    addGoal(newGoal, setIsToast);
    getGoals();
  };

  useEffect(() => {
    if (isToast === "success") {
      toast({
        title: "Metas",
        position: "top",
        description: "Nova meta criada com suceso",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      onClose();
      setTitle("")
      setDifficulty("Fácil")
    } else if (isToast === "error") {
      toast({
        title: "Metas",
        position: "top",
        description: "Verifique todo os campos e tente novamente",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
    setIsToast("unset");
  }, [isToast]);

  return (
    <>
      <button className="AddGoalButton" onClick={onOpen}>
        <FiPlusSquare />
      </button>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalTitle>
            <ModalHeader>Nova meta</ModalHeader>
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
export default GoalsCreateModal;
