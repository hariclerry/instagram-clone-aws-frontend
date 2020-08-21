import React from "react";
import Auth from "./Auth0/Auth";
import { Router, Route } from "react-router-dom";
import Callback from "./Auth0/callback";
import createHistory from "history/createBrowserHistory";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

const history = createHistory();
const auth = new Auth(history);

const handleAuthentication = (props) => {
  const location = props.location;
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};

export const makeAuthRouting = () => {
  return (
    <Router history={history}>
      <div>
        <Route
          path="/callback"
          render={(props) => {
            handleAuthentication(props);
            return <Callback />;
          }}
        />
        <Route
          render={(props) => {
            return <App auth={auth} {...props} />;
          }}
        />
      </div>
    </Router>
  );
};
