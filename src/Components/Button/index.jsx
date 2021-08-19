import { useLogged } from "../../Provider/Login";
import { StyledButton } from "./styles";

const Button = ({ text, type, item }) => {
  const { setLogged } = useLogged();
  const handleClick = () => {
    if (type === "login") {
    } else if (type === "logout") {
      localStorage.clear();
      setLogged(false);
    } else if (type === "signup") {
    } else if (type === "joingroup") {
    } else if (type === "leavegroup") {
    }
  };
  return (
    <>
      <StyledButton onClick={handleClick}>{text}</StyledButton>
    </>
  );
};

export default Button;
