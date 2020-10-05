import React from "react";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

// The app will not render correctly until you setup a Route component.
// Refer to the Basic Example documentation if you need to.

// (https://reacttraining.com/react-router/web/example/basic)
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div>
            <Nav />
            <Books />
          </div>
        </Route>

        <Route path="/books/:id">
          <Detail />
        </Route>

        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
