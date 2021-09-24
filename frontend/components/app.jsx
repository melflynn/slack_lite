import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LoginAuthRoute, LogoutAuthRoute } from '../util/route_util';
import HomePage from './home_page';
import SignupContainer from './session_forms/signup_container';
import LoginContainer from './session_forms/login_container';

const App = () => (
  <div>
    <Switch>
      {/* <LoginAuthRoute path="/rooms" component={RoomsComponent} /> */}
      <LogoutAuthRoute path="/signup" component={SignupContainer} />
      <LogoutAuthRoute path="/login" component={LoginContainer} />
      <LogoutAuthRoute path="/" component={HomePage} />
    </Switch>
  </div>
)

export default App;