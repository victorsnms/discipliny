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
    ModalDelete,
    ModalTitle,
  } from "../HabitCreateModal/style";
  import { useHabits } from "../../Provider/Habits";
  
  const HabitDeleteModal = ({ onClose, isOpen, habits}) => {
    const { deleteHabit } = useHabits();
  
  
    const handleSubmit = () => {
     deleteHabit(habits.id);
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
              <ModalHeader>Deletar Hábito</ModalHeader>
            </ModalTitle>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <ModalDelete>
                <p>Tem certeza que deseja excluir este hábito:</p>
                <h1>{habits.title}</h1>
              </ModalDelete>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose} color="blue">Cancelar</Button>
              <Button onClick={handleSubmit} color="red" marginLeft="20px">Excluir</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    );
  };
  
  export default HabitDeleteModal;
  