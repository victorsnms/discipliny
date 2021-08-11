import { useHistory } from "react-router-dom";

function Habits() {
  const history = useHistory();
  const changeTo = (path) => {
    history.push(path);
  };
  return (
    <>
      <h1 onClick={() => changeTo("/groups")}>Habits</h1>
    </>
  );
}
export default Habits;
