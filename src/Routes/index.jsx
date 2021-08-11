import { Switch, Route } from "react-router-dom";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import Habits from "../components/Habits";
import MyGroups from "../components/MyGroups";
import Groups from "../components/Groups";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/signUp">
        <SignUp />
      </Route>
      <Route path="/groups">
        <Groups />
      </Route>
      <Route path="/habits">
        <Habits />
      </Route>
      <Route path="/myGroups">
        <MyGroups />
      </Route>
      <Route path="groups/id/"></Route>
    </Switch>
  );
};

export default Routes;
