import { useHistory } from "react-router-dom";

function Groups() {
  const history = useHistory();
  const changeTo = (path) => {
    history.push(path);
  };
  return (
    <>
      <h1 onClick={() => changeTo("/")}>Groups</h1>
    </>
  );
}
export default Groups;
