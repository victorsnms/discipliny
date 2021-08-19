import { Switch, Route } from "react-router-dom";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Habits from "../Pages/Habits";
import MyGroups from "../Pages/MyGroups";
import Groups from "../Pages/Groups";
import Groupsid from "../Pages/groupsId";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/groups">
        <Groups />
      </Route>
      <Route path="/habits">
        <Habits />
      </Route>
      <Route path="/mygroups">
        <MyGroups />
      </Route>
      <Route path="/groupsid/:id">
        <Groupsid />
      </Route>
    </Switch>
  );
};

export default Routes;
