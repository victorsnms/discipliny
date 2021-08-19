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
  useDisclosure,
} from "@chakra-ui/react";
import { ModalDelete, ModalTitle } from "../HabitCreateModal/style";
import { useActivities } from "../../Provider/Activities";
import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

const ActivitiesDeleteModal = ({ activity }) => {
  const { deleteActivity } = useActivities();
  const [isToast, setIsToast] = useState("unset");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const handleSubmit = () => {
    deleteActivity(activity.id, setIsToast);
    onClose();
  };

  useEffect(() => {
    if (isToast === "success") {
      toast({
        title: "Atividades",
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
      <button style={{ color: "#e73f36" }} onClick={onOpen}>
        <FaTrash />
      </button>
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
              <h1>{activity.title}</h1>
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

export default ActivitiesDeleteModal;
