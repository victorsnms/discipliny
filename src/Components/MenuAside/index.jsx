import { MenuAside } from "./menu.styles";

const Menu = () => {
  return (
    <MenuAside>
      <aside>
        <h1>Discipliny</h1>
        <div className="ImgContainer">
          <img></img>
          <span>UserName</span>
        </div>
        <div className="ParagContainer">
          <p className="Hab">Habitos</p>
          <p className="MyGroup"> Meus Grupos</p>
          <p className="Descobrir">Descobrir</p>
        </div>
        <button>Sair</button>
      </aside>
    </MenuAside>
  );
};
export default Menu;
