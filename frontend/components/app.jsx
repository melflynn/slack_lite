import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LoginAuthRoute, LogoutAuthRoute } from '../util/route_util';
import HomePage from './home_page/home_page';
import SignupContainer from './session_forms/signup_container';
import LoginContainer from './session_forms/login_container';
import RoomsContainer from './rooms/rooms_container';
import RoomContainer from './rooms/room_container';

const App = () => (
  <div>
    <Switch>
      <LoginAuthRoute exact path="/rooms" component={RoomsContainer} />
      <LoginAuthRoute exact path="/rooms/:roomId" component={RoomContainer} />
      <LogoutAuthRoute exact path="/signup" component={SignupContainer} />
      <LogoutAuthRoute exact path="/login" component={LoginContainer} />
      <LogoutAuthRoute path="/" component={HomePage} />
    </Switch>
  </div>
)

export default App;