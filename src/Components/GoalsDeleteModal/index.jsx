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
import { ModalDelete, ModalTitle } from "../HabitCreateModal/style";
import { useGoals } from "../../Provider/Goals";
import { FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";

const GoalDeleteModal = ({ goal }) => {
  const { deleteGoal } = useGoals();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [isToast, setIsToast] = useState("unset");

  const handleSubmit = () => {
    deleteGoal(goal.id, setIsToast);
    onClose();
  };

  useEffect(() => {
    if (isToast === "success") {
      toast({
        title: "Metas",
        position: "top",
        description: "Deletado com sucesso",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      onClose();
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
      <button onClick={onOpen}>
        <FaTrash style={{ color: "#e73f36" }} />
      </button>
      <Modal isOpen={isOpen} onClose={onClose} className="style-modal">
        <ModalOverlay />
        <ModalContent>
          <ModalTitle>
            <ModalHeader>Deletar Meta</ModalHeader>
          </ModalTitle>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <ModalDelete>
              <p>Tem certeza que deseja excluir esta meta?</p>
              <h1>{goal.title}</h1>
            </ModalDelete>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} color="blue">
              Cancelar
            </Button>
            <Button onClick={handleSubmit} color="red" marginLeft="20px">
              Excluir
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default GoalDeleteModal;
