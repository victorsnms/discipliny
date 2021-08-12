import { Switch, Route } from "react-router-dom";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Habits from "../Pages/Habits";
import MyGroups from "../Pages/MyGroups";
import Groups from "../Pages/Groups";
import { useEffect, useState } from "react";

const Routes = () => {
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    const access = JSON.parse(localStorage.getItem("@Discipliny:accessToken"));

    if (access) {
      return setLogged(true);
    }
  }, [logged]);

  return (
    <Switch>
      <Route exact path="/">
        <Login logged={logged} setLogged={setLogged} />
      </Route>
      <Route path="/signup">
        <SignUp logged={logged} />
      </Route>
      <Route path="/groups">
        <Groups />
      </Route>
      <Route path="/habits">
        <Habits logged={logged} />
      </Route>
      <Route path="/mygroups">
        <MyGroups />
      </Route>
      <Route path="groups/id/"></Route>
    </Switch>
  );
};

export default Routes;
