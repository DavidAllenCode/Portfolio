import React, { Component } from "react";
import base from "../Firebase/base";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      company: ""
    };
  }

  componentDidMount() {
    this.ref = base.syncState(`company/`, {
      context: this,
      state: "company"
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  enterSite = event => {
    console.log("event-> " + JSON.stringify(event));

    event.preventDefault();

    // this.props.history.push("/main");
  };

  handleChange = event => {
    if (event && event.target.id === "inputName") {
      this.setState({ name: event.target.value });
    } else {
      this.setState({ company: event.target.value });
    }
  };

  render() {
    return (
      <div className="login">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="loginGroup">
              {/* <div className="input-group username">
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
              </div> */}
              <form className="nameInput" onSubmit={this.enterSite}>
                <h2>Please enter your name and company</h2>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.name}
                    required
                    placeholder="Name"
                    id="inputName"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    required
                    value={this.state.company}
                    placeholder="Company"
                    onChange={this.handleChange}
                  />
                </div>
                <button
                  className="btn btn-primary btn-enter text-center w-100"
                  type="submit"
                >
                  Enter
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
