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
import { ModalTitle } from "../HabitCreateModal/style";
import { FiEdit } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import avatar from "../../assets/avatars/avatar1.png";
import { useUser } from "../../Provider/User";
import { EditUsernameContainer, ImageContainer, MenuButton } from "./style";
import { useLogged } from "../../Provider/Login";

const ProfileModal = () => {
  const name = JSON.parse(localStorage.getItem("@Discipliny:Nameuser"));
  const [updateName, setUpdateName] = useState();
  const { updateUserFunc, getUser } = useUser();
  const [isToast, setIsToast] = useState("unset");
  const [show, setShow] = useState(true);
  const initialRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { setLogged } = useLogged();

  const toast = useToast();

  const handleLogout = () => {
    localStorage.clear();
    setLogged(false);
    onClose();
  };

  const handleClick = () => {
    setShow(false);
  };

  const sendData = () => {
    const update = {
      username: updateName,
    };
    updateUserFunc(update, setIsToast);
  };

  useEffect(() => {
    if (isToast === "success") {
      getUser();
      toast({
        title: "Usuário",
        position: "top-left",
        description: "Nome editado =)",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else if (isToast === "error") {
      toast({
        title: "Usuário",
        position: "top-left",
        description: "Não foi possível editar agora!",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
    setShow(true);
    setIsToast("unset");
  }, [isToast]);

  return (
    <>
      <FaUserAlt onClick={onOpen} />
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalTitle>
            <ModalHeader>Editar Usuário</ModalHeader>
          </ModalTitle>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <ImageContainer src={avatar} alt="profile-avatar" />
            <EditUsernameContainer>
              {show ? (
                <>
                  <h2>Usuário:</h2>
                  <span>{name}</span>
                  <button onClick={handleClick}>
                    <FiEdit />
                  </button>
                </>
              ) : (
                <>
                  <h2>Usuário:</h2>
                  <input
                    value={updateName}
                    onChange={(e) => setUpdateName(e.target.value)}
                    type="text"
                  />

                  <button onClick={sendData}>
                    <FiEdit />
                  </button>
                </>
              )}
            </EditUsernameContainer>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} color="blue">
              Voltar
            </Button>
            <Button onClick={handleLogout} color="red" marginLeft="20px">
              Sair
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileModal;
