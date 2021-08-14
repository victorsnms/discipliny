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
import { useRef, useState } from "react";
import api from "../../Services/api";
import {
  ContainerCategory,
  ModalCategory,
  ModalInput,
  ModalTitle,
} from "../HabitCreateModal/style";
import { useGroups } from "../../Provider/Groups/groupsCardList";


const GroupCreateModal = ({ onClose, isOpen }) => {
  const initialRef = useRef();
  const [token] = useState(
    JSON.parse(localStorage.getItem("@Discipliny:accessToken")) || ""
  );
  const { addGroup } = useGroups();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("Saúde");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    //importar , token
    const newGroup = {
      name: name,
      category: category,
      description: description,
    };
      addGroup(newGroup)
  };
  return (
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
              <ContainerCategory>
                <div className="healthy">
                  <input
                    type="radio"
                    name="category"
                    value="Saúde"
                    checked
                    id="healthy"
                    onClick={(e) => setCategory(e.target.value)}
                  />
                  <label for="healthy">Saúde</label>
                </div>
                <div className="organization">
                  <input
                    type="radio"
                    name="category"
                    value="Organização"
                    id="organization"
                    onClick={(e) => setCategory(e.target.value)}
                  />
                  <label for="organization">Organização</label>
                </div>
                <div className="cleaning">
                  <input
                    type="radio"
                    name="category"
                    value="Limpeza"
                    id="cleaning"
                    onClick={(e) => setCategory(e.target.value)}
                  />
                  <label for="cleaning">Limpeza</label>
                </div>
                <div className="food">
                  <input
                    type="radio"
                    name="category"
                    value="Alimentação"
                    id="food"
                    onClick={(e) => setCategory(e.target.value)}
                  />
                  <label for="food">Alimentação</label>
                </div>
                <div className="education">
                  <input
                    type="radio"
                    name="category"
                    value="Educação"
                    id="education"
                    onClick={(e) => setCategory(e.target.value)}
                  />
                  <label for="education">Educação</label>
                </div>
                <div className="finances">
                  <input
                    type="radio"
                    name="category"
                    value="Finanças"
                    id="finances"
                    onClick={(e) => setCategory(e.target.value)}
                  />
                  <label for="finances">Finanças</label>
                </div>
                <div className="recreation">
                  <input
                    type="radio"
                    name="category"
                    value="Lazer"
                    id="recreation"
                    onClick={(e) => setCategory(e.target.value)}
                  />
                  <label for="recreation">Lazer</label>
                </div>
                <div className="mind">
                  <input
                    type="radio"
                    name="category"
                    value="Mente"
                    id="mind"
                    onClick={(e) => setCategory(e.target.value)}
                  />
                  <label for="mind">Mente</label>
                </div>
              </ContainerCategory>
            </ModalCategory>
            <div>
              <div>
                <label>Uma breve descrição sobre seu grupo</label>
                <textarea
                  type="text"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  required
                />
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

export default GroupCreateModal;
