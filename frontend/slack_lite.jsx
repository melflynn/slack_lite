import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import { configureStore } from './store/store';
import { login, receiveCurrentUser } from './actions/session_actions';


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: {
          [window.currentUser.id]: window.currentUser
        }
      },
      session: {
        "currentUserId": window.currentUser.id
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

  ReactDOM.render(<Root store={store}/>, root);
})