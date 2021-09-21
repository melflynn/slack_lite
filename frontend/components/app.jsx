import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './home_page';
import SignupContainer from './session_forms/signup_container';
import LoginContainer from './session_forms/login_container';

const App = () => (
  <div>
    <Switch>
      <Route path="/signup" component={SignupContainer} />
      <Route path="/login" component={LoginContainer} />
      <Route path="/" component={HomePage} />
    </Switch>
  </div>
)

export default App;