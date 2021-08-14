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
  import { useActivities } from "../../Provider/Activities";
  
  const ActivitiesDeleteModal = ({ onClose, isOpen, activity}) => {
    const { deleteActivity } = useActivities();
  
  
    const handleSubmit = () => {
     deleteActivity(activity.id);
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
              <p>Tem certeza que deseja excluir este hábito: {activity.title}</p>
            </ModalBody>
            <ModalFooter>
              <Button onClick={handleSubmit} color="red">Excluir</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    );
  };
  
  export default ActivitiesDeleteModal;
  