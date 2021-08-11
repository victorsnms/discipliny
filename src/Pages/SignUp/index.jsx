import { useHistory } from "react-router-dom";

function SignUp() {
  const history = useHistory();
  const changeTo = (path) => {
    history.push(path);
  };
  return (
    <>
      <h1 onClick={() => changeTo("/")}>Sign up</h1>
    </>
  );
}
export default SignUp;
