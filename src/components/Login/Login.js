import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="login">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="loginGroup">
              <div className="input-group username">
                <div className="username">
                  <input
                    type="text"
                    name="user"
                    id="username"
                    placeholder="Username"
                  />
                </div>
              </div>
              <div className="input-group">
                <div className="password">
                  <input
                    type="text"
                    name="pass"
                    id="password"
                    placeholder="Password"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
