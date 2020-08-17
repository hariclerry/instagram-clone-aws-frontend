import * as React from "react";
import Auth from "../../Auth0/Auth";
import Button from "react-bootstrap/Button";
import './login.css'


export class LogIn extends React.PureComponent {
  onLogin = () => {
    this.props.auth.login();
  };

  render() {
    return (
      <div className="login-page">
        <h1>Please log in</h1>

        <Button className="Nav-link-btn"  onClick={this.onLogin} variant="primary">
          Login
        </Button>
      </div>
    );
  }
}
