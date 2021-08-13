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
  
  const GoalsUpdateModal = () => {
    const initialRef = useRef();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [token] = useState(
        JSON.parse(localStorage.getItem("@Discipliny:accessToken")) || ""
      );
    const [title, setTitle] = useState("Nome da meta");
    const [difficulty, setDifficulty] = useState("Fácil");
  
    const handleSubmit = () => {
      //importar  token e idgroup
      const updateGoal = {
        title: title,
        difficulty: difficulty,
        group: "userId",
      };
  
      api
        .patch("/goals/idgoal/", updateGoal, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((_) => "atualizar goals no provider")
        .catch((err) => console.log(err));
    };
  
    return (
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <h1>Editar meta</h1>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form>
              <input
                ref={initialRef}
                placeholder="Digite uma nova meta"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <div>
                <div>
                  <select
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                  >
                    <option value="Fácil" selected>
                      Fácil
                    </option>
                    <option value="Médio">Médio</option>
                    <option value="Difícil">Difícil</option>
                  </select>
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
  export default GoalsUpdateModal;
  