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

import {
  ContainerCategory,
  ModalCategory,
  ModalInput,
  ModalTextArea,
  ModalTitle,
} from "../HabitCreateModal/style";
import { useGroups } from "../../Provider/Groups/groupsCardList";
import { useMyGroups } from "../../Provider/MyGroups";

const GroupCreateModal = () => {
  const initialRef = useRef();
  const { addGroup } = useGroups();
  const { getGroups } = useMyGroups();
  const [isToast, setIsToast] = useState("unset");
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Saúde");
  const [description, setDescription] = useState("");
  const [categoryChose, setCategoryChose] = useState("healthy");

  const handleSubmit = () => {
    const newGroup = {
      name: name,
      category: category,
      description: description,
    };
    addGroup(newGroup, setIsToast);
    getGroups();
  };

  const handleClick = (e, value) => {
    setCategory(e.target.value);
    setCategoryChose(value);
  };

  useEffect(() => {
    if (isToast === "success") {
      toast({
        title: "Grupo",
        description: "Grupo criado com sucesso",
        position: "top",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      onClose();
      setName("");
      setDescription("");
      setCategory("Saúde");
      setCategoryChose("healthy");
    } else if (isToast === "error") {
      toast({
        title: "Grupo",
        position: "top",
        description: "Verifique os campos e tente novamente",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
    getGroups();
    setIsToast("unset");
  }, [isToast]);

  return (
    <div className="ModalGrpPos">
      <Button
        _hover={{ color: "cyan.50", bg: "cyan.800" }}
        bg="teal.700"
        color="#c5d5da"
        onClick={onOpen}
      >
        Novo Grupo...
      </Button>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalTitle>
            <ModalHeader>Novo Grupo</ModalHeader>
          </ModalTitle>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form>
              <ModalInput
                ref={initialRef}
                placeholder="Digite um novo Grupo"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
              <ModalCategory>
                <p>Em qual categoria se enquadra:</p>
                <ContainerCategory categoryChose={categoryChose}>
                  <div className="healthy">
                    <input
                      type="radio"
                      name="category"
                      value="Saúde"
                      id="healthy"
                      onClick={(e) => handleClick(e, e.target.id)}
                    />
                    <label for="healthy">Saúde</label>
                  </div>
                  <div className="organization">
                    <input
                      type="radio"
                      name="category"
                      value="Organização"
                      id="organization"
                      onClick={(e) => handleClick(e, e.target.id)}
                    />
                    <label for="organization">Organização</label>
                  </div>
                  <div className="cleaning">
                    <input
                      type="radio"
                      name="category"
                      value="Limpeza"
                      id="cleaning"
                      onClick={(e) => handleClick(e, e.target.id)}
                    />
                    <label for="cleaning">Limpeza</label>
                  </div>
                  <div className="food">
                    <input
                      type="radio"
                      name="category"
                      value="Alimentação"
                      id="food"
                      onClick={(e) => handleClick(e, e.target.id)}
                    />
                    <label for="food">Alimentação</label>
                  </div>
                  <div className="education">
                    <input
                      type="radio"
                      name="category"
                      value="Educação"
                      id="education"
                      onClick={(e) => handleClick(e, e.target.id)}
                    />
                    <label for="education">Educação</label>
                  </div>
                  <div className="finances">
                    <input
                      type="radio"
                      name="category"
                      value="Finanças"
                      id="finances"
                      onClick={(e) => handleClick(e, e.target.id)}
                    />
                    <label for="finances">Finanças</label>
                  </div>
                  <div className="recreation">
                    <input
                      type="radio"
                      name="category"
                      value="Lazer"
                      id="recreation"
                      onClick={(e) => handleClick(e, e.target.id)}
                    />
                    <label for="recreation">Lazer</label>
                  </div>
                  <div className="mind">
                    <input
                      type="radio"
                      name="category"
                      value="Mente"
                      id="mind"
                      onClick={(e) => handleClick(e, e.target.id)}
                    />
                    <label for="mind">Mente</label>
                  </div>
                </ContainerCategory>
              </ModalCategory>
              <ModalTextArea>
                <div>
                  <label>Uma breve descrição sobre seu grupo:</label>
                  <textarea
                    type="text"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    required
                  />
                </div>
              </ModalTextArea>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button onClick={handleSubmit} color="blue">
              Criar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default GroupCreateModal;
