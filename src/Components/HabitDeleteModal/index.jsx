import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useToast,
} from "@chakra-ui/react";
import { ModalDelete, ModalTitle } from "../HabitCreateModal/style";
import { useHabits } from "../../Provider/Habits";
import { useEffect, useState } from "react";

const HabitDeleteModal = ({ onClose, isOpen, habits }) => {
  const { deleteHabit } = useHabits();
  const [isToast, setIsToast] = useState("unset");
  const toast = useToast();

  const handleSubmit = () => {
    deleteHabit(habits.id, setIsToast);
    onClose();
  };

  useEffect(() => {
    if (isToast === "success") {
      toast({
        title: "Hábito Excluído",
        description: "Exclusão efetuada com sucesso",
        position: "top",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      onClose();
    } else if (isToast === "error") {
      toast({
        title: "Exclusão Pendente",
        position: "top",
        description: "Não foi possível excluir",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
    setIsToast("unset");
  }, [isToast]);

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose} className="style-modal">
        <ModalOverlay />
        <ModalContent>
          <ModalTitle>
            <ModalHeader>Deletar Hábito</ModalHeader>
          </ModalTitle>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <ModalDelete>
              <p>Tem certeza que deseja excluir este hábito?</p>
              <h1>{habits.title}</h1>
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
    </div>
  );
};

export default HabitDeleteModal;
