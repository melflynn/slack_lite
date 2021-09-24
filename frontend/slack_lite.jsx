import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import { configureStore } from './store/store';
import { login, receiveCurrentUser } from './actions/session_actions';
import { receiveRooms, fetchRoomsForUser } from './actions/room_actions';


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  
  let store; 
  console.log(window.currentUser);

  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: {
          [window.currentUser.id]: window.currentUser
        }
      },
      session: {
        "currentUser": window.currentUser.id
      }
    }

    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.store = store;
  window.login = login;
  window.receiveCurrentUser = receiveCurrentUser;
  window.fetchRoomsForUser = fetchRoomsForUser;
  window.receiveRooms = receiveRooms;

  ReactDOM.render(<Root store={store}/>, root);
})