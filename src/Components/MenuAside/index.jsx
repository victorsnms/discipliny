import { useHistory } from "react-router-dom";
import Button from "../Button";
import { MenuAside } from "./menu.styles";
import { BiTask } from "react-icons/bi";
import { MdGroup } from "react-icons/md";
import { FaRegCompass } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useUser } from "../../Provider/User";
import { useToast } from "@chakra-ui/react";
import { FiEdit } from "react-icons/fi";
import img from "../../assets/avatars/avatar1.png";
import img2 from "../../assets/edit-pen-icon.jpg";

const Menu = () => {
  const history = useHistory();
  const [updateName, setUpdateName] = useState();
  const name = JSON.parse(localStorage.getItem("@Discipliny:Nameuser"));
  const { updateUserFunc, getUser } = useUser();
  const [isToast, setIsToast] = useState("unset");
  const [show, setShow] = useState(true);

  const toast = useToast();

  const changeTo = (path) => {
    history.push(path);
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

  const Close = () => {
    setShow(true);
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
    <MenuAside>
      <aside>
        <h1>Discipliny</h1>
        <div className="ImgContainer">
          <img src={img} alt="avatar" />

          <div className="EditUsername">
            {show ? (
              <>
                <span>{name}</span>
                <button onClick={handleClick}>
                  <FiEdit />
                </button>
              </>
            ) : (
              <>
                <input
                  defaultValue={updateName}
                  onChange={(e) => setUpdateName(e.target.value)}
                  type="text"
                />

                <button onClick={sendData}>
                  <FiEdit />
                </button>
                <button onClick={Close}>X</button>
              </>
            )}
          </div>
        </div>
        <div className="ParagContainer">
          <p onClick={() => changeTo("/")} className="Hab">
            <BiTask /> Hábitos
          </p>
          <p onClick={() => changeTo("/mygroups")} className="MyGroup">
            <MdGroup />
            Meus Grupos
          </p>
          <p onClick={() => changeTo("/groups")} className="Descobrir">
            <FaRegCompass />
            Descobrir
          </p>
        </div>
        <Button text="Sair" type="logout" />
      </aside>
    </MenuAside>
  );
};
export default Menu;
