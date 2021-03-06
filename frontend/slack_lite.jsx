import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
// import './styles/styles.scss'
import { configureStore } from './store/store';
import * as MessageUtil from './util/message_util';


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  
  let store; 

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
  window.messageUtil = MessageUtil;

  ReactDOM.render(<Root store={store}/>, root);
})