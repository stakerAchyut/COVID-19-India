import React, { useState } from 'react';
import { Switch, Route, Router } from "react-router-dom";
import { routes } from "./routing/index";
import history from "./history/index";
const App = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(0);
  return (
      <Router history={history}>
        <Switch>
          {routes.map(routes => (
            <Route
              key={routes.path}
              exact={routes.isExact}
              path={routes.path}
              render={() => (<routes.component />)}
            />
          ))}

        </Switch>
      </Router>
  )
}

export default App;