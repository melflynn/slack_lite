import React, { Component } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const LogoutAuth = ({component: Component, path, loggedIn, exact}) => (
  <Route path={path} exact={exact} render={props => !loggedIn ? <Component {...props} /> : <Redirect to="/rooms" />} />
)

const LoginAuth = ({component: Component, path, loggedIn, exact}) => (
  <Route path={path} exact={exact} render={props => loggedIn ? <Component {...props} /> : <Redirect to="/login" />} />
)

const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.currentUser)
})

export const LogoutAuthRoute = withRouter(connect(mapStateToProps, null)(LogoutAuth));

export const LoginAuthRoute = withRouter(connect(mapStateToProps, null)(LoginAuth));