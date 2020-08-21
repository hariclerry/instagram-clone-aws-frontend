import React, { Component } from "react";
import auth0Client from "../Auth0/Auth";

class Home extends Component {
  componentDidMount() {
    if (!auth0Client.isAuthenticated()) {
      auth0Client.signIn();
    }
  }
  signOut = () => {
    auth0Client.signOut();
    this.props.history.replace("/");
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
      <h1>Hey there</h1>
          {auth0Client.isAuthenticated() && (
            <div>
              <label className="mr-2 text-white">
                {auth0Client.getProfile().name}
              </label>
              <br />
              <button
                className="btn btn-dark"
                onClick={() => {
                  this.signOut();
                }}
              >
                Sign Out
              </button>
            </div>
          )}
        </header>
      </div>
    );
  }
}

export default Home;
