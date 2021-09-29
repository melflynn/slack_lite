import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { LoginAuthRoute, LogoutAuthRoute } from '../util/route_util';
import HomePage from './home_page/home_page';
import MainContainer from './rooms/main_container';
import RoomsContainer from './rooms/rooms_container';
import RoomContainer from './rooms/room_container';

const App = () => (
  <div>
    <Switch>
      <LoginAuthRoute exact path="/main" component={MainContainer} />
      <LoginAuthRoute exact path="/rooms" component={RoomsContainer} />
      <LoginAuthRoute exact path="/rooms/:roomId" component={RoomContainer} />
      <LogoutAuthRoute exact path="/" component={HomePage} />
      <Redirect to="/" />
    </Switch>
  </div>
)

export default App;