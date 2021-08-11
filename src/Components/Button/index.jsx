//import providers and useContext

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
  return <button onClick={handleClick}>{text}</button>;
};

export default Button;
