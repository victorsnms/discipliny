import { Redirect, useHistory } from "react-router-dom";

function Habits({ logged }) {
  const history = useHistory();
  const changeTo = (path) => {
    history.push(path);
  };

  if (!logged) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <h1 onClick={() => changeTo("/groups")}>Habits</h1>
    </>
  );
}
export default Habits;
