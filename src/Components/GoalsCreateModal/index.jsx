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
import { useGoals } from "../../Provider/Goals";
import { ModalInput, ModalSelect, ModalTitle } from "../HabitCreateModal/style";
  
  const GoalsCreateModal = ({group}) => {
    //receber pot props o id do grupo
    const initialRef = useRef();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [title, setTitle] = useState("");
    const [difficulty, setDifficulty] = useState("Fácil");
    const { addGoal } = useGoals()
  
    const handleSubmit = () => {
      const newGoal = {
        title: title,
        difficulty: difficulty,
        group: group.id,
      };
      addGoal(newGoal)
    };
  
    return (
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalTitle>
            <ModalHeader>Nova meta</ModalHeader>
          </ModalTitle>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form>
              <ModalInput
                ref={initialRef}
                placeholder="Digite uma nova meta"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <ModalSelect>
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
              </ModalSelect>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleSubmit}>Criar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  };
  export default GoalsCreateModal;
  