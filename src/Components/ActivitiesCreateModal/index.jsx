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
  import { useRef, useState } from "react";
import { useActivities } from "../../Provider/Activities";
import { ModalInput, ModalTitle } from "../HabitCreateModal/style";
  
  const ActivitiesCreateModal = () => {
    const initialRef = useRef();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { createActivity } = useActivities()
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
  
    const handleSubmit = () => {
      //importar, token e iduser,, setHAnits
      const newActivity = {
        title: title,
        realization_time: date,
        user: "groupId",
      };
  
      createActivity(newActivity)
    };
  
    return (
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalTitle>
            <ModalHeader>Nova Atividade</ModalHeader>
          </ModalTitle>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form>
              <ModalInput
                ref={initialRef}
                placeholder="Digite uma nova atividade"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <div>
                <p>Ate quando você pretende realizá-la:</p>
                <div>
                  <input type="date" value={date} onChange={e => setDate(e.target.value)} />
                </div>
              </div>   
            </form>
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleSubmit}>Criar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  };
  
  export default ActivitiesCreateModal;
  