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
  import api from "../../Services/api";
  
  const GroupUpdateModal = () => {
    const initialRef = useRef();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [token] = useState(
      JSON.parse(localStorage.getItem("@Discipliny:accessToken")) || ""
    );
  
    const [name, setName] = useState("nome do grupo");
    const [category, setCategory] = useState("Saúde");
    const [description, setDescription] = useState("descricao daora");
  
    const handleSubmit = () => {
      //importar , token
      const updateGroup = {
        name: name,
        category: category,
        description: description,
      };
      api
        .patch("/groups/", updateGroup, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(
          (response) => response
          //atualizar lista de gupos
        )
        .catch((err) => console.log(err));
    };
    return (
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <h1>Editar Grupo</h1>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form>
              <input
                ref={initialRef}
                placeholder="Digite um novo grupo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <div>
                <p>Em qual categoria se enquadra:</p>
                <div>
                  <input
                    type="radios"
                    name="category"
                    value="healthy"
                    checked
                    id="healthy"
                    onClick={(e) => setCategory(e.target.value)}
                  />
                  <label>Saúde</label>
                </div>
                <div>
                  <input
                    type="radios"
                    name="category"
                    value="healthy"
                    id="healthy"
                    onClick={(e) => setCategory(e.target.value)}
                  />
                  <label>Saúde</label>
                </div>
              </div>
              <div>
                <label>Uma breve descrição sobre seu grupo</label>
                <input
                  type="text"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  required
                />
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
  
  export default GroupUpdateModal;
  