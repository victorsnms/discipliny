import { MenuMobileC } from "../MenuMobile/menuMobile.style";
import { useHistory } from "react-router-dom";
import { MdGroup } from "react-icons/md";
import { BiTask } from "react-icons/bi";
import { FaRegCompass } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import ProfileModal from "../ProfileModal";

const MenuMobile = () => {
  const history = useHistory();

  const changeTo = (path) => {
    history.push(path);
  };
  return (
    <MenuMobileC>
      <button onClick={() => changeTo("/")} className="buttonHab">
        <BiTask />
      </button>
      <button onClick={() => changeTo("/mygroups")} className="buttonMyGrup">
        <MdGroup />
      </button>
      <button onClick={() => changeTo("/groups")} className="buttonDesco">
        <FaRegCompass />
      </button>
      <button className="buttonProfile">
        <ProfileModal />
      </button>
    </MenuMobileC>
  );
};

export default MenuMobile;
