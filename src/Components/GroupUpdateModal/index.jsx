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
import { FiEdit } from "react-icons/fi";
import { useGroups } from "../../Provider/Groups/groupsCardList";
import { useParams } from "react-router-dom";
import { EditButton } from "./style";

const GroupUpdateModal = ({ group }) => {
  const initialRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { updateGroup } = useGroups();

  const [name, setName] = useState(group.name);
  const [category, setCategory] = useState("Saúde");
  const [description, setDescription] = useState(group.description);
  const [categoryChose, setCategoryChose] = useState("healthy");
  const [isToast, setIsToast] = useState("unset");
  const toast = useToast();
  const { id } = useParams();

  const handleSubmit = () => {
    const updateNewGroup = {
      name: name,
      category: category,
      description: description,
    };
    updateGroup(updateNewGroup, id, setIsToast);
  };

  const handleClick = (e, value) => {
    setCategory(e.target.value);
    setCategoryChose(value);
  };

  useEffect(() => {
    if (isToast === "success") {
      toast({
        title: "Grupo",
        description: "Grupo atualizado com sucesso",
        position: "top",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      onClose();
    } else if (isToast === "error") {
      toast({
        title: "Grupo",
        position: "top",
        description: "Verifique os campos e tente novamente",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
    setIsToast("unset");
  }, [isToast]);
  return (
    <>
      <EditButton onClick={onOpen}>
        <FiEdit />
      </EditButton>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalTitle>
            <ModalHeader>Editar Grupo</ModalHeader>
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

export default GroupUpdateModal;
