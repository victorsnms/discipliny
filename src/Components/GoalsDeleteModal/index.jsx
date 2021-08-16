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
import { ModalTitle } from "../HabitCreateModal/style";
import { useGoals } from "../../Provider/Goals";
import { FaTrash } from "react-icons/fa";

const GoalDeleteModal = ({ idGoal }) => {
  const { deleteGoal } = useGoals();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmit = () => {
    deleteGoal(idGoal);
    onClose();
  };

  return (
    <>
      <button onClick={onOpen}>
        <FaTrash />
      </button>
      <Modal isOpen={isOpen} onClose={onClose} className="style-modal">
        <ModalOverlay />
        <ModalContent>
          <ModalTitle>
            <ModalHeader>Deletar Meta</ModalHeader>
          </ModalTitle>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <p>Tem certeza que deseja excluir esta meta?</p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleSubmit} color="red">
              Excluir
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default GoalDeleteModal;
