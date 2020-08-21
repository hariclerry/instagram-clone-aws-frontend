import React, { Component } from "react";
import { Route, Router, Switch } from "react-router-dom";
import { Button } from "react-bootstrap";

import { NotFound } from "./components/notFound/notFound";
import Post from "./components/posts/posts";
import {LogIn} from "./components/login/login"

import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin() {
    this.props.auth.login();
  }

  handleLogout() {
    this.props.auth.logout();
  }

  render() {
    return (
      <div>
        <Router history={this.props.history}>
          {this.generateMenu()}

          {this.generateCurrentPage()}
        </Router>
      </div>
    );
  }

  generateMenu() {
    return (
      <div>
        <nav className="Nav">
          <div className="Nav-menus">
            <div className="Nav-brand">
              <a className="Nav-brand-logo" href="/">
                Instagram
              </a>
            </div>
            <div> {this.logInLogOutButton()}</div>
          </div>
        </nav>
      </div>
    );
  }

  logInLogOutButton() {
    if (this.props.auth.isAuthenticated()) {
      return (
        <Button className="Nav-link"  variant="link" onClick={this.handleLogout}>
          LogOut
        </Button>
      );
    } else {
      return (
        <Button className="Nav-link"  variant="link" onClick={this.handleLogin}>
          Login
        </Button>
      );
    }
  }

  generateCurrentPage() {
    if (!this.props.auth.isAuthenticated()) {
      return <LogIn auth={this.props.auth} />;
    }

    return (
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => {
            return <Post {...props} auth={this.props.auth} />;
          }}
        />


        <Route component={NotFound} />
      </Switch>
    );
  }
}
