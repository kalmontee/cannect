import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './pages/Home';
import Explore from './pages/Explore';
import Profile from './pages/Profile';
import Notifications from './pages/Notifications';
import Messenger from './pages/Messenger';
import PrivateRoute from './hoc/RoutesProtection/PrivateRoute';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute exact path="/explore" component={Explore} />
          <PrivateRoute exact path="/notifications" component={Notifications} />
          <PrivateRoute exact path="/messages" component={Messenger} />
          <PrivateRoute exact path="/profile" component={Profile} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;

{/* <Route exact path="/profile" component={Profile} /> */ }