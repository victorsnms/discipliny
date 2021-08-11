import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const changeTo = (path) => {
    history.push(path);
  };
  return (
    <>
      <h1 onClick={() => changeTo("/habits")}>Login</h1>
    </>
  );
}
export default Login;
