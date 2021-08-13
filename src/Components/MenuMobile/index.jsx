import { MenuMobileC } from "../MenuMobile/menuMobile.style";
import { useHistory } from "react-router-dom";

const MenuMobile = () => {
  const history = useHistory();

  const changeTo = (path) => {
    history.push(path);
  };
  return (
    <MenuMobileC>
      <button onClick={() => changeTo("/")} className="buttonHab">
        Habit
      </button>
      <button onClick={() => changeTo("/mygroups")} className="buttonMyGrup">
        My Grp
      </button>
      <button onClick={() => changeTo("/groups")} className="buttonDesco">
        Desco
      </button>
    </MenuMobileC>
  );
};

export default MenuMobile;
