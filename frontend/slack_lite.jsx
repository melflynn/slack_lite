import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import { configureStore } from './store/store';
import { login, receiveCurrentUser } from './actions/session_actions';


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();

  window.store = store;
  window.login = login;
  window.receiveCurrentUser = receiveCurrentUser;

  ReactDOM.render(<Root store={store}/>, root);
})