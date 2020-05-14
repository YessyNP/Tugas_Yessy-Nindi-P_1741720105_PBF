import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import ProtectedRoute from "./components/protectedRoute";

import Login from "./components/Login";
import Main from './Main'
import logout from "./components/logout";

function App(props) {
  const { isAuthenticated, isVerifying } = props;
  return (
    <Switch>
    <ProtectedRoute exact path="/" component={Main} isAuthenticated={isAuthenticated} isVerifying={isVerifying}/>
    <Route path="/login" component={Login} />
    </Switch>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying
  };
}

export default connect(mapStateToProps)(App);