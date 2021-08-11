import { Switch, Route } from "react-router-dom";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/"></Route>
      <Route path="/signUp"></Route>
      <Route path="/groups"></Route>
      <Route path="/myGroups"></Route>
      <Route path="groups/id/"></Route>
    </Switch>
  );
};

export default Routes;
