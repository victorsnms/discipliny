import { useHistory } from "react-router-dom";

function MyGroups() {
  const history = useHistory();
  const changeTo = (path) => {
    history.push(path);
  };
  return (
    <>
      <h1 onClick={() => changeTo("/signUp")}>My groups</h1>
    </>
  );
}
export default MyGroups;
