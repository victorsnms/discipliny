import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
  } from "@chakra-ui/react";
  import {
    ModalTitle,
  } from "../HabitCreateModal/style";
  import { useGoals } from "../../Provider/Goals";
  
  const GoalDeleteModal = ({ onClose, isOpen, goal}) => {
    const { deleteGoal } = useGoals();
  
  
    const handleSubmit = () => {
     deleteGoal(goal.id);
     onClose()
    };
  
    return (
      <div>
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          className="style-modal"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalTitle>
              <ModalHeader>Deletar Meta</ModalHeader>
            </ModalTitle>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <p>Tem certeza que deseja excluir esta meta: {goal.title}</p>
            </ModalBody>
            <ModalFooter>
              <Button onClick={handleSubmit} color="red">Excluir</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    );
  };
  
  export default GoalDeleteModal;
  