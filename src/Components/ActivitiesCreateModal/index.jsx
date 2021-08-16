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
import { ModalInput, ModalTitle } from "../HabitCreateModal/style";
  
  const ActivitiesCreateModal = () => {
    const initialRef = useRef();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { createActivity } = useActivities()
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const toast = useToast()
  const [isToast, setIsToast ] = useState("unset")
  
    const handleSubmit = () => {
      //importar, token e iduser,, setHAnits
      const newActivity = {
        title: title,
        realization_time: date,
        user: "groupId",
      };
  
      createActivity(newActivity)
    };

    useEffect(() => {
      if (isToast === "success"){
        toast({
          title: "Atividades",
          position: "top",
          description: "Nova atividade criada com sucesso",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
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
          <Button onClick={onClose} color="blue">Cancelar</Button>
              <Button onClick={handleSubmit} color="red" marginLeft="20px">Criar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  };
  
  export default ActivitiesCreateModal;
  