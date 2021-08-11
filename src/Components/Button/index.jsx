//import providers and useContext

import { StyledButton } from "./styles";

const Button = ({ text, type, item }) => {
  const handleClick = () => {
    //Context

    if (type === "login") {
    } else if (type === "logout") {
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
