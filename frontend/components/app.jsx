import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './home_page';
import SignupContainer from './signup/signup_container';

const App = () => (
  <div>
    <Switch>
      <Route path="/login" component={SignupContainer} />
      <Route path="/" component={HomePage} />
    </Switch>
  </div>
)

export default App;