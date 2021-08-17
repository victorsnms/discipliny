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
import { useActivities } from "../../Provider/Activities";
import { ModalDate, ModalInput, ModalTitle } from "../HabitCreateModal/style";
import { FiEdit } from "react-icons/fi";

  
  const ActivitiesUpdateModal = ({activity}) => {
    const initialRef = useRef();
    const { isOpen, onOpen, onClose } = useDisclosure();
   const {updateActivity} = useActivities()
    const [title, setTitle] = useState(activity.title);
    const [date, setDate] = useState(activity.realization_time);
    const [isToast,setIsToast] = useState("unset");
  const toast = useToast();
  
    const handleSubmit = () => {
      const newActivity = {
        title: title,
        realization_time: date,
        
      }
      updateActivity(newActivity, activity.id, setIsToast)
    };

    useEffect(() => {
      if (isToast === "success"){
        toast({
          title: "Atividades",
          position: "top",
          description: "Atividade atualizada com sucesso",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        onClose()
      } else if (isToast === "error") {
        toast({
          title:"Atividades",
          position: "top",
          description: "Verifique todo os campos e tente novamente",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      }
      setIsToast("unset")
    },[isToast])
  
    return (

      <>
      <button onClick={onOpen}>
        <FiEdit />
      </button>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalTitle>
            <ModalHeader>Editar Atividade</ModalHeader>
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
              <ModalDate>
                <p>Nova data para realizar:</p>
                <div>
                  <input
                    type="datetime-local"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
              </ModalDate>
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

export default ActivitiesUpdateModal;
