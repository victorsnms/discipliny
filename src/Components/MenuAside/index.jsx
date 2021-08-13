import { useHistory } from "react-router-dom";
import Button from "../Button";
import { MenuAside } from "./menu.styles";

const Menu = () => {
  const history = useHistory();
  const name = JSON.parse(localStorage.getItem("@Discipliny:Nameuser"));
  console.log(name);

  const changeTo = (path) => {
    history.push(path);
  };
  return (
    <MenuAside>
      <aside>
        <h1>Discipliny</h1>
        <div className="ImgContainer">
          <img></img>
          <span>{name}</span>
        </div>
        <div className="ParagContainer">
          <p onClick={() => changeTo("/")} className="Hab">
            Habitos
          </p>
          <p onClick={() => changeTo("/mygroups")} className="MyGroup">
            {" "}
            Meus Grupos
          </p>
          <p onClick={() => changeTo("/groups")} className="Descobrir">
            Descobrir
          </p>
        </div>
        <Button text="Sair" type="logout" />
      </aside>
    </MenuAside>
  );
};
export default Menu;
