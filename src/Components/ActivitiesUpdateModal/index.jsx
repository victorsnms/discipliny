import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalOverlay,
    useDisclosure,
  } from "@chakra-ui/react";
  import { useRef, useState } from "react";
  import api from "../../Services/api"
  
  const ActivitiesUpdateModal = () => {
    const initialRef = useRef();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [token] = useState(
        JSON.parse(localStorage.getItem("@Discipliny:accessToken")) || ""
      );
    const [title, setTitle] = useState("Nome da atividade");
    const [date, setDate] = useState("");
  
    const handleSubmit = () => {
      //importar, token e iduser,, setHAnits
      const updateActivity = {
        title: title,
        realization_time: date,
        user: "groupId",
      };
  
      api
        .patch("/activities/idActvity", updateActivity, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((_) => "update de activities no provider")
        .catch((err) => console.log(err));
    };
  
    return (
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <h1>Editar Atividade</h1>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form>
              <input
                ref={initialRef}
                placeholder="Digite uma nova atividade"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <div>
                <p>Nova data para realizar:</p>
                <div>
                  <input type="date" value={date} onChange={e => setDate(e.target.value)} />
                </div>
              </div>   
            </form>
          </ModalBody>
          <ModalFooter>
            <button onClick={handleSubmit}>Criar</button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  };
  
  export default ActivitiesUpdateModal;